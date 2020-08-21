import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './style.css';

export default function ConfirmationDialog(props) {
	return (
		<div>
			<Dialog
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{props.description}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={props.handleClose}
						className="botao-nao"
						color="primary"
					>
						Não
					</Button>
					<Button onClick={props.handleYes} color="primary" autoFocus>
						Sim
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
