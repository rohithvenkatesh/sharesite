import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import '../styles.sass'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ParticlesBackground from '../components/Particles/ParticlesBackground'
import Logo from '../components/Logo'
import Subtext from '../components/Subtext'
import Cursor from '../components/Cursor'

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
	
	@media screen and (min-width: 701px) and (max-width: 1100px) {
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
export default () => {

	useEffect(() => {
		const links = document.querySelectorAll(".link");
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
		<div style={{ display: 'flex' }}>
			<ParticlesBackground />
			<Navbar />
			<ROW>
				<COL>
					<Logo />
					<Subtext />
				</COL>
				<Carousel />
			</ROW>
			<Cursor />
		</div>
	)
}