import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

const requiredRoutes = [
  "/",
  "/virtuves-iekartas-pec-pasutijuma/",
  "/virtuves-izgatavosana/",
  "/iebuvetas-virtuves/",
  "/virtuves-cenas/",
  "/virtuves-dizains-un-projektesana/",
  "/virtuves-planosana/",
  "/virtuves-uzstadisana/",
  "/stura-un-l-veida-virtuves/",
  "/mazas-virtuves/",
  "/modernas-virtuves/",
  "/virtuves-ar-salu/",
  "/virtuves-skapisi/",
  "/virtuves-fasades/",
  "/virtuves-furnitura/",
  "/virtuves-interjers/",
  "/ka-mes-stradajam/",
  "/realizetie-projekti/",
  "/par-mums/",
  "/kontakti/",
  "/privatuma-politika/",
];

test("renders every required route with Latvian document metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("routes", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  for (const route of requiredRoutes) {
    const response = await worker.fetch(
      new Request(`http://localhost${route}`, {
        headers: { accept: "text/html" },
      }),
      {
        ASSETS: {
          fetch: async () => new Response("Not found", { status: 404 }),
        },
      },
      {
        waitUntil() {},
        passThroughOnException() {},
      },
    );

    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /<html[^>]*\blang=["']lv["']/i, route);
    assert.match(html, /<h1[\s>]/i, route);
    assert.doesNotMatch(html, /Starter Project|Ship something real/i, route);
  }
});

test("unknown route returns 404", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("not-found", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/neeksistejosa-lapa/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
  assert.equal(response.status, 404);
});
