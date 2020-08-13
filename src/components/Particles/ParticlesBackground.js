import React from "react"
import Particles from 'react-particles-js';
import styled from 'styled-components'

import particleStyle from './particleStyle_lines'

const PARTICLES = styled.div`
	position: absolute;
	z-index: 0;
	width: 100vw;
	height: 100vh;

	@media screen and (orientation:landscape) {
		width: 100vw;
		height: 100vh;
	}
`

const ParticlesBackground = ()=>(
	<PARTICLES>
		<Particles height='100vh' params={particleStyle}/>
	</PARTICLES>
)

export default ParticlesBackground