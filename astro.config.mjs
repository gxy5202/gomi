import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";
import remarkToc from 'remark-toc';
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  prefetch: true,
  integrations: [react(), tailwind()],
  adapter: node({
    mode: "standalone"
  }),
  markdown: {
    // 示例：在 Markdown 中使用 prism 进行语法高亮显示
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkToc, remarkReadingTime],
    gfm: true,
  }
});