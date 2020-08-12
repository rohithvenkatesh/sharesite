import React, {useEffect, useState} from 'react'
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
	left: 25%;
	top: 10%;
	align-items: center;
`
const COL = styled.div`
	display: flex;
	flex-direction: column;
	margin: -12em -8em 0 13em;
	justify-content: left;
`
export default ()=>{

	useEffect(()=>{
		const cursor = document.querySelector('.cursor')
		document.addEventListener('mousemove', (e) => {
			cursor.style.left = `${e.pageX}px`
			cursor.style.top = `${e.pageY}px`
		});
		document.addEventListener('mouseleave', () => {
			cursor.style.display = "none"
			console.log("MOUSE LEFT")
		});
		document.addEventListener('mouseenter', () => {
			cursor.style.display = ""
		});
	})

	return (
		<div>
			<ParticlesBackground/>
			<Navbar/>
			<ROW>
				<COL>
					<Logo/>
					<Subtext/>
				</COL>
				<Carousel/>
			</ROW>
			<Cursor/>
		</div>
	)
}