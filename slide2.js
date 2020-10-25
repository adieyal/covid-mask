import {line, miniTooltip} from 'britecharts';
import BaseSlide from './base_slide';

// Source: SARS
const saImports = {data: [
    {topicName: 'Mask imports', name: 1, date: '2020-02-01', value: 27276851},
    {topicName: 'Mask imports', name: 2, date: '2020-03-01', value: 36750868},
    {topicName: 'Mask imports', name: 3, date: '2020-04-01', value: 1145784121},
    {topicName: 'Mask imports', name: 4, date: '2020-05-01', value: 1188371893},
    {topicName: 'Mask imports', name: 5, date: '2020-06-01', value: 115317191},
    {topicName: 'Mask imports', name: 6, date: '2020-07-01', value: 72107667},
    {topicName: 'Mask imports', name: 7, date: '2020-08-01', value: 87481383},
]}

export default class Slide2 extends BaseSlide {
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

        container.datum(saImports).call(lineChart);
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