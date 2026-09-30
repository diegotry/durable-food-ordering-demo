# Broken food-ordering demo

This dependency-free site is intentionally broken for the durable agent workflow. The visible **Place order** button has the ID `place-order`, while `src/order.js` incorrectly searches for `order-button`.

Run `npm run build` to create `dist/`. Run `npm test` to reproduce the bug: the single regression test must fail before the agent patch and pass after the selector is corrected. `SAMPLE_ISSUE.md` contains the GitHub issue text and immutable acceptance contract.
