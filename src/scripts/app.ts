import type { IndoorUnit, OutdoorUnit, MultiUnit } from '../lib/data';

type Tab = 'indoor' | 'outdoor' | 'multi';
type Unit = IndoorUnit | OutdoorUnit | MultiUnit;

const DATA = JSON.parse(document.getElementById('unit-data')!.textContent!) as {
  indoor: IndoorUnit[];
  outdoor: OutdoorUnit[];
  multi: MultiUnit[];
};

const outdoorByModel = new Map<string, OutdoorUnit>();
for (const o of DATA.outdoor) if (!outdoorByModel.has(o.model)) outdoorByModel.set(o.model, o);

// ---------- state ----------
interface Filters {
  manufacturer: string;
  type: string;
  group: string;
  range: string;
  colour: string;
  coolKw: string;
  msOnly: boolean;
  maxIndoor: string;
}
const emptyFilters = (): Filters => ({
  manufacturer: '', type: '', group: '', range: '', colour: '',
  coolKw: '', msOnly: false, maxIndoor: '',
});

const state = {
  tab: 'indoor' as Tab,
  search: '',
  sort: 'default',
  filters: { indoor: emptyFilters(), outdoor: emptyFilters(), multi: emptyFilters() } as Record<Tab, Filters>,
};

// ---------- helpers ----------
const $ = <T extends HTMLElement>(sel: string) => document.querySelector(sel) as T;
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const gbp = (n: number | null) =>
  n == null ? '—' : '£' + n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const kw = (n: number | null) => (n == null ? '—' : `${n} kW`);

const uniq = (arr: string[]) => [...new Set(arr.filter(Boolean))].sort((a, b) => a.localeCompare(b));

const NOIMG = `<div class="noimg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="9" rx="2"/><path d="M5 9h10M6 18c0 1.5-1 2-1 2M12 18c0 1.5-1 2-1 2M18 18c0 1.5-1 2-1 2"/></svg>No image</div>`;

const img = (url: string, alt: string) =>
  url
    ? `<img src="${esc(url)}" alt="${esc(alt)}" loading="lazy" onerror="this.outerHTML=this.parentElement.dataset.fallback||''">`
    : NOIMG;

function coolOf(u: Unit): number | null { return u.coolKw; }
function tradeOf(u: Unit): number | null { return u.trade; }

