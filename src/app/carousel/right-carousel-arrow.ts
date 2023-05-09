import CarouselArrow from "./carousel-arrow";

export default class RightCarouselArrow extends CarouselArrow {
  constructor(root: HTMLDivElement) {
    super(false);
    const rootRightPaddingValue = window
      .getComputedStyle(root)
      .getPropertyValue("padding-right");
    this.element.style.right = rootRightPaddingValue;
  }
}
