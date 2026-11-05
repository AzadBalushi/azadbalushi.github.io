const BUILD_ID = "DE6EBWwperddBbqpQBD-f";
const CACHE_PREFIX = 'azadbalushi-';
const CACHE_NAME = `${CACHE_PREFIX}${BUILD_ID}`;
const PRECACHE_URLS = [
  "/",
  "/portfolio",
  "/business-card",
  "/_next/static/chunks/213-3ee1bbcfd8901d6e.js",
  "/_next/static/chunks/440-bcb028cf1ef28649.js",
  "/_next/static/chunks/487-f47c2fa87af23683.js",
  "/_next/static/chunks/541-d974bd4519901f34.js",
  "/_next/static/chunks/814-b3f1b08c165214f0.js",
  "/_next/static/chunks/864-1f68ac2bf9d5fb21.js",
  "/_next/static/chunks/app/business-card/page-ce1e2c39084144ef.js",
  "/_next/static/chunks/app/layout-175683fffbb70480.js",
  "/_next/static/chunks/app/page-0833457c8f3aa775.js",
  "/_next/static/chunks/app/portfolio/page-a5d09a3b91773397.js",
  "/_next/static/chunks/app/_not-found-d0d3bd5db23faf2d.js",
  "/_next/static/chunks/fd9d1056-850448a208500ebb.js",
  "/_next/static/chunks/framework-8883d1e9be70c3da.js",
  "/_next/static/chunks/main-1319130f525bf906.js",
  "/_next/static/chunks/main-app-c15ef73fa057fa09.js",
  "/_next/static/chunks/pages/_app-27277a117f49dcf1.js",
  "/_next/static/chunks/pages/_error-91a5938854a6f402.js",
  "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
  "/_next/static/chunks/webpack-9de609869ad5a1e8.js",
  "/_next/static/css/63694015642dfe92.css",
  "/_next/static/css/bd22b14aeb28232b.css",
  "/_next/static/css/f324352f48331cfd.css",
  "/_next/static/DE6EBWwperddBbqpQBD-f/_buildManifest.js",
  "/_next/static/DE6EBWwperddBbqpQBD-f/_ssgManifest.js",
  "/_next/static/media/19cfc7226ec3afaa-s.woff2",
  "/_next/static/media/21350d82a1f187e9-s.woff2",
  "/_next/static/media/636a5ac981f94f8b-s.p.woff2",
  "/_next/static/media/6fe53d21e6e7ebd8-s.woff2",
  "/_next/static/media/8e9860b6e62d6359-s.woff2",
  "/_next/static/media/8ebc6e9dde468c4a-s.woff2",
  "/_next/static/media/9e7b0a821b9dfcb4-s.woff2",
  "/_next/static/media/ba9851c3c22cd980-s.woff2",
  "/_next/static/media/c5fe6dc8356a8c31-s.woff2",
  "/_next/static/media/df0a9ae256c0569c-s.woff2",
  "/_next/static/media/e4af272ccee01ff0-s.p.woff2",
  "/apple-touch-icon.png",
  "/azad-balushi-resume.pdf",
  "/email-logo.png",
  "/favicon.ico",
  "/icon-192.png",
  "/icon-32.png",
  "/icon-512.png",
  "/icon-maskable-512.png",
  "/images/AB_Logo.png",
  "/images/azad-portrait-transparent.png",
  "/images/azad-portrait.png",
  "/images/featured-work-bg.svg",
  "/images/hero-bg-image.png",
  "/images/lets-connect-bg-image.png",
  "/og-portfolio.jpg",
  "/portfolio-generated/3d-artwork/3d-artwork-banner.webp",
  "/portfolio-generated/3d-artwork/3d-artwork-sample-01.webp",
  "/portfolio-generated/3d-artwork/3d-artwork-sample-02.webp",
  "/portfolio-generated/3d-artwork/3d-artwork-sample-banner.webp",
  "/portfolio-generated/3d-artwork/chrome-bloom-1.webp",
  "/portfolio-generated/3d-artwork/chrome-bloom-2.webp",
  "/portfolio-generated/3d-artwork/crystal-garden-1.webp",
  "/portfolio-generated/3d-artwork/crystal-garden-2.webp",
  "/portfolio-generated/3d-artwork/crystal-garden-3.webp",
  "/portfolio-generated/3d-artwork/desert-monolith-1.webp",
  "/portfolio-generated/3d-artwork/desert-monolith-2.webp",
  "/portfolio-generated/3d-artwork/desert-monolith-3.webp",
  "/portfolio-generated/3d-artwork/foundry-totem-1.webp",
  "/portfolio-generated/3d-artwork/foundry-totem-2.webp",
  "/portfolio-generated/3d-artwork/foundry-totem-3.webp",
  "/portfolio-generated/3d-artwork/liquid-sculpt-1.webp",
  "/portfolio-generated/3d-artwork/liquid-sculpt-2.webp",
  "/portfolio-generated/3d-artwork/neon-terrarium-1.webp",
  "/portfolio-generated/3d-artwork/neon-terrarium-2.webp",
  "/portfolio-generated/3d-artwork/orbital-glass-1.webp",
  "/portfolio-generated/3d-artwork/orbital-glass-2.webp",
  "/portfolio-generated/3d-artwork/orbital-glass-3.webp",
  "/portfolio-generated/3d-artwork/paper-canyon-1.webp",
  "/portfolio-generated/3d-artwork/paper-canyon-2.webp",
  "/portfolio-generated/3d-artwork/paper-canyon-3.webp",
  "/portfolio-generated/3d-artwork/vapor-relic-1.webp",
  "/portfolio-generated/3d-artwork/vapor-relic-2.webp",
  "/portfolio-generated/3d-artwork/vapor-relic-banner.webp",
  "/portfolio-generated/e-commerce/atelier-fashion-shop-1.webp",
  "/portfolio-generated/e-commerce/atelier-fashion-shop-2.webp",
  "/portfolio-generated/e-commerce/atelier-fashion-shop-banner.webp",
  "/portfolio-generated/e-commerce/bloom-florist-cart-1.webp",
  "/portfolio-generated/e-commerce/bloom-florist-cart-2.webp",
  "/portfolio-generated/e-commerce/bloom-florist-cart-3.webp",
  "/portfolio-generated/e-commerce/e-commerce-banner.webp",
  "/portfolio-generated/e-commerce/e-commerce-sample-01.webp",
  "/portfolio-generated/e-commerce/e-commerce-sample-02.webp",
  "/portfolio-generated/e-commerce/harbor-coffee-co-1.webp",
  "/portfolio-generated/e-commerce/harbor-coffee-co-2.webp",
  "/portfolio-generated/e-commerce/harbor-coffee-co-3.webp",
  "/portfolio-generated/e-commerce/lumen-skincare-store-1.webp",
  "/portfolio-generated/e-commerce/lumen-skincare-store-2.webp",
  "/portfolio-generated/e-commerce/lumen-skincare-store-3.webp",
  "/portfolio-generated/e-commerce/nomad-home-goods-1.webp",
  "/portfolio-generated/e-commerce/nomad-home-goods-2.webp",
  "/portfolio-generated/e-commerce/oak-ember-kitchen-1.webp",
  "/portfolio-generated/e-commerce/oak-ember-kitchen-2.webp",
  "/portfolio-generated/e-commerce/pixel-electronics-hub-1.webp",
  "/portfolio-generated/e-commerce/pixel-electronics-hub-2.webp",
  "/portfolio-generated/e-commerce/pixel-electronics-hub-3.webp",
  "/portfolio-generated/e-commerce/stride-footwear-1.webp",
  "/portfolio-generated/e-commerce/stride-footwear-2.webp",
  "/portfolio-generated/e-commerce/stride-footwear-3.webp",
  "/portfolio-generated/e-commerce/trail-gear-outlet-1.webp",
  "/portfolio-generated/e-commerce/trail-gear-outlet-2.webp",
  "/portfolio-generated/e-commerce/trail-gear-outlet-banner.webp",
  "/portfolio-generated/email-communications/email-communications-banner.webp",
  "/portfolio-generated/email-communications/email-communications-sample-01.webp",
  "/portfolio-generated/email-communications/email-communications-sample-02.webp",
  "/portfolio-generated/email-communications/email-communications-sample-banner.webp",
  "/portfolio-generated/email-communications/event-invitation-1.webp",
  "/portfolio-generated/email-communications/event-invitation-2.webp",
  "/portfolio-generated/email-communications/holiday-promo-blast-1.webp",
  "/portfolio-generated/email-communications/holiday-promo-blast-2.webp",
  "/portfolio-generated/email-communications/holiday-promo-blast-3.webp",
  "/portfolio-generated/email-communications/monthly-brief-1.webp",
  "/portfolio-generated/email-communications/monthly-brief-2.webp",
  "/portfolio-generated/email-communications/product-update-digest-1.webp",
  "/portfolio-generated/email-communications/product-update-digest-2.webp",
  "/portfolio-generated/email-communications/product-update-digest-3.webp",
  "/portfolio-generated/email-communications/re-engagement-flow-1.webp",
  "/portfolio-generated/email-communications/re-engagement-flow-2.webp",
  "/portfolio-generated/email-communications/spring-launch-newsletter-1.webp",
  "/portfolio-generated/email-communications/spring-launch-newsletter-2.webp",
  "/portfolio-generated/email-communications/spring-launch-newsletter-3.webp",
  "/portfolio-generated/email-communications/survey-request-1.webp",
  "/portfolio-generated/email-communications/survey-request-2.webp",
  "/portfolio-generated/email-communications/survey-request-3.webp",
  "/portfolio-generated/email-communications/webinar-reminder-1.webp",
  "/portfolio-generated/email-communications/webinar-reminder-2.webp",
  "/portfolio-generated/email-communications/webinar-reminder-3.webp",
  "/portfolio-generated/email-communications/welcome-series-1.webp",
  "/portfolio-generated/email-communications/welcome-series-2.webp",
  "/portfolio-generated/email-communications/welcome-series-banner.webp",
  "/portfolio-generated/logo-design/aurora-dental-1.webp",
  "/portfolio-generated/logo-design/aurora-dental-2.webp",
  "/portfolio-generated/logo-design/aurora-dental-3.webp",
  "/portfolio-generated/logo-design/aurora-dental-banner.webp",
  "/portfolio-generated/logo-design/harvest-market-1.webp",
  "/portfolio-generated/logo-design/harvest-market-2.webp",
  "/portfolio-generated/logo-design/kite-studio-mark-1.webp",
  "/portfolio-generated/logo-design/kite-studio-mark-2.webp",
  "/portfolio-generated/logo-design/lattice-architects-1.webp",
  "/portfolio-generated/logo-design/lattice-architects-2.webp",
  "/portfolio-generated/logo-design/lattice-architects-3.webp",
  "/portfolio-generated/logo-design/logo-design-banner.webp",
  "/portfolio-generated/logo-design/logo-design-sample-01.webp",
  "/portfolio-generated/logo-design/logo-design-sample-02.webp",
  "/portfolio-generated/logo-design/northwind-bakery-1.webp",
  "/portfolio-generated/logo-design/northwind-bakery-2.webp",
  "/portfolio-generated/logo-design/pulse-fitness-1.webp",
  "/portfolio-generated/logo-design/pulse-fitness-2.webp",
  "/portfolio-generated/logo-design/pulse-fitness-3.webp",
  "/portfolio-generated/logo-design/ridge-outdoor-co-1.webp",
  "/portfolio-generated/logo-design/ridge-outdoor-co-2.webp",
  "/portfolio-generated/logo-design/summit-coffee-roasters-1.webp",
  "/portfolio-generated/logo-design/summit-coffee-roasters-2.webp",
  "/portfolio-generated/logo-design/summit-coffee-roasters-3.webp",
  "/portfolio-generated/logo-design/verde-organics-1.webp",
  "/portfolio-generated/logo-design/verde-organics-2.webp",
  "/portfolio-generated/logo-design/verde-organics-3.webp",
  "/portfolio-generated/logo-design/verde-organics-banner.webp",
  "/portfolio-generated/photography/coastal-morning-portraits-1.webp",
  "/portfolio-generated/photography/coastal-morning-portraits-2.webp",
  "/portfolio-generated/photography/coastal-morning-portraits-3.webp",
  "/portfolio-generated/photography/coastal-morning-portraits-banner.webp",
  "/portfolio-generated/photography/desert-road-trip-1.webp",
  "/portfolio-generated/photography/desert-road-trip-2.webp",
  "/portfolio-generated/photography/festival-candids-1.webp",
  "/portfolio-generated/photography/festival-candids-2.webp",
  "/portfolio-generated/photography/festival-candids-3.webp",
  "/portfolio-generated/photography/forest-light-study-1.webp",
  "/portfolio-generated/photography/forest-light-study-2.webp",
  "/portfolio-generated/photography/forest-light-study-3.webp",
  "/portfolio-generated/photography/market-textures-1.webp",
  "/portfolio-generated/photography/market-textures-2.webp",
  "/portfolio-generated/photography/mountain-dawn-1.webp",
  "/portfolio-generated/photography/mountain-dawn-2.webp",
  "/portfolio-generated/photography/mountain-dawn-3.webp",
  "/portfolio-generated/photography/photography-banner.webp",
  "/portfolio-generated/photography/photography-sample-01.webp",
  "/portfolio-generated/photography/photography-sample-02.webp",
  "/portfolio-generated/photography/product-still-life-1.webp",
  "/portfolio-generated/photography/product-still-life-2.webp",
  "/portfolio-generated/photography/studio-headshots-1.webp",
  "/portfolio-generated/photography/studio-headshots-2.webp",
  "/portfolio-generated/photography/studio-headshots-3.webp",
  "/portfolio-generated/photography/urban-night-series-1.webp",
  "/portfolio-generated/photography/urban-night-series-2.webp",
  "/portfolio-generated/photography/urban-night-series-banner.webp",
  "/portfolio-generated/power-bi-dashboard/customer-churn-insights-1.webp",
  "/portfolio-generated/power-bi-dashboard/customer-churn-insights-2.webp",
  "/portfolio-generated/power-bi-dashboard/customer-churn-insights-banner.webp",
  "/portfolio-generated/power-bi-dashboard/finance-close-tracker-1.webp",
  "/portfolio-generated/power-bi-dashboard/finance-close-tracker-2.webp",
  "/portfolio-generated/power-bi-dashboard/hr-workforce-analytics-1.webp",
  "/portfolio-generated/power-bi-dashboard/hr-workforce-analytics-2.webp",
  "/portfolio-generated/power-bi-dashboard/hr-workforce-analytics-3.webp",
  "/portfolio-generated/power-bi-dashboard/it-service-desk-1.webp",
  "/portfolio-generated/power-bi-dashboard/it-service-desk-2.webp",
  "/portfolio-generated/power-bi-dashboard/it-service-desk-3.webp",
  "/portfolio-generated/power-bi-dashboard/marketing-funnel-1.webp",
  "/portfolio-generated/power-bi-dashboard/marketing-funnel-2.webp",
  "/portfolio-generated/power-bi-dashboard/power-bi-dashboard-banner.webp",
  "/portfolio-generated/power-bi-dashboard/power-bi-dashboard-sample-01.webp",
  "/portfolio-generated/power-bi-dashboard/power-bi-dashboard-sample-02.webp",
  "/portfolio-generated/power-bi-dashboard/project-portfolio-health-1.webp",
  "/portfolio-generated/power-bi-dashboard/project-portfolio-health-2.webp",
  "/portfolio-generated/power-bi-dashboard/project-portfolio-health-3.webp",
  "/portfolio-generated/power-bi-dashboard/retail-store-kpis-1.webp",
  "/portfolio-generated/power-bi-dashboard/retail-store-kpis-2.webp",
  "/portfolio-generated/power-bi-dashboard/sales-performance-hub-1.webp",
  "/portfolio-generated/power-bi-dashboard/sales-performance-hub-2.webp",
  "/portfolio-generated/power-bi-dashboard/sales-performance-hub-3.webp",
  "/portfolio-generated/power-bi-dashboard/supply-chain-overview-1.webp",
  "/portfolio-generated/power-bi-dashboard/supply-chain-overview-2.webp",
  "/portfolio-generated/power-bi-dashboard/supply-chain-overview-3.webp",
  "/portfolio-generated/power-bi-dashboard/supply-chain-overview-banner.webp",
  "/portfolio-generated/sharepoint-development/client-extranet-1.webp",
  "/portfolio-generated/sharepoint-development/client-extranet-2.webp",
  "/portfolio-generated/sharepoint-development/client-extranet-banner.webp",
  "/portfolio-generated/sharepoint-development/document-approval-workflow-1.webp",
  "/portfolio-generated/sharepoint-development/document-approval-workflow-2.webp",
  "/portfolio-generated/sharepoint-development/employee-intranet-1.webp",
  "/portfolio-generated/sharepoint-development/employee-intranet-2.webp",
  "/portfolio-generated/sharepoint-development/employee-intranet-3.webp",
  "/portfolio-generated/sharepoint-development/events-calendar-app-1.webp",
  "/portfolio-generated/sharepoint-development/events-calendar-app-2.webp",
  "/portfolio-generated/sharepoint-development/events-calendar-app-3.webp",
  "/portfolio-generated/sharepoint-development/knowledge-base-1.webp",
  "/portfolio-generated/sharepoint-development/knowledge-base-2.webp",
  "/portfolio-generated/sharepoint-development/knowledge-base-3.webp",
  "/portfolio-generated/sharepoint-development/leave-request-portal-1.webp",
  "/portfolio-generated/sharepoint-development/leave-request-portal-2.webp",
  "/portfolio-generated/sharepoint-development/onboarding-hub-1.webp",
  "/portfolio-generated/sharepoint-development/onboarding-hub-2.webp",
  "/portfolio-generated/sharepoint-development/onboarding-hub-3.webp",
  "/portfolio-generated/sharepoint-development/policy-library-1.webp",
  "/portfolio-generated/sharepoint-development/policy-library-2.webp",
  "/portfolio-generated/sharepoint-development/project-site-template-1.webp",
  "/portfolio-generated/sharepoint-development/project-site-template-2.webp",
  "/portfolio-generated/sharepoint-development/project-site-template-3.webp",
  "/portfolio-generated/sharepoint-development/sharepoint-development-banner.webp",
  "/portfolio-generated/sharepoint-development/sharepoint-development-sample-01.webp",
  "/portfolio-generated/sharepoint-development/sharepoint-development-sample-02.webp",
  "/portfolio-generated/sharepoint-development/sharepoint-development-sample-banner.webp",
  "/portfolio-generated/ui-ux/fintech-banking-app-1.webp",
  "/portfolio-generated/ui-ux/fintech-banking-app-2.webp",
  "/portfolio-generated/ui-ux/fintech-banking-app-3.webp",
  "/portfolio-generated/ui-ux/fintech-banking-app-banner.webp",
  "/portfolio-generated/ui-ux/fitness-coaching-app-1.webp",
  "/portfolio-generated/ui-ux/fitness-coaching-app-2.webp",
  "/portfolio-generated/ui-ux/fitness-coaching-app-3.webp",
  "/portfolio-generated/ui-ux/food-delivery-redesign-1.webp",
  "/portfolio-generated/ui-ux/food-delivery-redesign-2.webp",
  "/portfolio-generated/ui-ux/health-tracker-mobile-1.webp",
  "/portfolio-generated/ui-ux/health-tracker-mobile-2.webp",
  "/portfolio-generated/ui-ux/learning-platform-dashboard-1.webp",
  "/portfolio-generated/ui-ux/learning-platform-dashboard-2.webp",
  "/portfolio-generated/ui-ux/music-streaming-concept-1.webp",
  "/portfolio-generated/ui-ux/music-streaming-concept-2.webp",
  "/portfolio-generated/ui-ux/music-streaming-concept-3.webp",
  "/portfolio-generated/ui-ux/real-estate-search-1.webp",
  "/portfolio-generated/ui-ux/real-estate-search-2.webp",
  "/portfolio-generated/ui-ux/smart-home-controls-1.webp",
  "/portfolio-generated/ui-ux/smart-home-controls-2.webp",
  "/portfolio-generated/ui-ux/smart-home-controls-3.webp",
  "/portfolio-generated/ui-ux/travel-booking-flow-1.webp",
  "/portfolio-generated/ui-ux/travel-booking-flow-2.webp",
  "/portfolio-generated/ui-ux/travel-booking-flow-3.webp",
  "/portfolio-generated/ui-ux/ui-ux-banner.webp",
  "/portfolio-generated/ui-ux/ui-ux-sample-01.webp",
  "/portfolio-generated/ui-ux/ui-ux-sample-02.webp",
  "/portfolio-generated/ui-ux/ui-ux-sample-banner.webp",
  "/portfolio-generated/websites/architecture-studio-site-1.webp",
  "/portfolio-generated/websites/architecture-studio-site-2.webp",
  "/portfolio-generated/websites/architecture-studio-site-3.webp",
  "/portfolio-generated/websites/architecture-studio-site-banner.webp",
  "/portfolio-generated/websites/boutique-hotel-site-1.webp",
  "/portfolio-generated/websites/boutique-hotel-site-2.webp",
  "/portfolio-generated/websites/dental-clinic-site-1.webp",
  "/portfolio-generated/websites/dental-clinic-site-2.webp",
  "/portfolio-generated/websites/law-firm-website-1.webp",
  "/portfolio-generated/websites/law-firm-website-2.webp",
  "/portfolio-generated/websites/law-firm-website-3.webp",
  "/portfolio-generated/websites/nonprofit-donation-site-1.webp",
  "/portfolio-generated/websites/nonprofit-donation-site-2.webp",
  "/portfolio-generated/websites/nonprofit-donation-site-3.webp",
  "/portfolio-generated/websites/photographer-portfolio-site-1.webp",
  "/portfolio-generated/websites/photographer-portfolio-site-2.webp",
  "/portfolio-generated/websites/restaurant-booking-site-1.webp",
  "/portfolio-generated/websites/restaurant-booking-site-2.webp",
  "/portfolio-generated/websites/saas-landing-page-1.webp",
  "/portfolio-generated/websites/saas-landing-page-2.webp",
  "/portfolio-generated/websites/saas-landing-page-3.webp",
  "/portfolio-generated/websites/startup-team-site-1.webp",
  "/portfolio-generated/websites/startup-team-site-2.webp",
  "/portfolio-generated/websites/startup-team-site-3.webp",
  "/portfolio-generated/websites/websites-banner.webp",
  "/portfolio-generated/websites/websites-sample-01.webp",
  "/portfolio-generated/websites/websites-sample-02.webp",
  "/portfolio-generated/websites/websites-sample-banner.webp",
  "/site.webmanifest",
  "/technology-stack/adobe-cc.svg",
  "/technology-stack/azure.svg",
  "/technology-stack/copilot.svg",
  "/technology-stack/figma.svg",
  "/technology-stack/microsoft-365.svg",
  "/technology-stack/power-bi.svg",
  "/technology-stack/power-platform.svg",
  "/technology-stack/react.svg",
  "/technology-stack/sharepoint.svg",
  "/technology-stack/teams.svg"
];
const STATUS_URL = '/__offline-status';
const PRECACHE_CONCURRENCY = 8;

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.searchParams.has('_rsc')) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstPage(request, url));
    return;
  }
  event.respondWith(cacheFirst(request));
});

async function precache() {
  const cache = await caches.open(CACHE_NAME);
  for (let start = 0; start < PRECACHE_URLS.length; start += PRECACHE_CONCURRENCY) {
    const batch = PRECACHE_URLS.slice(start, start + PRECACHE_CONCURRENCY);
    await Promise.all(
      batch.map(async (url) => {
        const response = await fetch(new Request(url, { cache: 'reload' }));
        if (!response.ok) throw new Error(`Offline precache failed for ${url}`);
        await cache.put(url, response);
      })
    );
  }
  const status = JSON.stringify({
    version: BUILD_ID,
    installedAt: new Date().toISOString(),
    assetCount: PRECACHE_URLS.length,
  });
  await cache.put(STATUS_URL, new Response(status, { headers: { 'Content-Type': 'application/json' } }));
}

async function networkFirstPage(request, url) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(url.pathname, response.clone());
    return response;
  } catch {
    return (await cache.match(url.pathname)) || (await cache.match('/')) || Response.error();
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok && response.type === 'basic') cache.put(request, response.clone());
  return response;
}