// ---------- filtering ----------
function currentList(): Unit[] {
  const f = state.filters[state.tab];
  let q = state.search.trim().toLowerCase();
  // "4kw" / "4 kw" in the search matches nominal cooling: whole numbers match the
  // band (4 → 4.0–4.9), decimals match exactly (4.2 → 4.2 only)
  let qKw: number | null = null;
  let qKwExact = false;
  const kwToken = q.match(/(\d+(?:[.,]\d+)?)\s*kw/);
  if (kwToken) {
    qKw = parseFloat(kwToken[1].replace(',', '.'));
    qKwExact = /[.,]/.test(kwToken[1]);
    q = q.replace(kwToken[0], '').trim();
  }
  let list: Unit[] =
    state.tab === 'indoor' ? DATA.indoor : state.tab === 'outdoor' ? DATA.outdoor : DATA.multi;

  list = list.filter((u) => {
    if (f.manufacturer && u.manufacturer !== f.manufacturer) return false;
    if (f.coolKw && u.coolKw !== parseFloat(f.coolKw)) return false;
    if (qKw != null) {
      if (u.coolKw == null) return false;
      if (qKwExact ? u.coolKw !== qKw : Math.floor(u.coolKw) !== qKw) return false;
    }
    if (state.tab === 'indoor') {
      const i = u as IndoorUnit;
      if (f.type && i.type !== f.type) return false;
      if (f.group && i.group !== f.group) return false;
      if (f.range && i.range !== f.range) return false;
      if (f.colour && i.colour !== f.colour) return false;
      if (f.msOnly && !i.multisplit) return false;
    }
    if (state.tab === 'multi' && f.maxIndoor) {
      const m = u as MultiUnit;
      if (m.maxIndoor == null || m.maxIndoor !== parseInt(f.maxIndoor)) return false;
    }
    if (q) {
      const i = u as IndoorUnit;
      const hay = [u.model, u.manufacturer, i.range ?? '', i.type ?? '', i.outdoorModel ?? '']
        .join(' ')
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const s = state.sort;
  if (s !== 'default') {
    const cmp: Record<string, (a: Unit, b: Unit) => number> = {
      'cool-asc': (a, b) => (coolOf(a) ?? 1e9) - (coolOf(b) ?? 1e9),
      'cool-desc': (a, b) => (coolOf(b) ?? -1e9) - (coolOf(a) ?? -1e9),
      'price-asc': (a, b) => (tradeOf(a) ?? 1e9) - (tradeOf(b) ?? 1e9),
      'price-desc': (a, b) => (tradeOf(b) ?? -1e9) - (tradeOf(a) ?? -1e9),
      model: (a, b) => a.model.localeCompare(b.model),
    };
    list = [...list].sort(cmp[s]);
  }
  return list;
}

function activeFilterCount(): number {
  const f = state.filters[state.tab];
  let n = 0;
  if (f.manufacturer) n++;
  if (f.coolKw) n++;
  if (state.tab === 'indoor') {
    if (f.type) n++;
    if (f.group) n++;
    if (f.range) n++;
    if (f.colour) n++;
    if (f.msOnly) n++;
  }
  if (state.tab === 'multi' && f.maxIndoor) n++;
  return n;
}

// ---------- filter panel ----------
function selectField(id: string, label: string, options: string[], value: string, anyLabel = 'All'): string {
  return `<div class="field"><label for="f-${id}">${label}</label>
    <select id="f-${id}" data-filter="${id}">
      <option value="">${anyLabel}</option>
      ${options.map((o) => `<option value="${esc(o)}"${o === value ? ' selected' : ''}>${esc(o)}</option>`).join('')}
    </select></div>`;
}

function renderFilterPanel() {
  const f = state.filters[state.tab];
  const card = $('#filter-card');
  let html = '';

  const base: Unit[] =
    state.tab === 'indoor' ? DATA.indoor : state.tab === 'outdoor' ? DATA.outdoor : DATA.multi;
  const byMfr = f.manufacturer ? base.filter((u) => u.manufacturer === f.manufacturer) : base;

  html += selectField('manufacturer', 'Manufacturer', uniq(base.map((u) => u.manufacturer)), f.manufacturer);

  if (state.tab === 'indoor') {
    const ind = byMfr as IndoorUnit[];
    html += selectField('type', 'System type', uniq(ind.map((u) => u.type)), f.type);
    html += selectField('group', 'Tier', uniq(ind.map((u) => u.group)), f.group);
    html += selectField('range', 'Range', uniq(ind.map((u) => u.range)), f.range);
    html += selectField('colour', 'Colour', uniq(ind.map((u) => u.colour)), f.colour);
  }
  if (state.tab === 'multi') {
    const mu = byMfr as MultiUnit[];
    const rooms = uniq(mu.map((u) => String(u.maxIndoor ?? ''))).sort((a, b) => +a - +b);
    html += selectField('maxIndoor', 'Rooms (max indoor units)', rooms, f.maxIndoor, 'Any');
  }

  const kwValues = [...new Set(byMfr.map((u) => u.coolKw).filter((n): n is number => n != null))].sort((a, b) => a - b);
  html += `<div class="field"><label for="f-coolKw">Cooling (kW)</label>
    <select id="f-coolKw" data-filter="coolKw"><option value="">Any</option>
    ${kwValues.map((s) => `<option value="${s}"${String(s) === f.coolKw ? ' selected' : ''}>${s} kW</option>`).join('')}</select></div>`;

  if (state.tab === 'indoor') {
    html += `<label class="field-check"><input type="checkbox" id="f-msOnly" data-filter="msOnly"${f.msOnly ? ' checked' : ''}> Multi-split compatible</label>`;
  }
  html += `<button class="btn-clear" id="btn-clear">Clear all</button>`;
  card.innerHTML = html;

  card.querySelectorAll<HTMLSelectElement | HTMLInputElement>('[data-filter]').forEach((el) => {
    el.addEventListener('change', () => {
      const key = el.dataset.filter as keyof Filters;
      const f2 = state.filters[state.tab];
      if (el instanceof HTMLInputElement && el.type === 'checkbox') (f2 as any)[key] = el.checked;
      else (f2 as any)[key] = el.value;
      if (key === 'manufacturer') {
        f2.type = ''; f2.group = ''; f2.range = ''; f2.colour = ''; f2.maxIndoor = ''; f2.coolKw = '';
        renderFilterPanel();
      }
      renderGrid();
    });
  });
  $('#btn-clear').addEventListener('click', () => {
    state.filters[state.tab] = emptyFilters();
    renderFilterPanel();
    renderGrid();
  });
}

// ---------- cards ----------
function cardImage(u: Unit, extra = ''): string {
  return `<div class="card-img" data-fallback='${NOIMG.replace(/'/g, '&#39;')}'>
    ${img(u.photo, u.model)}
    <span class="chip-mfr">${esc(u.manufacturer)}</span>${extra}</div>`;
}

function unitCard(u: Unit, idx: number, group?: Unit[]): string {
  const g = group ?? [u];
  let sub = '';
  let extra = '';
  let dots = '';
  let caps = `<span class="cap blue">❄ ${kw(u.coolKw)}</span><span class="cap">♨︎ ${kw(u.heatKw)}</span>`;
  if (state.tab === 'indoor') {
    const i = u as IndoorUnit;
    sub = `${esc(i.range)} · ${esc(i.type)}`;
    if (i.colour) sub += ` · <span class="swatch" style="background:${esc(i.colourHex)}"></span>${esc(i.colour)}`;
    if (i.multisplit) extra = `<span class="chip-ms">MULTI OK</span>`;
    if (g.length > 1) {
      dots = `<div class="dots">${(g as IndoorUnit[])
        .map((v) => `<span class="dot${v.id === u.id ? ' sel' : ''}" role="button" title="${esc(v.colour)}" data-gi="${idx}" data-id="${v.id}" style="background:${esc(v.colourHex)}"></span>`)
        .join('')}</div>`;
    }
  } else if (state.tab === 'outdoor') {
    sub = `${esc((u as OutdoorUnit).splitType)} · ${esc((u as OutdoorUnit).refrigerant)}`;
  } else {
    const m = u as MultiUnit;
    sub = `Up to ${m.maxIndoor ?? '—'} indoor units · ${esc(m.refrigerant)}`;
  }
  return `<button class="card" data-idx="${idx}">
    ${cardImage(u, extra)}
    <div class="card-body">
      <div class="card-model">${esc(u.model)}</div>
      <div class="card-sub">${sub}</div>
      ${dots}
      <div class="card-caps">${caps}</div>
      <div class="card-price">
        <span class="price-trade">${gbp(u.trade)}</span>
        <span class="price-retail">Retail ${gbp(u.retail)}</span>
      </div>
    </div>
  </button>`;
}

let visible: Unit[] = [];
let visibleGroups: Unit[][] = [];
/** groupKey -> selected variant id, so colour picks survive re-renders */
const variantSel = new Map<string, string>();

/** Colour variants share everything except colour/model/price/photo. */
function groupKey(u: IndoorUnit): string {
  return [u.manufacturer, u.range, u.type, u.group, u.coolKw, u.heatKw, u.h, u.w, u.d, u.outdoorModel, u.multisplit].join('|');
}

function groupList(list: Unit[]): Unit[][] {
  if (state.tab !== 'indoor') return list.map((u) => [u]);
  const map = new Map<string, IndoorUnit[]>();
  const order: string[] = [];
  for (const u of list as IndoorUnit[]) {
    const k = groupKey(u);
    if (!map.has(k)) { map.set(k, []); order.push(k); }
    map.get(k)!.push(u);
  }
  const groups: Unit[][] = [];
  for (const k of order) {
    const g = map.get(k)!;
    // only merge when every variant is a distinct colour
    if (g.length > 1 && new Set(g.map((u) => u.colour)).size === g.length) groups.push(g);
    else g.forEach((u) => groups.push([u]));
  }
  return groups;
}

function selectedOf(g: Unit[]): Unit {
  if (g.length === 1) return g[0];
  const id = variantSel.get(groupKey(g[0] as IndoorUnit));
  return g.find((u) => u.id === id) ?? g[0];
}

function renderGrid() {
  visible = currentList();
  visibleGroups = groupList(visible);
  const grid = $('#grid');
  if (visible.length === 0) {
    grid.innerHTML = `<div class="empty"><p>No units match your search or filters.</p>
      <button class="btn-clear" id="btn-clear-empty">Clear filters</button></div>`;
    $('#btn-clear-empty').addEventListener('click', () => {
      state.filters[state.tab] = emptyFilters();
      state.search = '';
      ($('#search') as HTMLInputElement).value = '';
      renderFilterPanel();
      renderGrid();
    });
  } else {
    grid.innerHTML = visibleGroups.map((g, i) => unitCard(selectedOf(g), i, g)).join('');
  }
  const total =
    state.tab === 'indoor' ? DATA.indoor.length : state.tab === 'outdoor' ? DATA.outdoor.length : DATA.multi.length;
  const grouped = visibleGroups.length < visible.length;
  $('#results-meta').textContent =
    `Showing ${visible.length} of ${total} units` +
    (grouped ? ` · ${visibleGroups.length} products (colours grouped)` : '');
  const badge = $('#filter-badge');
  const n = activeFilterCount();
  badge.textContent = String(n);
  badge.classList.toggle('on', n > 0);
}

// ---------- modal ----------
const backdrop = $('#modal-backdrop');
const modal = $('#modal');

function specRow(label: string, val: string | null | undefined): string {
  if (!val || val === '—') return '';
  return `<div class="spec"><div class="s-label">${label}</div><div class="s-val">${val}</div></div>`;
}
const dims = (u: { h: number | null; w: number | null; d: number | null }) =>
  u.h && u.w && u.d ? `${u.h} × ${u.w} × ${u.d} mm (H×W×D)` : null;

function miniCard(u: Unit, kind: Tab, sub: string): string {
  return `<button class="mini-card" data-kind="${kind}" data-id="${u.id}">
    <div class="mini-img" data-fallback="">${u.photo ? `<img src="${esc(u.photo)}" alt="" loading="lazy" onerror="this.remove()">` : ''}</div>
    <div class="mini-info">
      <div class="mini-model">${esc(u.model)}</div>
      <div class="mini-sub">${sub}</div>
    </div>
    <div class="mini-price">${gbp(u.trade)}</div>
    <svg class="mini-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"/></svg>
  </button>`;
}

function modalShell(u: Unit, chips: string, specs: string, related: string, extra = ''): string {
  const links =
    (u.pdf ? `<a class="btn btn-primary" href="${esc(u.pdf)}" target="_blank" rel="noopener">📄 Spec sheet (PDF)</a>` : '') +
    (u.web ? `<a class="btn btn-outline" href="${esc(u.web)}" target="_blank" rel="noopener">Manufacturer page ↗</a>` : '');
  return `
    <button class="modal-close" id="modal-close" aria-label="Close">✕</button>
    <div class="modal-img" data-fallback='${NOIMG.replace(/'/g, '&#39;')}'>${img(u.photo, u.model)}</div>
    <div class="modal-body">
      <h2 class="modal-title">${esc(u.model)}</h2>
      <div class="modal-chips">${chips}</div>
      ${extra}
      <div class="price-box">
        <div class="trade"><div class="pb-label">Trade price</div><div class="pb-val">${gbp(u.trade)}</div></div>
        <div><div class="pb-label">Retail price</div><div class="pb-val">${gbp(u.retail)}</div></div>
      </div>
      <div class="spec-grid">${specs}</div>
      <div class="modal-links">${links}</div>
      ${related}
    </div>`;
}

function openIndoor(u: IndoorUnit) {
  const chips =
    `<span class="mchip navy">${esc(u.manufacturer)}</span>` +
    `<span class="mchip">${esc(u.range)}</span>` +
    `<span class="mchip">${esc(u.type)}</span>` +
    (u.group ? `<span class="mchip">${esc(u.group)}</span>` : '') +
    (u.multisplit ? `<span class="mchip green">Multi-split compatible</span>` : '');
  const specs =
    specRow('Cooling capacity', kw(u.coolKw)) +
    specRow('Heating capacity', kw(u.heatKw)) +
    specRow('Dimensions', dims(u)) +
    specRow('Air gap', u.airGap ? `${u.airGap} mm` : null) +
    specRow('Colour', u.colour ? `<span class="swatch" style="background:${esc(u.colourHex)}"></span>${esc(u.colour)}` : null) +
    specRow('Pipe — liquid', esc(u.pipeLiquid)) +
    specRow('Pipe — gas', esc(u.pipeGas));

  let related = '';
  const od = u.outdoorModel ? outdoorByModel.get(u.outdoorModel) : undefined;
  if (od) {
    related += `<div class="related"><h3>Corresponding outdoor unit</h3>
      <div class="related-list">${miniCard(od, 'outdoor', `${esc(od.splitType)} · ❄ ${kw(od.coolKw)} · ♨︎ ${kw(od.heatKw)}`)}</div></div>`;
  } else if (u.outdoorModel) {
    related += `<div class="related"><h3>Corresponding outdoor unit</h3>
      <p class="mini-sub">${esc(u.outdoorModel)} — not found in the outdoor unit list.</p></div>`;
  }
  if (u.multisplit) {
    related += `<div class="note-ms">✓ Works on multi-split systems — <a href="#" id="link-ms">view ${esc(u.manufacturer)} multi-split outdoor units</a></div>`;
  }
  const variants = DATA.indoor.filter((v) => groupKey(v) === groupKey(u));
  const colourRow =
    variants.length > 1 && new Set(variants.map((v) => v.colour)).size === variants.length
      ? `<div class="modal-colours">${variants
          .map((v) => `<button class="cbtn${v.id === u.id ? ' sel' : ''}" data-vid="${v.id}">
            <span class="dot" style="background:${esc(v.colourHex)}"></span>${esc(v.colour)} · ${gbp(v.trade)}</button>`)
          .join('')}</div>`
      : '';
  modal.innerHTML = modalShell(u, chips, specs, related, colourRow);
  const lnk = modal.querySelector('#link-ms');
  if (lnk) {
    lnk.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
      switchTab('multi');
      state.filters.multi.manufacturer = u.manufacturer;
      renderFilterPanel();
      renderGrid();
    });
  }
}

function openOutdoor(u: OutdoorUnit) {
  const chips =
    `<span class="mchip navy">${esc(u.manufacturer)}</span>` +
    `<span class="mchip">${esc(u.splitType)}</span>` +
    `<span class="mchip">${esc(u.refrigerant)}</span>`;
  const specs =
    specRow('Cooling capacity', kw(u.coolKw)) +
    specRow('Heating capacity', kw(u.heatKw)) +
    specRow('Dimensions', dims(u)) +
    specRow('Phase', esc(u.phase)) +
    specRow('Max fuse size', u.fuse ? `${esc(u.fuse)} A` : null) +
    specRow('Pipe — liquid', esc(u.pipeLiquid)) +
    specRow('Pipe — gas', esc(u.pipeGas)) +
    specRow('Pipe length', u.maxPipe != null ? `${u.minPipe ?? 0}–${u.maxPipe} m` : null) +
    specRow('Max height difference', u.maxHeightDiff != null ? `${u.maxHeightDiff} m` : null) +
    specRow('Additional charge', u.gramsPerM && u.gramsPerM !== '0' ? `${esc(u.gramsPerM)} g/m` : null) +
    specRow('Pre-charge', u.preChargeKg != null ? `${u.preChargeKg} kg${u.preChargeLen ? ` (to ${u.preChargeLen} m)` : ''}` : null);

  const used = DATA.indoor.filter((i) => i.outdoorModel === u.model);
  let related = '';
  if (used.length) {
    related = `<div class="related"><h3>Pairs with ${used.length} indoor unit${used.length > 1 ? 's' : ''}</h3>
      <div class="related-list">${used.map((i) => miniCard(i, 'indoor', `${esc(i.range)} · ${esc(i.type)} · ❄ ${kw(i.coolKw)}`)).join('')}</div></div>`;
  }
  modal.innerHTML = modalShell(u, chips, specs, related);
}

function openMulti(u: MultiUnit) {
  const chips =
    `<span class="mchip navy">${esc(u.manufacturer)}</span>` +
    `<span class="mchip">Multi Split</span>` +
    `<span class="mchip">Up to ${u.maxIndoor ?? '—'} indoor units</span>` +
    `<span class="mchip">${esc(u.refrigerant)}</span>`;
  const gasPipes = [u.pipeGas, u.pipeGas2, u.pipeGas3].filter(Boolean).join(', ');
  const specs =
    specRow('Nominal cooling', kw(u.coolKw)) +
    specRow('Heating capacity', kw(u.heatKw)) +
    specRow('Max reduced duty', kw(u.maxDuty)) +
    specRow('Dimensions', dims(u)) +
    specRow('Phase', esc(u.phase)) +
    specRow('Max fuse size', u.fuse ? `${esc(u.fuse)} A` : null) +
    specRow('Pipe — liquid', u.pipeLiquid ? esc(u.pipeLiquid) : null) +
    specRow('Pipe — gas', gasPipes ? esc(gasPipes) : null) +
    specRow('Max pipe (per unit)', u.maxPipeInd != null ? `${u.maxPipeInd} m` : null) +
    specRow('Max pipe (total)', u.maxPipeTotal != null ? `${u.maxPipeTotal} m` : null) +
    specRow('Max height difference', u.maxHeightDiff != null ? `${u.maxHeightDiff} m` : null) +
    specRow('Pre-charge', u.preChargeKg != null ? `${u.preChargeKg} kg` : null);

  const compat = DATA.indoor.filter((i) => i.manufacturer === u.manufacturer && i.multisplit);
  let related = '';
  if (compat.length) {
    related = `<div class="related"><h3>Compatible indoor units (${compat.length})</h3>
      <div class="related-list">${compat.map((i) => miniCard(i, 'indoor', `${esc(i.range)} · ${esc(i.type)} · ❄ ${kw(i.coolKw)}`)).join('')}</div></div>`;
  }
  modal.innerHTML = modalShell(u, chips, specs, related);
}

function openModalFor(u: Unit, kind: Tab = state.tab) {
  if (kind === 'indoor') openIndoor(u as IndoorUnit);
  else if (kind === 'outdoor') openOutdoor(u as OutdoorUnit);
  else openMulti(u as MultiUnit);

  modal.querySelector('#modal-close')!.addEventListener('click', closeModal);
  modal.querySelectorAll<HTMLButtonElement>('.cbtn').forEach((b) => {
    b.addEventListener('click', () => {
      const v = DATA.indoor.find((x) => x.id === b.dataset.vid);
      if (v) {
        variantSel.set(groupKey(v), v.id);
        renderGrid();
        openModalFor(v, 'indoor');
      }
    });
  });
  modal.querySelectorAll<HTMLButtonElement>('.mini-card').forEach((el) => {
    el.addEventListener('click', () => {
      const k = el.dataset.kind as Tab;
      const id = el.dataset.id!;
      const pool = k === 'indoor' ? DATA.indoor : k === 'outdoor' ? DATA.outdoor : DATA.multi;
      const target = (pool as Unit[]).find((x) => x.id === id);
      if (target) openModalFor(target, k);
    });
  });
  backdrop.classList.add('open');
  backdrop.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });

