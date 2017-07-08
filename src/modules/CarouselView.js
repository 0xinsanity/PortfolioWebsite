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
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrevious = this.onClickPrevious.bind(this);
    }

    onClickNext() {
        let current = this.state.current;
        if (current == 2) {
            this.setState({current: 0});
        } else {
            this.setState({current: current+1});
        }
    }

    onClickPrevious() {
        let current = this.state.current;
        if (current == 0) {
            this.setState({current: 2});
        } else {
            this.setState({current: current-1});
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
            nextArrow: <SampleNextArrow onClick={this.onClickNext}/>,
            prevArrow: <SamplePrevArrow onClick={this.onClickPrevious}/>
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

function SampleNextArrow(props) {

    const { className, style, onClick } = props

    return (
        <div
            className={className}
            style={{
                ...style, display: 'block',
                opacity: '.8',
            }}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {

    const { className, style, onClick } = props

    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                opacity: '.8'
            }}
            onClick={onClick}
            onMouseOver={handleHover}
        ></div>
    );
}

function handleHover() {
    /*$(document).ready(function () {
       $('.joker').animate({boxShadow: '0 0 30px #44f'});
    });*/
}