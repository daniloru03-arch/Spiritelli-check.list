const CACHE_NAME = 'asteria-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icona.png'
];

// Installa il Service Worker e salva i file nella cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Gestisce le richieste per far funzionare il sito anche offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
