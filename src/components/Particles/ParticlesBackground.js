import React from "react"
import Particles from 'react-particles-js';
import styled from 'styled-components'

import particleStyle from './particleStyle_lines'

const PARTICLES = styled.div`
	width: 100vw;
	height: 45em;

	@media screen and (min-width: 700px) and (max-width: 1300px) {
		height: 75em;
	}
`

const ParticlesBackground = ()=>(
	<PARTICLES>
		<Particles height='100vh' params={particleStyle}/>
	</PARTICLES>
)

export default ParticlesBackground