// Register ServiceWorker

// If SW property exists in navigator object
// navigator is a JS object representing browser
if ("serviceWorker" in navigator) {
	// below is async task .i.e takes time to complete and uses "promise" (a special value in JS) and "catch" with callback functions
	// If "promise" successful, it takes an object "reg" as parameter which represents a registration of our
	navigator.serviceWorker
		.register("/sw.js")
		.then((reg) => console.log("service worker registers", reg))
		.catch((err) => console.log("service worker not registered", err));
}
