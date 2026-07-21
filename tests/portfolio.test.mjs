import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const visibleText = html.replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

test('leads with the approved AI engineering position', () => {
  assert.match(visibleText, /I build AI systems that move from prototype to dependable production\./);
  assert.match(visibleText, /agentic workflows, RAG, evaluation, and scalable ML systems/i);
});

test('features the three current flagship products with exact names', () => {
  for (const project of ['Sourcebound', 'RemaindALL', 'StyleTrip.ai']) {
    assert.match(html, new RegExp(project.replace('.', '\\.'), 'i'));
  }
  assert.doesNotMatch(html, /PinPoint/i);
});

test('shows verified public engineering evidence', () => {
  assert.match(visibleText, /163[^.]{0,80}(?:tests|automated checks)/i);
  assert.match(visibleText, /88[^.]{0,80}(?:tests|automated checks)/i);
  assert.match(visibleText, /72[^.]{0,80}(?:tests|automated checks)/i);
});

test('removes privacy and credibility risks', () => {
  assert.doesNotMatch(html, /716[-\s]305[-\s]8248/);
  assert.doesNotMatch(html, /Sourcebound[^<]{0,80}LIVE/i);
  assert.doesNotMatch(html, /Adventure Works/i);
});

test('uses semantic recruiter scan order', () => {
  const ids = ['hero', 'proof', 'work', 'capabilities', 'experience', 'contact'];
  const positions = ids.map((id) => html.indexOf(`id="${id}"`));
  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual(positions, [...positions].sort((a, b) => a - b));
});

test('includes accessibility and responsive safeguards', () => {
  assert.match(html, /<meta name="viewport"/);
  assert.match(html, /:focus-visible/);
  assert.match(html, /prefers-reduced-motion:\s*reduce/);
  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /rel="noreferrer"/);
});

test('provides an inline favicon without another network request', () => {
  assert.match(html, /<link rel="icon" href="data:image\/svg\+xml,/);
});

test('offers the supplied resume and describes enterprise collaboration accurately', () => {
  assert.match(html, /href="assets\/sudheer-batthina-resume\.pdf"[^>]*download/i);
  for (const company of ['NVIDIA', 'Google Cloud', 'Adobe', 'Salesforce', 'Databricks', 'Microsoft', 'AWS']) {
    assert.match(visibleText, new RegExp(company, 'i'));
  }
  assert.match(visibleText, /enterprise technology ecosystems/i);
});
