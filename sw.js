/* Le Collé — service worker de l'application installable.
   Aucun contenu n'est gardé hors ligne : chaque requête est renvoyée au serveur avec revalidation
   (cache: 'no-cache'), si bien qu'une mise à jour du site est visible dès l'ouverture suivante. */
const VERSION = '2026-11-20';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);   // aucun cache conservé
  await self.clients.claim();
})()));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;   // le navigateur s'en charge
  e.respondWith(fetch(new Request(r, { cache: 'no-cache' })).catch(() => fetch(r)));
});
