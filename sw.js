'use strict';

const CACHE_PREFIX = 'corpo-static-';
const CACHE_NAME = `${CACHE_PREFIX}v3`;
const PRECACHE = ['./', './index.html', './styles.css', './app.js', './manifest.json'];

const OPTIONAL_DATA = [
  './data-negocios.js', './data-hoteleria.js', './data-mineria.js',
  './glossary-negocios.js', './glossary-hoteleria.js', './glossary-mineria.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(async cache => {
    await cache.addAll(PRECACHE);
    await Promise.all(OPTIONAL_DATA.map(async url => {
      try {
        const response = await fetch(url);
        if (response.ok) await cache.put(url, response);
      } catch (_) {
        // Los contenidos pueden publicarse después de instalar la aplicación.
      }
    }));
  }));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names
        .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
        .map(name => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin ||
      !url.href.startsWith(self.registration.scope)) return;

  event.respondWith(caches.open(CACHE_NAME).then(async cache => {
    const cached = await cache.match(event.request);
    if (cached) return cached;
    const response = await fetch(event.request);
    if (response.ok) {
      try {
        await cache.put(event.request, response.clone());
      } catch (_) {
        // Una falla de almacenamiento no impide entregar la respuesta de red.
      }
    }
    return response;
  }));
});
