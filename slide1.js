import {bar, miniTooltip} from 'britecharts';
import BaseSlide from './base_slide';

// Source: UN COMTRADE and ITC Trade Map.
const n95Market2017 = [
    {name: 'China', value: 0.43},
    {name: 'United States', value: 0.18},
    {name: 'Germany', value: 0.07},
    {name: 'India', value: 0.03},
    {name: 'Vietnam', value: 0.02},
    {name: 'France', value: 0.02},
    {name: 'Rest of the world', value: 0.24},
].reverse();

export default class Slide1 extends BaseSlide {
    constructor(width, height, container) {
        super(container);

        this.container = container;
        const tooltip = miniTooltip()

        let barChart = bar();

        barChart
            .margin({
                left: 100,
                right: 40,
                top: 20,
                bottom: 5
            })
            .width(width)
            .height(height)
            .isHorizontal(true)
            .hasPercentage(true)
            .enableLabels(true)
            .labelsNumberFormat('.0%')
            .isAnimated(true)
            .on('customMouseOver', tooltip.show)
            .on('customMouseMove', tooltip.update)
            .on('customMouseOut', tooltip.hide);

        container.datum(n95Market2017).call(barChart);
        let tooltipContainer = container.select('.bar-chart .metadata-group');
        tooltipContainer.datum([]).call(tooltip);

        this.prepareDom();
    }

    prepareDom() {
        const self = this;
        this.container.select('button').on('click', () => self.moveLeft())

    }
}