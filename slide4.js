import {line, miniTooltip} from 'britecharts';
import BaseSlide from './base_slide';

// source: competition tribunal
const clicksSales = {data: [
    {topicName: 'Clicks mask sales', name: 1, date: '2019-11-01', value: 0.834},
    {topicName: 'Clicks mask sales', name: 2, date: '2019-12-01', value: 0.834},
    {topicName: 'Clicks mask sales', name: 3, date: '2020-01-01', value: 0.9556},
    {topicName: 'Clicks mask sales', name: 4, date: '2020-02-01', value: 1.5644},
    {topicName: 'Clicks mask sales', name: 4, date: '2020-03-01', value: 3.4774},
    {topicName: 'Clicks mask sales2', name: 4, date: '2020-03-01', value: 8.4774},
]}


export default class Slide4 extends BaseSlide {
    constructor(width, height, container) {
        super(container);

        this.container = container;
        const tooltip = miniTooltip()

        let lineChart = line();

        lineChart
            .margin({
                left: 100,
                right: 40,
                top: 10,
                bottom: 40
            })
            .width(width)
            .height(height)
            .aspectRatio(0.5)
            .isAnimated(true)
            .tooltipThreshold(600)
            .grid('none')
            .on('customMouseOver', tooltip.show)
            .on('customMouseMove', tooltip.update)
            .on('customMouseOut', tooltip.hide);

        container.datum(clicksSales).call(lineChart);
        let tooltipContainer = container.select('.line-chart .metadata-group');
        tooltipContainer.datum([]).call(tooltip);

        this.prepareDom();
    }

    prepareDom() {
        const self = this;
        this.container.select('button.prev').on('click', () => self.moveRight())
        this.container.select('button.next').on('click', () => self.moveLeft())
    }
}