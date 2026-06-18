import { put } from '@vercel/blob';

const VALID_TYPES = ['indoor', 'outdoor', 'multi'];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password, type, csv } = req.body ?? {};

  if (!password || password !== process.env.UPLOAD_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorised' });
  }

  if (!VALID_TYPES.includes(type)) {
    return res.status(400).json({ error: 'Invalid type. Must be indoor, outdoor, or multi.' });
  }

  if (!csv || typeof csv !== 'string') {
    return res.status(400).json({ error: 'No CSV data provided' });
  }

  let csvText;
  try {
    csvText = Buffer.from(csv, 'base64').toString('utf-8');
  } catch {
    return res.status(400).json({ error: 'Invalid base64 CSV data' });
  }

  if (!csvText.trim()) {
    return res.status(400).json({ error: 'CSV is empty' });
  }

  try {
    await put(`${type}.csv`, csvText, {
      access: 'public',
      allowOverwrite: true,
      contentType: 'text/csv',
    });
  } catch (err) {
    console.error('Blob upload error:', err);
    return res.status(500).json({ error: 'Failed to store CSV' });
  }

  const hookUrl = process.env.DEPLOY_HOOK_URL;
  if (hookUrl) {
    try {
      await fetch(hookUrl, { method: 'POST' });
    } catch (err) {
      console.error('Deploy hook error:', err);
      // Non-fatal — blob was saved, redeploy can be triggered manually
    }
  }

  return res.status(200).json({
    ok: true,
    message: hookUrl
      ? 'CSV uploaded. Site will rebuild in ~30 seconds.'
      : 'CSV uploaded. Trigger a redeploy in Vercel to apply.',
  });
}
