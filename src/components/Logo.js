import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
	0% {opacity: 0}
	100% {opacity: 1}
`
const goleft = keyframes`
	100% {transform: translateX(-2.1em)}
`

const LOGO = styled.div`
	z-index:8;
	height: 1.15m;
	color: #066F6C;
	background: #eee;
	font-size: 12em;
	border-radius: 200px;
	letter-spacing: 1px;
	animation: 3s ${fadein} 0s ease, 2s ${goleft} 1.7s ease forwards;
`

const Logo = () => (
	<LOGO>Share.</LOGO>
)

export default Logo