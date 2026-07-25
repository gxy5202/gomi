import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import remarkToc from 'remark-toc';
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';


import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
	output: 'server',
  prefetch: true,
  integrations: [react()],
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
      port: 18120,
      host: true,
  },
  devToolbar: {
    enabled: false
  },
  markdown: {
    // 示例：在 Markdown 中使用 prism 进行语法高亮显示
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkToc, remarkReadingTime],
    gfm: true,
  }
});
