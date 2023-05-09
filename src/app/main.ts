import Carousel from "./carousel";

function main() {
  const carousels = document.querySelectorAll<HTMLDivElement>(".carousel");
  carousels.forEach((carousel) => {
    new Carousel(carousel);
  });
}

main();
