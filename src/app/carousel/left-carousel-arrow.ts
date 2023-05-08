import CarouselArrow from "./carousel-arrow";

export default class LeftCarouselArrow extends CarouselArrow {
    constructor(root: HTMLDivElement) {
        super(true);
        const rootLeftPaddingValue = window.getComputedStyle(root).getPropertyValue('padding-left');
        this.element.style.left = rootLeftPaddingValue;
    }
}