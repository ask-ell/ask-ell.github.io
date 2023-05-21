const plannedSessionImageSources = [...Array(6)].map((_, index) => ({
  src: `./images/planned-session-screenshot-${index + 1}.png`,
}));

const takamouvImageSources = [
  {
    src: "./images/takamouv-extention-navigateur-screenshot.png",
  },
];

const chessMemoImageSources = [...Array(4)].map((_, index) => ({
  src: `./images/chess-memo-screenshot-${index + 1}.png`,
}));

const anthemeImageSources = [
  {
    src: "./images/antheme-screenshot.png",
  },
];

const imagesSources = [
  plannedSessionImageSources,
  takamouvImageSources,
  chessMemoImageSources,
  anthemeImageSources,
];
const carousels = document.querySelectorAll("antheme-carousel");
carousels.forEach((carousel, index) => {
  const encryptedImages = antheme.encrypt(imagesSources[index]);
  carousel.setAttribute("images", encryptedImages);
  carousel.onChanges();
});
