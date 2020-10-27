import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import '../styles.sass'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Logo from '../components/Logo'
import Subtext from '../components/Subtext'
import Cursor from '../components/Cursor'
import Categories from '../components/Categories'
import ParticlesBackground from '../components/Particles/ParticlesBackground'
import Purpose from '../components/Purpose'

const ROW = styled.div`
	display: flex;
	position: absolute;
	left: 50%;
	margin-right: -50%;	
	transform: translate(-40%, 0%);
	top: 10%;
	align-items: center;

	@media screen and (min-width: 100px) and (max-width: 700px) {
		flex-direction: column;
		top: 600px;
    left: 50%;
    margin-right: -50%;
		transform: translate(-50%, -50%);
	}
	
	@media screen and (min-width: 700px) and (max-width: 1100px) {
		top: 800px;
		flex-direction: column;
    left: 50%;
    margin-right: -50%;
		transform: translate(-50%, -50%);
	}
	
	@media screen and (min-width: 1101px) and (max-width: 1300px) {
		top: 850px;
		flex-direction: column;
    left: 50%;
    margin-right: -50%;
		transform: translate(-50%, -50%);
  }
`
const COL = styled.div`
	display: flex;
	flex-direction: column;
	margin: -16em -8em 0 13em;
	justify-content: left;

	@media screen and (min-width: 100px) and (max-width: 1300px) {
		margin: 0px;
  }
`

const MAIN = styled.section`
	padding: 0; margin: 0;
	position: relative;
`

const CAT = styled.section`
	padding: 0; margin: 0; margin-top: 400px;
	padding-top: 2rem;
	background: black;
	height: 70em;
	position: static;

	@media screen and (min-width: 1201px) and (max-width: 1500px) { 
		height: 65em;
  }

	@media screen and (min-width: 1165px) and (max-width: 1300px) {
		height: 60em;
  }
`
const DIVIDER = styled.div`
	width: 15%;
	margin-left: 40%;
	border-bottom: 0.5em solid #444;
	margin-bottom: 2.0em;
`

const CATEGORIESTITLE = styled.div`
	color: white;
	font-size: 3rem;
	/* padding-left: 6rem; */
	padding-bottom: 0.3em;
	text-align: center;
`

const PURPOSE = styled.section`
	padding: 0; margin: 0;
	padding-bottom: 2em;
	background: #eee;
	position: static;
	display: inline-block;
`

export default () => {

	useEffect(() => {
		const links = document.querySelectorAll("a");
		const cursor = document.querySelector('.cursor')

		const handleMouseEnter = () => {
			cursor.style.width = '6em'
			cursor.style.height = '6em'
			cursor.style.zIndex = '0'
			cursor.style.opacity = '0.9'
		};
		const handleMouseLeave = () => {
			cursor.style.width = '1.3em'
			cursor.style.height = '1.3em'
			cursor.style.opacity = '1'
			cursor.style.zIndex = '999'
		};
		links.forEach(link => {
			link.addEventListener("mouseenter", handleMouseEnter);
			link.addEventListener("mouseleave", handleMouseLeave);
		});

		document.addEventListener('mousemove', (e) => {
			cursor.style.left = `${e.pageX}px`
			cursor.style.top = `${e.pageY}px`
		});
	})

	return (
		<div>
			<Cursor />
			<Navbar />

			<MAIN id='top'>
				<ParticlesBackground />
				<ROW>
					<COL>
						<Logo />
						<Subtext />
					</COL>
					<Carousel />
				</ROW>
			</MAIN>

			<CAT id='categories'>
				<CATEGORIESTITLE>Everything We Offer</CATEGORIESTITLE>
				<DIVIDER/>
				<Categories/>
			</CAT>

			<PURPOSE>
				<Purpose/>
			</PURPOSE>

		</div>
	)
}