// grid clicks (delegated so colour-dot swaps don't rebuild the whole grid)
$('#grid').addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  const dot = t.closest('.dot[data-id]') as HTMLElement | null;
  if (dot) {
    const gi = parseInt(dot.dataset.gi!);
    const g = visibleGroups[gi];
    const u = g.find((x) => x.id === dot.dataset.id)!;
    variantSel.set(groupKey(u as IndoorUnit), u.id);
    (dot.closest('.card') as HTMLElement).outerHTML = unitCard(u, gi, g);
    return;
  }
  const card = t.closest('.card[data-idx]') as HTMLElement | null;
  if (card) openModalFor(selectedOf(visibleGroups[parseInt(card.dataset.idx!)]));
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ---------- tabs / toolbar ----------
function switchTab(tab: Tab) {
  state.tab = tab;
  document.querySelectorAll<HTMLButtonElement>('.tab').forEach((t) =>
    t.classList.toggle('active', t.dataset.tab === tab)
  );
  history.replaceState(null, '', `#${tab}`);
  renderFilterPanel();
  renderGrid();
}

document.querySelectorAll<HTMLButtonElement>('.tab').forEach((t) =>
  t.addEventListener('click', () => switchTab(t.dataset.tab as Tab))
);

$('#search').addEventListener('input', (e) => {
  state.search = (e.target as HTMLInputElement).value;
  renderGrid();
});

$('#sort').addEventListener('change', (e) => {
  state.sort = (e.target as HTMLSelectElement).value;
  renderGrid();
});

$('#btn-filters').addEventListener('click', () => {
  $('#filter-panel').classList.toggle('open');
});

// ---------- init ----------
$('#count-indoor').textContent = String(DATA.indoor.length);
$('#count-outdoor').textContent = String(DATA.outdoor.length);
$('#count-multi').textContent = String(DATA.multi.length);

const hash = location.hash.replace('#', '') as Tab;
if (hash === 'outdoor' || hash === 'multi') state.tab = hash;
document.querySelectorAll<HTMLButtonElement>('.tab').forEach((t) =>
  t.classList.toggle('active', t.dataset.tab === state.tab)
);
renderFilterPanel();
renderGrid();
