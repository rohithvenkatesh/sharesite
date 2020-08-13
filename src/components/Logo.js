import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
	0% {opacity: 0}
	100% {opacity: 1}
`
const goleft = keyframes`
	100% {transform: translateX(-2.1em)}
`

const goleftless = keyframes`
	100% {transform: translateX(-1.7em)}
`

const LOGO = styled.div`
	z-index:8;
	height: 1.15m;
	color: #066F6C;
	background: #fdfdfd;
	font-size: 12em;
	border-radius: 200px;
	letter-spacing: 1px;
	animation: 3s ${fadein} 0.2s ease forwards, 2s ${goleft} 1.7s ease forwards;
	opacity: 0;
	transform: translateX(0);

	@media screen and (min-width: 100px) and (max-width: 700px) { 
		animation: 2s ${fadein} 0.2s ease forwards;
		font-size: 7em;
	}

	@media screen and (min-width: 701px) and (max-width: 1100px) { 
		animation: 2s ${fadein} 0.2s ease forwards;
		font-size: 10em;
	}

	@media screen and (min-width: 1101px) and (max-width: 1300px) { 
		animation: 2s ${fadein} 0.2s ease forwards;
		font-size: 11em;
	}

	@media screen and (min-width: 1301px) and (max-width: 1500px) { 
		animation: 3s ${fadein} 0.2s ease forwards, 2s ${goleftless} 1.7s ease forwards;
		font-size: 11em;
  }
`

const Logo = () => (
	<LOGO>Share.</LOGO>
)

export default Logo