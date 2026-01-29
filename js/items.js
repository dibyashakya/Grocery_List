import { createSingleItem } from "./single-item";

export function createItem(itemsArray) {
  const container = document.createElement("div");
  container.className = "items";
  itemsArray.forEach((items) => {
    const itemElement = createSingleItem(item);
    container.appendChild(itemElement);
  });
  return container;
}
