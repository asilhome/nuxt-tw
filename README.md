# Nuxt 3
## Setup
```bash
pnpm install --shamefully-hoist

# Upgrade
```

## Packages
### Tailwind
pnpm add -D @nuxtjs/tailwindcss

```bash
# tailwind.config.js
npx tailwindcss init

# update
pnpm up @nuxtjs/tailwindcss --latest

# Issues
# https://github.com/nuxt-modules/tailwindcss/issues/480
```

```bash
pnpm add -D @tailwindcss/forms
```

### VueUse
```bash
pnpm add -D @vueuse/nuxt @vueuse/core
```

### Heroicons
```bash
pnpm add -D @heroicons/vue
```

## Upgrade

## Development
```bash
pnpm dev

# open default url in browser
pnpm dev -o
```

http://localhost:3000

## Production
### Generate Static
```bash
# .output
pnpm generate
```

### Build
Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Deployment
### Firebase
```bash
# setup
npm install -g firebase-tools
firebase login
```
```bash
# .output/public - public directory. The rest options: N
# .firebaserc, firebase.json added
firebase init hosting
```
```bash
firebase deploy
```

#### SDK
```
pnpm add firebase
```