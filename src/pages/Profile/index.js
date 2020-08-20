import React, { useEffect, useState } from 'react';
import './styles.css';
import NaveTitleIcon from '../../assets/nave-title-logo.png';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import api, { getListaNavers } from '../../services/api';
import NaverCard from '../../components/NaverCard/index';
import Grid from '@material-ui/core/Grid';

export default function Profile() {
	const nomeNaver = localStorage.getItem('nomeNaver');
	const [navers, setNavers] = useState([]);
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

	return (
		<>
			<div className="profile-container">
				<header>
					<img src={NaveTitleIcon} alt="Nave" />
					<Link
						onClick={() => handleLogout()}
						className="back-link"
					>
						Sair
					</Link>
				</header>
			</div>
			<div className="navers-panel">
				<div className="navers-panel-row">
					<h1>Navers</h1>
					<div className="navers-panel-button">
						<Button variant="contained" fullWidth={true}>
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
		</>
	);
}
