import React from 'react'
import styled from 'styled-components'

const PURPOSE = styled.div`
	width: 100%; height: 100%;
	color: #111;
`
const TITLE = styled.div`
	font-size: 6em;
	text-align: center;
	padding: 0.5em 0 0.1em 0;
`

const DIVIDER = styled.div`
	width: 20%;
	margin-left: 50%;
	border-bottom: 1em solid #111;
	margin-bottom: 4em;
`

const BODY = styled.div`
	width: 50%;
	font-size: 1.7em;
	text-align: justify;
	margin: auto;
	line-height: 1.3em;

	@media screen and (max-width: 1480px){ width: 60% }
	@media screen and (max-width: 1280px){ font-size: 1.5em }
	@media screen and (max-width: 950px){ width: 70%; }
	@media screen and (max-width: 800px){ line-height: 1.2em; font-size: 1.4em }
	@media screen and (max-width: 675px){ width: 80%; font-size: 1.3em; }
	@media screen and (max-width: 590px){ font-size: 1.2em; }
	@media screen and (max-width: 500px){ width: 85%; font-size: 1.15em }
	@media screen and (max-width: 425px){ width: 90%; }
	@media screen and (max-width: 400px){ font-size: 1.1em; }
`

const Purpose = () => {
	return (
		<PURPOSE>
			<TITLE>What is Share?</TITLE>
			<DIVIDER/>
			<BODY>
				Share is a mobile based platform for renting tools/equipment/ leisure items (really anything you can think of) from members within your community.
				The idea is being able to find whatever you need around the corner, at the right price, and the ability to return it once you are done using it.
				No one would ever lend out their belongings to a complete stranger; but what if you facilitated a safe online interaction with verified reviews and ratings then incorporated secure payments into the mix.
				We have seen first-hand how successful this model is.
				<br></br><br></br>
				Communities rejoice!
				<br></br><br></br>
				We can now find a spare tennis racket when our friend comes to visit, folding chairs when we are entertaining, and a ladder to finally clean out the gutters (pure joy).
				And the best part, we don’t even have to find a place to store it all!
				Renters and item owners negotiate a set rental duration, one hour item pick-up window and a daily rate so every transaction is smooth and no box is ever left unchecked.
				<br></br><br></br>
				Conversely, Item owners can now make money on all the items collecting dust in their garage.
				Who would have thought that leaf blower sitting in the shed could actually make money? The entire concept of ownership is transforming.
				Sunk costs are now revenue generators and unused resources can be fully utilized within a village. A typical shovel can pay for itself after about 3 rentals (Not bad).
				<br></br><br></br>
				So get out there, meet your neighbors, try a new hobby, no more making excuses for that side project you’ve been putting off. The weekend is here and the world is our oyster.
			</BODY>
		</PURPOSE>
	)
};

export default Purpose