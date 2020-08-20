import React, { useEffect, useState } from 'react';
import './styles.css';
import NaveTitleIcon from '../../assets/nave-title-logo.png';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import api, { getListaNavers } from '../../services/api';
import NaverCard from '../../components/NaverCard/index';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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

export default function Profile() {
	const nomeNaver = localStorage.getItem('nomeNaver');
	const [navers, setNavers] = useState([]);
	const [pageMode, setPageMode] = useState('exibir');
	const history = useHistory();

	useEffect(() => {
		getListaNavers()
			.then((response) => {
				setNavers(response.data.payload);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	async function handleLogout() {
		localStorage.clear();
		history.push('/');
	}

	function handleSalvarNaver() {
		handleChangeSection();
	}

	function handleChangeSection() {
		if (pageMode === 'exibir') {
			setPageMode('adicionar');
		} else {
			setPageMode('exibir');
		}
	}

	return (
		<div>
			<div className="profile-container">
				<header>
					<img src={NaveTitleIcon} alt="Nave" />
					<Link onClick={() => handleLogout()} className="back-link">
						Sair
					</Link>
				</header>
			</div>
			{pageMode === 'exibir' ? (
				<div>
					<div className="navers-panel">
						<div className="navers-panel-row">
							<h1>Navers</h1>
							<div className="navers-panel-button">
								<Button
									variant="contained"
									fullWidth={true}
									onClick={() => handleChangeSection()}
								>
									Adicionar Naver
								</Button>
							</div>
						</div>
					</div>
					<div className="navers-container">
						<Grid container justify="center" spacing={5}>
							<Grid item md={3}>
								<NaverCard />
							</Grid>
							<Grid item md={3}>
								<NaverCard />
							</Grid>
							<Grid item md={3}>
								<NaverCard />
							</Grid>
							<Grid item md={3}>
								<NaverCard />
							</Grid>
						</Grid>

						{/* <ul>
					{navers.length ? (
						navers.map((naver) => (
							<li key={naver.id}>
								<strong>Paciente:</strong>
								<p>{naver.nome}</p>

								<strong>Email:</strong>
								<p>{naver.email}</p>

								<strong>idade</strong>
								<p>{naver.idade}</p>
							</li>
						))
					) : (
						<h3>
							Não conseguimos encontrar nenhum Naver
						</h3>
					)}
				</ul> */}
					</div>
				</div>
			) : (
				<div className="add-container">
					<div className="add-box">
						<Grid container>
							<Grid item>
								<Link onClick={() => handleChangeSection()}>
									<ArrowBackIosIcon className="add-back-icon" />
								</Link>
							</Grid>
							<Grid item>
								<Typography className="add-title">
									Adicionar Naver
								</Typography>
							</Grid>
						</Grid>
						{/* primeira linha do adicionar naver */}
						<Grid container>
							<Grid item>
								<div className="add-line1">
									<Typography variant="subtitle2">Nome</Typography>
									<CssTextField fullWidth={true} placeholder="Nome" />
								</div>
							</Grid>
							<Grid item>
								<div className="add-line1">
									<Typography variant="subtitle2">Cargo</Typography>
									<CssTextField fullWidth={true} placeholder="Cargo" />
								</div>
							</Grid>
						</Grid>
						{/* segunda linha do adicionar naver */}
						<Grid container>
							<Grid item>
								<div className="add-line1">
									<Typography variant="subtitle2">Idade</Typography>
									<CssTextField fullWidth={true} placeholder="Idade" />
								</div>
							</Grid>
							<Grid item>
								<div className="add-line1">
									<Typography variant="subtitle2">
										Tempo de empresa
									</Typography>
									<CssTextField
										fullWidth={true}
										placeholder="Tempo de empresa"
									/>
								</div>
							</Grid>
						</Grid>
						{/* terceira linha do adicionar naver */}
						<Grid container>
							<Grid item>
								<div className="add-line1">
									<Typography variant="subtitle2">
										Projetos que participou
									</Typography>
									<CssTextField
										fullWidth={true}
										placeholder="Projetos que participou"
									/>
								</div>
							</Grid>
							<Grid item>
								<div className="add-line1">
									<Typography variant="subtitle2">
										URL da foto do Naver
									</Typography>
									<CssTextField fullWidth={true} placeholder="Cargo" />
								</div>
							</Grid>
						</Grid>
						<Grid container justify="flex-end">
							<Grid item>
								<Button
									className="add-button"
									variant="contained"
									fullWidth={true}
									onClick={() => handleSalvarNaver()}
								>
									Salvar
								</Button>
							</Grid>
						</Grid>
					</div>
				</div>
			)}
		</div>
	);
}
