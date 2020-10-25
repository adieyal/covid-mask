import slides from './slides';
import {MainFrame} from './main_frame';
import d3 from './d3';


function start() {
    const width = 800;
    const height = 500;
    const container = d3.select('#slide1-container');
    let slide1 = new slides.Slide1(width, height, d3.select('#slide1-container'));
    let slide2 = new slides.Slide2(width, height, d3.select('#slide2-container'));
    let slide3 = new slides.Slide3(width, height, d3.select('#slide3-container'));
    let slide4 = new slides.Slide4(width, height, d3.select('#slide4-container'));
    let slide5 = new slides.Slide5(width, height, d3.select('#slide5-container'));


}

start();