
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import { unified } from '@astrojs/markdown-remark';
import { rehypeGithubAlerts } from 'rehype-github-alerts';

export default defineConfig({
    server: { open: true },
    site: 'https://fooxygen.github.io',
    integrations: [icon()],
    markdown: {
        processor: unified({ rehypePlugins: [rehypeGithubAlerts] }),
    },
});
