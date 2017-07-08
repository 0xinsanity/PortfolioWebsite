import React from 'react';
import Slider from 'react-slick';
import '../help/slick-theme.css';
import '../help/slick.css';
import joker from '../img/backgroundjoker.png';
import cokecan from '../img/CokeCanFormatted.png';
//import animate from '../help/jquery.animate-shadow';
import $ from 'jquery';

let imagesName = [
    "Polygonal Joker",
    "Corrupted Coke Can",
    "Penis",
    "Vagina"
];

export class CarouselView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: 0};
        this.prevHandler = this.prevHandler.bind(this);
        this.nextHandler = this.nextHandler.bind(this);
    }

    prevHandler(e) {
        let current = this.state.current;
        if (current == 0) {
            this.setState({current: 2});
        } else {
            this.setState({current: current-1});
        }
        //this.slickPrevious();
        alert(current);
    }

    nextHandler(e) {
        let current = this.state.current;
        if (current == 2) {
            this.setState({current: 0});
        } else {
            this.setState({current: current+1});
        }
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: true,
            arrows: true,
            center_padding: true,
            draggable: false,
            prevArrow: <SamplePrevArrow handler={this.prevHandler}/>
        };
        return (
            <div>
            <Slider {...settings}>
                <div><img className='image' src={joker} alt={imagesName[0]} width="100%" /></div>
                <div><img src={cokecan} alt={imagesName[1]} className="image" width="100%" /></div>
                <div><img alt={imagesName[2]} /></div>
                <div><img alt={imagesName[3]} /></div>
            </Slider>
            <div className="information">
                <h1 className="artName">{imagesName[this.state.current]}</h1>
            </div>
            </div>
        );

    }
}


class SamplePrevArrow extends React.Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        this.props.onClick;
        this.props.handler;
    }

    render() {
        return (
        <div
            className={this.props.className}
            style={{
                ...this.props.style, display: 'block',
                opacity: '.8',
            }}
            onClick={this.click}
        ></div>
    );
    }
}


function handleHover() {
    /*$(document).ready(function () {
       $('.joker').animate({boxShadow: '0 0 30px #44f'});
    });*/
}