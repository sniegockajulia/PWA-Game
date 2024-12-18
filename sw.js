const CACHE_NAME = 'shooter-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Game.js',
  '/Entity.js',
  '/Character.js',
  '/Player.js',
  '/Opponent.js',
  '/Boss.js',
  '/Shot.js',
  '/main.js',
  '/game.css',
  '/assets/boss.png',
  '/assets/boss_dead.png',
  '/assets/game_over.png',
  '/assets/opponent.png',
  '/assets/opponent_dead.png',
  '/assets/player.png',
  '/assets/player_dead.png',
  '/assets/shot1.png',
  '/assets/shot2.png',
  '/assets/you_win.png',
  'https://cdn.glitch.global/8f80c32b-0f56-4226-ad33-10b96d9f6fad/icons%2Ficon-192x192.png?v=1734211426495',
  'https://cdn.glitch.global/8f80c32b-0f56-4226-ad33-10b96d9f6fad/icons%2Ficon-512x512.png?v=1734211426495'
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
