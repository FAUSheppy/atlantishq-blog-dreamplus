self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('athq').then(function(cache) {
          return cache.addAll([
                '/',
                '/index.html',
                '/css/main-style.css',
                '/js/lazyload.js',
                '/manifest.json',
                '/img/defaultFav.ico',
              ]);
        })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
      })
  );
});
