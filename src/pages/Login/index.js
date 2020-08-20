import React, { useState } from 'react';
import clsx from 'clsx';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { Grid, TextField } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NaveTitleIcon from '../../assets/nave-title-logo.png';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
	root: {
		height: '38px',
		'& label.Mui-focused': {
			color: 'black',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'black !important',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'black',
			},
			'&:hover fieldset': {
				borderColor: 'black',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'black',
			},
		},
	},
})(OutlinedInput);

export default function Login() {
	const history = useHistory();

	function handleLogin() {
		history.push('/profile');
	}

	return (
		<>
			<div className="container-login">
				<div className="login-box">
					<div className="nave-icon">
						<img
							src={NaveTitleIcon}
							alt="Nave"
							width="235"
							height="60"
						/>
					</div>
					<div className="email-area">
						<Typography variant="subtitle2">
							E-mail
						</Typography>
						<CssTextField
							variant="outlined"
							fullWidth={true}
							placeholder="E-mail"
						/>
					</div>
					<div className="senha-area">
						<Typography variant="subtitle2">
							Senha
						</Typography>
						<CssTextField
							variant="outlined"
							fullWidth={true}
							placeholder="Senha"
						/>
					</div>
					<div className="botao-area">
						<Button
							variant="contained"
							fullWidth={true}
							onClick={() => handleLogin()}
						>
							Entrar
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
