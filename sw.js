
const CACHE_NAME = 'crystal-blast-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icon.png',
  './splash-screen.png',
  './animewow.mp3',
  './aww.mp3',
  './blast_1.mp3',
  './bonncrack.mp3',
  './break_boll.mp3',
  './cashregister.mp3',
  './ding.mp3',
  './freez.mp3',
  './game_over.mp3',
  './gear.mp3',
  './ghost.png',
  './ghost_1.png',
  './kidsaye.mp3',
  './powerup.mp3',
  './whoos.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
