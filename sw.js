/* eslint-disable no-restricted-globals */
// ============================================================================
// Service Worker — Azad Balushi Portfolio PWA
// ----------------------------------------------------------------------------
// Caching strategy:
//   - Precache: core shell (offline page, manifest, key icons)
//   - Runtime cache (stale-while-revalidate): pages and documents
//   - runtime cache (cache-first): static assets (JS, CSS, fonts, images)
//   - Network-first with cache fallback: navigations
// ============================================================================

const VERSION = 'v1.0.0';
const STATIC_CACHE = `static-${VERSION}`;
const PAGE_CACHE = `pages-${VERSION}`;
const IMAGE_CACHE = `images-${VERSION}`;
const OFFLINE_URL = '/offline.html';

const PRECACHE_URLS = [
  OFFLINE_URL,
  '/site.webmanifest',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/maskable-192x192.png',
  '/icons/maskable-512x512.png',
  '/icons/apple-touch-icon.png',
  '/AB_Logo.png',
  '/azad-portrait.png',
];

// ---------------------------------------------------------------------------
// Install — precache core shell
// ---------------------------------------------------------------------------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ---------------------------------------------------------------------------
// Activate — clean old caches
// ---------------------------------------------------------------------------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => ![STATIC_CACHE, PAGE_CACHE, IMAGE_CACHE].includes(key))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function isNavigationRequest(request) {
  return (
    request.mode === 'navigate' ||
    (request.method === 'GET' && request.headers.get('accept')?.includes('text/html'))
  );
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    /\.(?:js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|webp|ico|pdf)$/i.test(url.pathname) ||
    url.pathname.startsWith('/_next/static/')
  );
}

function isImageRequest(request) {
  const url = new URL(request.url);
  return /\.(?:png|jpg|jpeg|gif|webp|svg)$/i.test(url.pathname);
}

// Stale-while-revalidate
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.status === 200 && response.type === 'basic') {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached);
  return cached || fetchPromise;
}

// Cache-first
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.status === 200 && response.type === 'basic') {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return cached || Response.error();
  }
}

// Network-first with cache fallback (navigations only)
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    // Only cache successful, basic (same-origin) responses
    if (response && response.status === 200 && response.type === 'basic') {
      cache.put(request, response.clone());
    }
    // Return the network response even if it's a 404 — don't fall back to
    // the offline page for real HTTP errors, only for network failures.
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    // Genuine network failure — show offline page
    const offline = await caches.match(OFFLINE_URL);
    return offline || Response.error();
  }
}

// ---------------------------------------------------------------------------
// Fetch — routing strategies
// ---------------------------------------------------------------------------
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (e.g., analytics, external fonts)
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Skip non-http(s) schemes
  if (!url.protocol.startsWith('http')) return;

  // Navigations — network-first, fall back to cache, then offline page
  if (isNavigationRequest(request)) {
    event.respondWith(networkFirst(request, PAGE_CACHE));
    return;
  }

  // Images — stale-while-revalidate into image cache
  if (isImageRequest(request)) {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
    return;
  }

  // Static assets — cache-first
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Default — stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request, PAGE_CACHE));
});

// ---------------------------------------------------------------------------
// Message — allow page to trigger skipWaiting on update
// ---------------------------------------------------------------------------
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
