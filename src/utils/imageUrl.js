/**
 * Returns the correct URL for images stored in /public/images/
 * Automatically prepends Vite's BASE_URL so paths work both locally
 * and on GitHub Pages (where base = '/tryfecta-website/').
 *
 * Usage: img(path) where path is relative to /public/images/
 * e.g.  img('banner/banner-solid-left-shape.png')
 */
export const img = (path) => `${import.meta.env.BASE_URL}images/${path}`;
