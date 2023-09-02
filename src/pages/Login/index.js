import React, {useState, useContext} from 'react';
import {Context} from '../../context/';
import {FiArrowRight } from 'react-icons/fi';
import LogoSite from '../../assets/Imagens/logo.png';

import './style.css';

export default function Login() {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	const {logar, loadingAuth} = useContext(Context);

	async function handleSubmit(e){
		e.preventDefault();

		if(email !== '' && senha !== ''){
			await logar(email, senha);
		}
		
		setEmail('');
		setSenha('');
		
	}

	return (
	<div className='containerCenter'>
		<div className='login'>
			<div className='loginHeader'>
				<div className='logoSite'>
					<img src={LogoSite} alt="logo" />
					<h1>Entrar na conta</h1>
				</div>
			</div>

			<div className='loginArea'>
				<form onSubmit={handleSubmit}>
					<input 
					placeholder='exemplo@email.com' 
					maxLength={35} 
					type='email' 
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					/>
					<input 
					placeholder='********' 
					maxLength={35} 
					type='password' 
					required
					value={senha}
					onChange={(e) => setSenha(e.target.value)}
					/>

					<button type='submit' className='botaoEntrar'><FiArrowRight size={20} style={{marginRight: 8}} /> {loadingAuth ? 'Carregando...' : 'Entrar'}</button>
				</form>
			</div>


		</div>
	</div>
);
}