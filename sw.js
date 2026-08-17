const CACHE='tenka-v0.1.1';
const CORE=['./','./index.html','./styles.css?v=0.1.1','./data.js?v=0.1.1','./app.js?v=0.1.1','./manifest.webmanifest?v=0.1.1','./assets/icon.svg?v=0.1.1'];

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
