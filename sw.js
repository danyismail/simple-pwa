let namaCache = 'offline-versi-2'

isiCache = [
    './',
    './index.html',
    './about.html',
    './contact.html',
    '/css/style.css',
    '/js/app.js'
]

self.addEventListener('install',function(e){
    console.log('sw has been  inistalled',e)
    e.waitUntil(
        caches
         .open(namaCache)
         .then(result=>{result.addAll(isiCache)})
         .then(()=> self.skipWaiting)
    )
})

self.addEventListener('activate',(e)=>{
    console.log('sw has been activated')
    e.waitUntil(
        caches.keys().then(keyList=>{
            return Promise.all(
                keyList.map(key =>{
                    if(key !== namaCache){
                        console.log('remove old cache')
                        caches.delete(key)
                    }
                })
            )
        })
    )

  })

self.addEventListener('fetch',function(e){
    console.log('sw fetch')
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))
})