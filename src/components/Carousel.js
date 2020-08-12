import React, { Component } from "react"
import Slider from "react-slick"
import styled, {keyframes} from 'styled-components'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import beach_chairs from '../images/beach_chairs.png'
import beach_cruiser from "../images/beach_cruiser.png"
import canoe from "../images/beach_cruiser.png"
import cooler from "../images/cooler.png"
import drink_dispenser from "../images/drink_dispenser.png"
import jumper_cables2 from "../images/jumper_cables2.png"
import skateboard from "../images/skateboard.png"
import surfboard from "../images/surfboard.png"
import tent from "../images/tent.png"

const images = [beach_chairs, beach_cruiser, canoe, cooler, drink_dispenser, jumper_cables2, skateboard, surfboard, tent].map(image => <img src={image} />)

const fadein = keyframes`
	0% {opacity: 0; visiblity: hidden}
	100% {opacity: 1; visibility: visible}
`
const CAROUSEL = styled.div`
	box-shadow: 1px 1px 20px 30px #ddd;
	opacity: 0.5;
	border-radius: 1000px;
	padding: 0;
	width: 30em;
	animation: 3s ${fadein} ease forwards;
	visibility: hidden;
	animation-delay: 3s;
	background: #ddd;
`


class Carousel extends Component {
	render() {
		const settings = {
			arrows: false,
			infinite: true,
			speed: 500,
			fade: true,
			autoplay: true,
			speed: 1700,
			autoplaySpeed: 100,
		}
		return (
			<CAROUSEL>
				<Slider {...settings}>{images}</Slider>
			</CAROUSEL>
		)
	}
}

export default Carousel
