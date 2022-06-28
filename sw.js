// install service worker
// "self" refers to the service worker itself
// later on this is where we cache static assets that don't change much/often, e.g css and images
self.addEventListener("install", (evt) => {
	console.log("service worker has been installed");
});
