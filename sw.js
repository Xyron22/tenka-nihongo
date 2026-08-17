const CACHE='tenka-v0.1.2';
const CORE=['./','./index.html','./styles.css?v=0.1.2','./data.js?v=0.1.2','./app.js?v=0.1.2','./manifest.webmanifest?v=0.1.2','./assets/icon.svg?v=0.1.2'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;

  // HTML navigation may fall back to the cached app shell when offline.
  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req)
        .then(resp=>{
          const clone=resp.clone();
          caches.open(CACHE).then(cache=>cache.put('./index.html',clone));
          return resp;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }

  // Never return HTML as a fallback for JavaScript/CSS/assets.
  event.respondWith(
    caches.match(req).then(cached=>cached||fetch(req).then(resp=>{
      if(resp && resp.ok){
        const clone=resp.clone();
        caches.open(CACHE).then(cache=>cache.put(req,clone));
      }
      return resp;
    }))
  );
});
