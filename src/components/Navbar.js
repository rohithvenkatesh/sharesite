import React from "react"
import styled from 'styled-components'

const NAVBAR = styled.nav`
	width: 100vw;
	/* background-color: pink; */
	background-color: transparent;
	position: absolute;
	color: #000;
	padding-top: 30px;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const TITLE = styled.div`
	padding-left: 40px;
	font-size: 2.3em;
	font-weight: 400;
	letter-spacing: 2px;
`

const NAVLIST = styled.div`
	display: flex;
	justify-content: space-between;
`
const NAVBUTTON = styled.a`
	font-size: 1.6em;
	padding-right: 40px;
	text-decoration: none;
	color: inherit;
`


const Navbar = ()=>(
	<NAVBAR>
		<TITLE>/S/</TITLE>
		<NAVLIST>
			<NAVBUTTON href='#'>Categories</NAVBUTTON>
			<NAVBUTTON href='#'>Purpose</NAVBUTTON>
		</NAVLIST>	
	</NAVBAR>
)

export default Navbar