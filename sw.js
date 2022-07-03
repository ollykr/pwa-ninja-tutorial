// install service worker
// "self" refers to the service worker itself
// later on this is where we cache static assets that don't change much/often, e.g css and images
self.addEventListener("install", (evt) => {
	console.log("service worker has been installed");
});

// activate service worker/listening to activate event
// automatically becomes activated
self.addEventListener("activate", (evt) => {
	console.log("Service Worker has been activated");
});
// fetch event
// we update the code so SW is re-installed but not activated , waiting to be activated
self.addEventListener("fetch", (evt) => {
	console.log("fetch event", evt);
});
