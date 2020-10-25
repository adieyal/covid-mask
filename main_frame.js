import d3 from './d3';

export class MainFrame {
    constructor(container, dimensions) {
        this._container = container;
        this.margin = {top: 10, right: 40, bottom: 30, left: 30};
        this.width = dimensions.width - this.margin.left - this.margin.right,
        this.height = dimensions.height - this.margin.top - this.margin.bottom;

        this.prepareDOM();
    }

    prepareDOM() {
        const svg = this._container.append("svg")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

// X scale and Axis

        const width = svg.attr("width") - this.margin;
        const height = svg.attr("height") - this.margin;
        this.mainGroup = svg;
    }

    get container() {
        return this.mainGroup;
    }
}