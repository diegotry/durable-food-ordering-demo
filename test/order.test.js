import assert from "node:assert/strict";
import test from "node:test";

import { wireOrderButton } from "../src/order.js";

test("Place order registers one click handler and confirms the order", () => {
  const listeners = new Map();
  const button = {
    addEventListener(event, handler) {
      listeners.set(event, handler);
    },
  };
  const confirmation = { textContent: "" };
  const document = {
    getElementById(id) {
      if (id === "place-order") return button;
      if (id === "confirmation") return confirmation;
      return null;
    },
  };

  assert.equal(wireOrderButton(document), true);
  assert.equal(listeners.size, 1);
  listeners.get("click")();
  assert.equal(confirmation.textContent, "Order received! We'll start cooking now.");
});
