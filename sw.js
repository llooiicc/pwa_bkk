/**
 * Created by loic on 15/01/18.
 */
let appCache = "appCache";
let filesToCache = [
    /* index */
    '/',
    /* assets */
    '/assets/css/bootstrap-3.3.7/bootstrap.css',
    '/assets/css/bootstrap-3.3.7/bootstrap-theme.css',
    '/assets/css/fonts/glyphicons-halflings-regular.eot',
    '/assets/css/fonts/glyphicons-halflings-regular.svg',
    '/assets/css/fonts/glyphicons-halflings-regular.ttf',
    '/assets/css/fonts/glyphicons-halflings-regular.woff',
    '/assets/css/fonts/glyphicons-halflings-regular.woff2',
    '/assets/css/leaflet/images/layers.png',
    '/assets/css/leaflet/images/layers-2x.png',
    '/assets/css/leaflet/images/marker-icon.png',
    '/assets/css/leaflet/images/marker-icon-2x.png',
    '/assets/css/leaflet/images/marker-shadow.png',
    'assets/css/leaflet/leaflet.css',
    'assets/css/main.css',
    /* js */
    '/js/bootstrap/bootstrap.js',
    '/js/jquery/jquery-3.2.1.js',
    '/js/leaflet/leaflet.js',
    '/js/leaflet/leaflet-src.js',
    '/js/app.js',
    '/js/map.js'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(appCache).then(function(cache) {
            cache.addAll(filesToCache.map(function(urlToPrefetch) {
                return new Request(urlToPrefetch, {mode: 'no-cors'});
            })).then(function() {
                console.log('All resources have been fetched and cached.');
            });
        }).catch(function(error) {
            console.error('Pre-fetching failed:', error);
        })
    );
});