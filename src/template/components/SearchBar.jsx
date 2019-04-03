import React from 'react';
import SearchImg from '../../img/search.png';

export default (props) => (
	<form className="search-form">
		<input type="text" className="search" placeholder={props.placeholder} />
		<button type="submit" className="btn btn-search">
			<img src={SearchImg} />
		</button>
	</form>
)