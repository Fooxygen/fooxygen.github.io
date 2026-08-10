
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
    server: { open: true },
    site: 'https://fooxygen.github.io',
    integrations: [icon()]
});
