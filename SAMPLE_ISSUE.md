# Sample GitHub issue

## Title

Place order button does nothing

## Body

When I open the QuickBite page and select **Place order**, nothing changes and no confirmation appears.

### Reproduction

1. Build the site with `npm run build`.
2. Open `dist/index.html` through a local HTTP server.
3. Select **Place order**.

### Expected

The page shows `Order received! We'll start cooking now.` and registers only one click handler.

### Actual

The button does nothing.

### Automated evidence

`npm test` fails at `test/order.test.js` because `wireOrderButton(document)` returns `false`.

## Fix acceptance contract

A valid agent-generated fix must make `npm test` pass without weakening or deleting the assertion, keep the button ID in `index.html` unchanged, preserve accessible status announcements, and avoid unrelated changes.
