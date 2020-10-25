export default class BaseSlide {
    constructor(container) {
        this.container = container;
    }

    setPrevSlide(slide) {
        this.prevSlide = slide;
    }

    setNextSlide(slide) {
        this.nextSlide = slide;
    }

    moveLeft() {
        this.container.transition()
            .duration(500)
            .style("margin-left", '-1000px')
            .style('opacity', 0)

        if (this.nextSlide != null) {
            this.nextSlide.moveCenter();
        }
    }

    moveRight() {
        this.container.transition()
           .duration(500)
           .style("margin-left", '1000px')
           .style('opacity', 0)

        if (this.prevSlide != null) {
            this.prevSlide.moveCenter();
        }
    }

    moveCenter() {
        this.container.transition().duration(500).style("margin-left", '0').style('opacity', 1)
    }
}