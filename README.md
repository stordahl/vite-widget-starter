# vite-widget-starter

Bootstrap a Third Party JavaScript Widget with Vite + Svelte + Typescript

## Template App

This template comes with an example Hacker News that a client would embed via a script tag to display the top three Hacker News stories in their application. Here's what the client side implementation of this example widget works.

```html
<div id="widget"></div>

<script type="module" src="/path/to/HNWidgetDev.js"></script>
<script type="module">
  const widget = new HNWidget("widget"); // pass either the div's ID or a reference to the HTMLElement
      
  widget.start(); // fetches data and renders the UI
</script>
```

## Getting Started

Use [tiged](https://github.com/tiged/tiged) to clone the project to your local machine without the git
history. 

```shell
npx tiged git@github.com:stordahl/vite-widget-starter
cd vite-widget-starter
npm install # yarn | pnpm install
```

Alternatively, click the "use this template" button in Github to clone
the project to your Github profile.

## Development

```shell
npm run dev 
# yarn dev
# pnpm run dev
```

## Tests

This template comes with some basic tests using Vitest. To run them...

```shell
npm run test
# yarn test
# pnpm run test
```
