import { drawDropdown } from "./dropdown";
import { drawImageCarousel } from "./imageCarousel";

export const displayController = (function () {
  const mainArea = document.querySelector("#main-area");

  const divForDropdown = document.createElement("div");
  const divForCarousel = document.createElement("div");

  drawDropdown(divForDropdown);
  drawImageCarousel(divForCarousel);

  mainArea.append(divForDropdown, divForCarousel);
})();
