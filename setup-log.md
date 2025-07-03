## 📦 Dependencies Installed

- Astro (`npm install astro`)
- Tailwind CSS (`npm install -D tailwindcss`)
- Preact Integration (`npm install @astrojs/preact preact`)
- Markdown Content Utilities (`astro:content`)
- Astro config updated to include integrations and content collection
- script to install with helpful echo: scripts/setup-dev.sh
% npm list
 /Users/mommy/Documents/_loves-me-App/gitted_resume
├── @astrojs/markdown-remark@6.3.2
├── @astrojs/preact@4.1.0
├── @tailwindcss/cli@4.1.11
├── @tailwindcss/postcss@4.1.11
├── @tailwindcss/typography@0.5.16
├── @types/react@19.1.8
├── astro@5.10.2
├── autoprefixer@10.4.21
├── postcss@8.5.6
├── preact@10.26.9
├── tailwindcss@4.1.11
└── zod@3.25.69
package.json locks the versions required. But just make sure to:
Always commit your package.json and package-lock.json files
Don’t delete or regenerate node_modules without these files—they’re your blueprint
Create version summary:
  npm list --depth=0 > dependencies.txt
or add directly to setup-log.md:
  npx npm-remote-ls $(jq -r .name package.json) -d >> setup-log.md

## 
