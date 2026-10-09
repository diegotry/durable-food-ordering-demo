export function wireOrderButton(document) {
  const button = document.getElementById("place-order");
  if (!button) {
    return false;
  }

  button.addEventListener("click", () => {
    const confirmation = document.getElementById("confirmation");
    confirmation.textContent = "Order received! We'll start cooking now.";
  });

  return true;
}
