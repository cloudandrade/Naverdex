import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		width: 281,
		height: 400,
	},
});

export default function NaverCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<Typography gutterBottom variant="h5" component="h2">
				Imagem
			</Typography>
			<Typography gutterBottom variant="h5" component="h2">
				Nome
			</Typography>
			<Typography
				variant="body2"
				color="textSecondary"
				component="p"
			>
				Função
			</Typography>
			<Button size="small" color="primary">
				Deletar
			</Button>
			<Button size="small" color="primary">
				Editar
			</Button>
		</Card>
	);
}
