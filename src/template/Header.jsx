import React, {Component} from 'react';

// Components
import Image from './components/Image.jsx';
import SearchBar from './components/SearchBar.jsx';

// Images
import LogoImg from '../img/logo.png';
import UserImg from '../img/user.png';
import CartImg from '../img/cart.png';
import BrasilImg from '../img/brasil.png';
import EspanhaImg from '../img/espanha.png';
import UkImg from '../img/uk.png';

// Css

import '../styles/general.scss'
import '../styles/header.scss'

export default class Header extends Component {
	render(){
		return (
			<div className="header">
				<div className="container">
					<Image source={LogoImg} customClass="logo" hrefer="#"/>
					
					<SearchBar placeholder="O que está procurando?" />

					<div class="header-right">
						<a href="#" className='account'>
							<Image src={UserImg} />
							<span>Minha conta</span>
						</a>

						<a href="#" className="cart">
							<Image src={CartImg} />
							<span>1</span>
						</a>

						<div className="language">
							<Image source={BrasilImg} hrefer="#"/>
							<Image source={EspanhaImg} hrefer="#"/>
							<Image source={UkImg} hrefer="#"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}