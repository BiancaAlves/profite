import React, {Component} from 'react';

export default class Image extends Component {
	
	constructor(props){
		super(props);

		// Adicionando customClass apenas se ela foi definida via props
		this.customClass = (this.props.customClass) ? ' ' + this.props.customClass : '';
		// Encapsulando imagem com tag a se foi passada a propriedade hrefer
		this.linkImage = (this.props.hrefer) ? true : false;
	}

	render(){
		if(this.linkImage){
			return (
				<figure className={'img-wrap' + this.customClass}>
					<a href={this.props.hrefer}>
						<img src={this.props.source} />
					</a>
				</figure>
			)	
		} else {
			return (
				<figure className={'img-wrap' + this.customClass}>
					<img src={this.props.src} />
				</figure>
			)	
		}
		
	}
}