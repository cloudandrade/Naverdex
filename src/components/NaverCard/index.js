import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImgMock from '../../assets/juliano_mock.png';
import './style.css';
import { Create as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		width: '281px',
		height: '376px',
		borderRadius: 0,
	},
});

export default function NaverCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className="card-container">
				<div className="card-image-content">
					<img
						src={props.image || ImgMock}
						alt="Nave"
						className="card-image"
						onClick={props.handleImageClick}
					/>
				</div>
				<div className="info-area">
					<Typography className="nome-area">{props.nome}</Typography>
					<Typography className="prof-area">{props.profissao}</Typography>
				</div>
				<div className="buttons-area">
					<Link onClick={props.handleDelete}>
						<DeleteIcon className="icons" />
					</Link>
					<Link onClick={props.handleEdit}>
						<EditIcon className="icons" />
					</Link>
				</div>
			</div>
		</Card>
	);
}
