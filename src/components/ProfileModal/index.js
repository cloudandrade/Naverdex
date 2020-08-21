import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		width: 'fit-content',
	},
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 120,
	},
	formControlLabel: {
		marginTop: theme.spacing(1),
	},
}));

export default function ProfileModal(props) {
	const classes = useStyles();
	const [fullWidth, setFullWidth] = React.useState(true);
	const [maxWidth, setMaxWidth] = React.useState('md');

	const handleMaxWidthChange = (event) => {
		setMaxWidth(event.target.value);
	};

	const handleFullWidthChange = (event) => {
		setFullWidth(event.target.checked);
	};

	return (
		<React.Fragment>
			<Dialog
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="max-width-dialog-title"
			>
				<DialogContent>
					<DialogContentText>
						You can set my maximum width and whether to adapt or not.
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
}
