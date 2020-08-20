import React from 'react'
import styled from 'styled-components'

import equipment from '../images/categories/equipment.png'
import household from "../images/categories/household.png"
import leisure from "../images/categories/leisure.png"
import misc from "../images/categories/misc.png"
import more from "../images/categories/more.png"
import tools from "../images/categories/tools.png"


const CATEGORIES = styled.div`
	width: 100%; height: 100%;
	display: grid;
	grid-template-columns: repeat(3,450px);
	grid-template-rows: repeat(2,450px);
	gap: 3em;
	justify-content: center;
	padding: 0;
	margin:0;
	
	@media screen and (min-width: 1201px) and (max-width: 1500px) { 
		grid-template-columns: repeat(3,400px);
		grid-template-rows: repeat(2,400px);
  }

	@media screen and (min-width: 1165px) and (max-width: 1300px) {
		grid-template-columns: repeat(3,350px);
		grid-template-rows: repeat(2,350px);	
  }

	@media screen and (min-width: 0px) and (max-width: 1165px) {
		display: none;
  }
`

const TILE = styled.div`
	/* height:100%;width:100%;
	padding: 0;
	margin: 0; */
`
const images = [equipment, household, leisure, tools, misc, more].map(image => <div><img width='100%' src={image}/></div>)

const Categories = ()=>{
	return(
		<CATEGORIES>
			{images}
		</CATEGORIES>
	)
}

export default Categories