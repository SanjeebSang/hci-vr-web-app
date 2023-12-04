import React from 'react'
import { Typography } from '@mui/material';
import Button from "@mui/material/Button"
import {Link} from 'react-router-dom'
import UiContainer from './ui-container';


export default function ExperimentWillStart(props) {

	return (
	<UiContainer>
		<Typography variant='title'>Welcome to VR EMG Experiment</Typography>
		<TypographyParagraph text='In this experiment you will perform EMG hand movements as shown in this VR space.' />
		<TypographyParagraph text='You will need to move your hands for 5 seconds for each hand movement shown in display.' />
		<TypographyParagraph text='You will need 5 different movements for 5 reps. You can stop and redo the experiment at any instance.' />
		<TypographyParagraph text='Click the Start button to start the experiment' />
		<div>
			<Link to='/experiment'><Button variant='contained'>Start the Experiment</Button></Link>
		</div>
	</UiContainer>);
}

function TypographyParagraph(props) {

	return (
		<p>
			<Typography variant='body1'>
				{props.text}
			</Typography>
		</p>
	);
}