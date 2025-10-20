import { defineConfig } from "astro/config";

// https://astro.build/config
// For GitHub Pages hosting under a repository subpath, configure `site` and `base`.
// Using the full site URL as recommended by Astro docs for GitHub Pages
export default defineConfig({
	site: 'https://pmniko.github.io/minimalist-portfolio-json/',
	base: '/minimalist-portfolio-json',
});
