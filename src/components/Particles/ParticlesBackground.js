import React from "react"
import Particles from 'react-particles-js';
import styled from 'styled-components'

import particleStyle from './particleStyle_lines'

const PARTICLES = styled.div`
	position: absolute;
	z-index: 0;
	width: 100%
`

const ParticlesBackground = ()=>(
	<PARTICLES>
		<Particles height={window.outerHeight} params={particleStyle}/>
	</PARTICLES>
)

export default ParticlesBackground