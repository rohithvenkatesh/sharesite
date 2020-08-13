import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
	0% {opacity: 0}
	100% {opacity: 1; visibility: visible}
`

const spin = keyframes`
  0% { content:"Boats"; }
  10% { content:"Vaccums"; }
  20% { content:"Surfboards"; }
  30% { content:"Coffee Makers"; }
  40% { content:"Tables"; }
  50% { content: "Kayaks"; }
  60% { content: "Couches"; }
  70% { content: "Lightbulbs"; }
  80% { content: "Bicycles"; }
  90% { content: "Chargers"; }
	100% { content: "Coolers"; }
`

const change = keyframes`
  0%, 12.66%, 100% {transform:translate3d(0,0,0); content: 'a'}
  16.66%, 29.32% {transform:translate3d(0,-25%,0); content: 'b'}
  33.32%,45.98% {transform:translate3d(0,-50%,0); content: 'c'}
  49.98%,62.64% {transform:translate3d(0,-75%,0); content: 'd'}
  66.64%,79.3% {transform:translate3d(0,-50%,0); content: 'e'}
  83.3%,95.96% {transform:translate3d(0,-25%,0); content: 'f'}
`

const SUBTEXT = styled.div`
	z-index: 9;
	margin-left: -2em; margin-top: -0.7em;
	font-size: 3em;
	font-weight: 300;
	border-radius: 100px;
	width: 7em;
	height: 0;
	visibility: hidden;

	&:after {
		content:"fuga";
		background: #fdfdfd;
		padding: 0.2em;
		border-radius: 50px;
		animation: 2s ${fadein}, 15s ${spin} ease-in-out infinite;
		animation-delay: 4s, 6s;
		animation-fill-mode: forwards, both;
	}
	
	@media screen and (min-width: 100px) and (max-width: 700px) {
		margin-left: 0em; margin-top: -0.3em;
		width: 8em;
		font-size: 2em;

		&:after {
			animation-delay: 2s, 3s
		}
	}
	
	@media screen and (min-width: 700px) and (max-width: 1300px) {
		margin-left: 0em; margin-top: -0.3em;
		width: 8em;
		font-size: 3em;

		&:after {
			animation-delay: 2s, 3s
		}
	}

	@media screen and (min-width: 1301px) and (max-width: 1500px) {
		margin-left: -1em; margin-top: -0.65em;
		width: 8em;
		font-size: 3em;
	}
`


const Subtext = () => (
	<SUBTEXT></SUBTEXT>
)
export default Subtext