const staticCacheName = "site-static";
// store requests urls users can make
const assets = [
	"/",
	"/index.html",
	"/js/app.js",
	"/js/ui.js",
	"/js/materialize.min.js",
	"/css/styles.css",
	"/css/materialize.min.css",
	"/img/dish.png",
	"https://fonts.googleapis.com/icon?family=Material+Icons",
	"https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
];
// install service worker
// "self" refers to the service worker itself
// later on this is where we cache static assets that don't change much/often, e.g css and images
self.addEventListener("install", (evt) => {
	// console.log("service worker has been installed");
	// Reaching out to cache API
	// it opens a "staticCacheName" cache and use it, if it exists, otherwise it creates it
	// this is async task
	evt.waitUntill(
		caches.open(staticCacheName).then((cache) => {
			console.log("caching shell assets");
			cache.addAll(assets);
		})
	);
});

// activate service worker/listening to activate event
// automatically becomes activated
self.addEventListener("activate", (evt) => {
	// console.log("Service Worker has been activated");
});
// fetch event
// we update the code so SW is re-installed but not activated , waiting to be activated
self.addEventListener("fetch", (evt) => {
	// console.log("fetch event", evt);
	// fetch an event and respond with our own custom event, a resource from our cache
	evt.respondWith(
		// if cache matches a request
		// cachesRes is a response for existing/matching assets that we pre-cache, otherwise cacheRes is empty
		caches.match(evt.request).then((cachesRes) => {
			// no need to go to a serverm we get from our cache
			// but we don't want to return something empty like cacheRes that doesn't contain mathicng assts so we use pipe to get an initial fetch (froma server)
			return cachesRes || fetch(evt.request);
		})
	);
});
