import React from 'react'
import { Typography } from '@mui/material';
import UiContainer from './ui-container';


export default function ExperimentHasFinished(props) {

	return (
	<UiContainer>
		<Typography variant='title'>End of Experiment</Typography>
		<Typography variant='body1'>
			The experiment has just finished. You can now take off your headset.
			Thank you for participating in the experiment.
		</Typography>
	</UiContainer>);
}