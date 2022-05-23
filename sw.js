const VERSION = "v1";
// self es como el this de los SW
// oye, me avisas si se instala serviceWorker para ejecutar el callback
self.addEventListener('install', event =>{
    // oye evento de install, esperate un momento a que llene el precache
    event.waitUntil(precache());

});

// oye avisame si hace un fech y me lo pasa al event
self.addEventListener('fetch', event=>{
    // lo que pide nuestro fetch
    const request = event.request;
    // ahora solamente queremos intercepar el metodo GET si no es GET no hagas eso
    if (request.method != "GET") {
        return; // no hagas nada
    }
    // ahora buscaremos en cache a ver si lo tenemos
    // respondeme el evento con esta funcion
    event.respondWith(cachedReponse(request));

    //actualizat el cache
    event.waitUntil(updateCache(request) ) // evento esperate que se ejecute esto
})


async function precache() {
    const cache = await caches.open(VERSION) // abrimos el cache
    return cache.addAll([ // añademe estes archivos
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.js',
        // '/assets/index.css',
        // '/assets/BigBuckBunny.mp4',
    ]) // return porque arriba tenemos una promesa esperando respuesta
}

async function cachedReponse(request) {
    // traemos el cache a la funcion
    const cache = await caches.open(VERSION);
     // buscame el pedido en el cache
    const response = await cache.match(request);
    //||ponemos "fetch(pedido)" porque si este es 
    // undefine osea no dió match con nadie entonces se pedirá al servidor como 
    // tenia en el principio
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    console.log(`Code: ${response.status} | Messsage: ${response.statusText}`)
    console.log(request.url)
    if(response.status === 206) {
        console.log('Respuesta parcial, no se actualiza caché ...');
    } else {
        cache.put(request, response.clone());
    }
    return cache
}