const CACHE_NAME = 'shooter-cache-v1';
const urlsToCache = [
  '/PWA-Game/',
  '/PWA-Game/index.html',
  '/PWA-Game/Game.js',
  '/PWA-Game/Entity.js',
  '/PWA-Game/Character.js',
  '/PWA-Game/Player.js',
  '/PWA-Game/Opponent.js',
  '/PWA-Game/Boss.js',
  '/PWA-Game/Shot.js',
  '/PWA-Game/main.js',
  '/PWA-Game/game.css',
  '/PWA-Game/assets/boss.png',
  '/PWA-Game/assets/boss_dead.png',
  '/PWA-Game/assets/game_over.png',
  '/PWA-Game/assets/opponent.png',
  '/PWA-Game/assets/opponent_dead.png',
  '/PWA-Game/assets/player.png',
  '/PWA-Game/assets/player_dead.png',
  '/PWA-Game/assets/shot1.png',
  '/PWA-Game/assets/shot2.png',
  '/PWA-Game/assets/you_win.png',
  '/PWA-Game/icons/icon-192x192.png',
  '/PWA-Game/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
