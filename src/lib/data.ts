import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.join(process.cwd(), 'data');

/** Quote-aware CSV parser. */
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f.trim() !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f.trim() !== '')) rows.push(row);
  return rows;
}

function loadRows(file: string): Record<string, string>[] {
  const text = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
  const [header, ...rows] = parseCSV(text);
  const keys = header.map((h) => h.trim());
  return rows.map((r) => {
    const obj: Record<string, string> = {};
    keys.forEach((k, i) => { obj[k] = (r[i] ?? '').trim(); });
    return obj;
  });
}

const num = (s: string | undefined): number | null => {
  if (!s) return null;
  const n = parseFloat(s.replace(/[£,\s]/g, ''));
  return Number.isFinite(n) ? n : null;
};

/** Drop corrupted URLs (some cells contain two URLs glued together). */
const cleanUrl = (u: string | undefined): string => {
  if (!u) return '';
  const t = u.trim();
  if (!t.startsWith('http')) return '';
  if (t.indexOf('https://', 8) !== -1) return '';
  return t;
};

/** Display model: strip the trailing asterisks used to disambiguate duplicate rows. */
const displayModel = (m: string): string => m.replace(/\*+$/, '').trim();

export interface IndoorUnit {
  id: string;
  manufacturer: string;
  range: string;
  type: string;
  model: string;
  group: string;
  coolKw: number | null;
  heatKw: number | null;
  h: number | null;
  w: number | null;
  d: number | null;
  airGap: number | null;
  retail: number | null;
  trade: number | null;
  colour: string;
  colourHex: string;
  outdoorModel: string;
  pipeLiquid: string;
  pipeGas: string;
  photo: string;
  pdf: string;
  web: string;
  multisplit: boolean;
}

export interface OutdoorUnit {
  id: string;
  manufacturer: string;
  splitType: string;
  model: string;
  coolKw: number | null;
  heatKw: number | null;
  h: number | null;
  w: number | null;
  d: number | null;
  phase: string;
  fuse: string;
  pipeLiquid: string;
  pipeGas: string;
  maxPipe: number | null;
  minPipe: number | null;
  maxHeightDiff: number | null;
  gramsPerM: string;
  preChargeLen: number | null;
  preChargeKg: number | null;
  refrigerant: string;
  retail: number | null;
  trade: number | null;
  photo: string;
  pdf: string;
  web: string;
}

export interface MultiUnit {
  id: string;
  manufacturer: string;
  model: string;
  coolKw: number | null;
  heatKw: number | null;
  maxDuty: number | null;
  maxIndoor: number | null;
  h: number | null;
  w: number | null;
  d: number | null;
  phase: string;
  fuse: string;
  pipeLiquid: string;
  pipeGas: string;
  pipeGas2: string;
  pipeGas3: string;
  maxPipeInd: number | null;
  maxPipeTotal: number | null;
  maxHeightDiff: number | null;
  preChargeKg: number | null;
  refrigerant: string;
  retail: number | null;
  trade: number | null;
  photo: string;
  pdf: string;
  web: string;
}

export const indoorUnits: IndoorUnit[] = loadRows('indoor.csv').map((r, i) => ({
  id: `in-${i}`,
  manufacturer: r['Manufacturer'],
  range: r['Range Name'],
  type: r['Fitted System Type'],
  model: displayModel(r['Model Number']),
  group: r['Group Filter'],
  coolKw: num(r['Capacity Cooling (kW)']),
  heatKw: num(r['Heating Capacity (kW)']),
  h: num(r['Height (mm)']),
  w: num(r['Width (mm)']),
  d: num(r['Depth (mm)']),
  airGap: num(r['Air Gap (mm)']),
  retail: num(r['Retail Price (£)']),
  trade: num(r['Trade Price (£)']),
  colour: r['Colour'],
  colourHex: r['Colour Hex'] || '#cccccc',
  outdoorModel: r['Corresponding Outdoor Unit'] === 'N/A' ? '' : r['Corresponding Outdoor Unit'],
  pipeLiquid: r['Connection Pipe Liquid'],
  pipeGas: r['Connection Pipe Gas'],
  photo: cleanUrl(r['Unit Photo']),
  pdf: cleanUrl(r['PDF']),
  web: cleanUrl(r['Web Link']),
  multisplit: r['Compatible with Multisplit'].toLowerCase() === 'yes',
}));

export const outdoorUnits: OutdoorUnit[] = loadRows('outdoor.csv').map((r, i) => ({
  id: `out-${i}`,
  manufacturer: r['Manufacturer'],
  splitType: r['Split Type'],
  model: displayModel(r['Model Number']),
  coolKw: num(r['Nominal Cooling (kW)']),
  heatKw: num(r['Heating Capacity (kW)']),
  h: num(r['Height (mm)']),
  w: num(r['Width (mm)']),
  d: num(r['Depth (mm)']),
  phase: r['Phase'],
  fuse: r['Max Fuse Size (Amp)'],
  pipeLiquid: r['Connection Pipe Liquid'],
  pipeGas: r['Connection Pipe Gas'],
  maxPipe: num(r['Max Pipe Length (m)']),
  minPipe: num(r['Min Pipe Length (m)']),
  maxHeightDiff: num(r['Max Height Difference (m)']),
  gramsPerM: r['Additional Grams Per Meter (g/m)'],
  preChargeLen: num(r['Pre-Charge Length (m)']),
  preChargeKg: num(r['Pre-Charge (kg)']),
  refrigerant: r['Refrigerant'],
  retail: num(r['Retail Price (£)']),
  trade: num(r['Trade Price (£)']),
  photo: cleanUrl(r['Unit Photo']),
  pdf: cleanUrl(r['PDF']),
  web: cleanUrl(r['Web Link']),
}));

export const multiUnits: MultiUnit[] = loadRows('multi.csv').map((r, i) => ({
  id: `mu-${i}`,
  manufacturer: r['Manufacturer'],
  model: displayModel(r['Model Number']),
  coolKw: num(r['Nominal Cooling (kW)']),
  heatKw: num(r['Heating Capacity (kW)']),
  maxDuty: num(r['Maximum Reduced Duty (kW)']),
  maxIndoor: num(r['Max Number of Connected In-door Units (Multi-split only)']),
  h: num(r['Height (mm)']),
  w: num(r['Width (mm)']),
  d: num(r['Depth (mm)']),
  phase: r['Phase'],
  fuse: r['Max Fuse Size (Amp)'],
  pipeLiquid: r['Connection Pipe Liquid'],
  pipeGas: r['Connection Pipe Gas'],
  pipeGas2: r['Connection Pipe Gas 2'],
  pipeGas3: r['Connection Pipe Gas 3'],
  maxPipeInd: num(r['Max Pipe Length Individual (m)']),
  maxPipeTotal: num(r['Max Pipe Length Total (m)']),
  maxHeightDiff: num(r['Max Height Difference (m)']),
  preChargeKg: num(r['Pre-Charge (kg)']),
  refrigerant: r['Refrigerant'],
  retail: num(r['Retail Price (£)']),
  trade: num(r['Trade Price (£)']),
  photo: cleanUrl(r['Unit Photo']),
  pdf: cleanUrl(r['PDF']),
  web: cleanUrl(r['Web Link']),
}));
