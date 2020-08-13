import React from "react"
import styled from 'styled-components'

const NAVBAR = styled.nav`
	width: 100vw;
	background-color: transparent;
	position: absolute;
	color: #000;
	padding: 30px 0 0 30px;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (min-width: 100px) and (max-width: 700px) {
		padding: 15px 0 0 15px;
		width: 0;
	}
`

const TITLE = styled.div`
	font-size: 2.3em;
	font-weight: 400;
	letter-spacing: 2px;
`

const NAVLIST = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (min-width: 100px) and (max-width: 700px) {
		visibility: hidden;
	}
`
const NAVBUTTON = styled.a`
	font-size: 1.6em;
	padding-right: 50px;
	text-decoration: none;
	color: inherit;
	
	&:hover {
		color: #fff;
		transition: color 0.3s ease;
	}

	@media screen and (min-width: 100px) and (max-width: 700px) {
		padding-right: 0
	}
	
`

const Navbar = ()=>(
	<NAVBAR>
		<TITLE>/S/</TITLE>
		<NAVLIST>
			<NAVBUTTON href='#' className='link'>Categories</NAVBUTTON>
			<NAVBUTTON href='#' className='link'>Purpose</NAVBUTTON>
		</NAVLIST>	
	</NAVBAR>
)

export default Navbar