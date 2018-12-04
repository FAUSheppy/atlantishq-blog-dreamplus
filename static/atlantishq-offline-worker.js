// proper initialization
//if( 'function' === typeof importScripts) {
    //importScripts('/js/polyfill.min.js');
    self.addEventListener('install', function(e) {
        console.log("INSTALL")
        e.waitUntil(
            caches.open('airhorner').then(function(cache) {
              return cache.addAll([
                    '/',
                    '/index.html',
                    '/css/main-style.css',
                    '/js/lazyload.js',
                  ]);
            })
        );
    });
    self.addEventListener('activate', event => {
        event.waitUntil(self.clients.claim());
    });

    self.addEventListener('fetch', function(event) {
      console.log(event.request.url);
      console.log("FETCH");
      event.respondWith(
          caches.match(event.request).then(function(response) {
                  return response || fetch(event.request);
          })
      );
    });
//}
