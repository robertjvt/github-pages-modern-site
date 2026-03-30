// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
const site = owner ? `https://${owner}.github.io` : 'https://example.github.io';
const isUserOrOrgPagesRepo = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = isUserOrOrgPagesRepo || !repo ? '/' : `/${repo}`;

// https://astro.build/config
export default defineConfig({
    site,
    base,
    integrations: [mdx(), sitemap(), react()],
});