export default class CarouselArrow {
  public readonly element: HTMLSpanElement;

  constructor(isLeft: boolean) {
    const element = document.createElement("span");
    element.innerText = isLeft ? "<" : ">";
    element.classList.add("carousel-arrow");
    this.element = element;
  }
}
