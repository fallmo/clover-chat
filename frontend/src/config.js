export default {
  url: import.meta.env.VITE_BACKEND_URL,
  demo: import.meta.env.VITE_DEMO === 'true',
  appName: import.meta.env.VITE_SITE_TITLE || 'OOC',
  brand: import.meta.env.VITE_SITE_BRAND || 'Accel Technologies',
  showCredits: import.meta.env.VITE_SHOW_CREDITS === 'true',
};
