Example to demonstrate workaround for common issues with setting up Vitest for Remix and Vite.

Releveant issues:

- https://github.com/remix-run/remix/issues/7918
- https://github.com/remix-run/remix/issues/8094

References:

- https://github.com/vitest-dev/vitest/issues/1148

Try on stackblitz:

- https://stackblitz.com/~/github.com/hi-ogawa/remix-vite-vitest-example

---

# templates/unstable-vite

⚠️ Remix support for Vite is unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/unstable-vite
```

## Run

Spin up the Vite dev server:

```shellscript
npm run dev
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start
```

[remix-vite-docs]: https://remix.run/docs/en/main/future/vite
