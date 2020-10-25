import {line, miniTooltip} from 'britecharts';
import BaseSlide from './base_slide';

// source: competition tribunal
const treasuryPrices = {data: [
    {topicName: 'Clicks mask sales', name: 1, date: '2019-11-01', value: 0.834},
    {topicName: 'Clicks mask sales', name: 1, date: '2019-12-01', value: 0.834},
    {topicName: 'Clicks mask sales', name: 1, date: '2020-01-01', value: 0.9556},
    {topicName: 'Clicks mask sales', name: 1, date: '2020-02-01', value: 1.5644},
    {topicName: 'Clicks mask sales', name: 1, date: '2020-03-01', value: 3.4774},
    {topicName: 'Clicks mask sales', name: 1, date: '2020-08-01', value: 8},
    {topicName: 'Treasury - Type 1 Surgical Masks', name: 2, date: '2020-04-01', value: 10.22},
    {topicName: 'Treasury - Type 1 Surgical Masks', name: 2, date: '2020-05-01', value: 10.22},
    {topicName: 'Treasury - Type 1 Surgical Masks', name: 2, date: '2020-06-01', value: 15},
    {topicName: 'Treasury - Type 1 Surgical Masks', name: 2, date: '2020-07-01', value: 11.50},
    {topicName: 'Treasury - Type 2 Surgical Masks', name: 3, date: '2020-04-01', value: 12.48},
    {topicName: 'Treasury - Type 2 Surgical Masks', name: 3, date: '2020-05-01', value: 12.48},
    {topicName: 'Treasury - Type 2 Surgical Masks', name: 3, date: '2020-06-01', value: 18},
    {topicName: 'Treasury - Type 2 Surgical Masks', name: 3, date: '2020-07-01', value: 15.50},
    {topicName: 'Treasury - N95 Mask', name: 4, date: '2020-04-01', value: 59.73 },
    {topicName: 'Treasury - N95 Mask', name: 4, date: '2020-05-01', value: 37.8 },
    {topicName: 'Treasury - N95 Mask', name: 4, date: '2020-06-01', value: 37.8 },
    {topicName: 'Treasury - N95 Mask', name: 4, date: '2020-07-01', value: 42.9 },
    {topicName: 'Treasury - 3-layer cloth mask', name: 5, date: '2020-04-01', value: 25 },
    {topicName: 'Treasury - 3-layer cloth mask', name: 5, date: '2020-05-01', value: 25 },
    {topicName: 'Treasury - 3-layer cloth mask', name: 5, date: '2020-06-01', value: 25 },
    {topicName: 'Treasury - 3-layer cloth mask', name: 5, date: '2020-07-01', value: 25 },
]}


export default class Slide5 extends BaseSlide {
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

        container.datum(treasuryPrices).call(lineChart);
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