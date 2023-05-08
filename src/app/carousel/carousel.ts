import LeftCarouselArrow from "./left-carousel-arrow";
import RightCarouselArrow from "./right-carousel-arrow";

export default class Carousel {
    private index = 0;
    private images = this.root.querySelectorAll('img');

    constructor(private root: HTMLDivElement) {
        const leftArrow = new LeftCarouselArrow(root);
        root.appendChild(leftArrow.element);
        leftArrow.element.addEventListener('click', () => {
            this.index = this.index === 0 ? this.images.length - 1 : this.index - 1;
            this.renderIndexedImage();
        });

        const rightArrow = new RightCarouselArrow(root);
        root.appendChild(rightArrow.element);
        rightArrow.element.addEventListener('click', () => {
            this.index = this.index === this.images.length - 1 ? 0 : this.index + 1;
            this.renderIndexedImage();
        });

        this.renderIndexedImage();
    }

    renderIndexedImage() {
        this.images.forEach((image, i) => {
            if (i === this.index) {
                image.style.display = 'block';
                return;
            }
            image.style.display = 'none';
        })
    }
}