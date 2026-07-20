import assert from 'node:assert/strict';
import test from 'node:test';

async function render(path = '/') {
  const workerUrl = new URL('../dist/server/index.js', import.meta.url);
  workerUrl.searchParams.set('test', `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: 'text/html' } }), {
    ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test('renders the Cella model atlas', async () => {
  const response = await render('/');
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Cella AI Model Atlas/);
  assert.match(html, /Seven ways to think/);
  assert.match(html, /Nexa/);
  assert.match(html, /Compare/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

for (const [path, title] of [
  ['/about', 'About Qatrix Infotech'],
  ['/privacy-policy', 'Privacy Policy'],
  ['/terms-and-conditions', 'Terms and Conditions'],
]) {
  test(`renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(title, 'i'));
  });
}
