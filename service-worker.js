const CACHE_NAME = "taskify-v2";
const urlsToCache = [
  "/Taskify/",
  "/Taskify/index.html",
  "/Taskify/CSS/style.css",
  "/Taskify/JS/script.js",
  "/Taskify/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
