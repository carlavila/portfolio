import React from 'react';
import {DiHtml5, DiSass, DiGit, DiGithubBadge} from 'react-icons/di';
import './projects.css'

const Project2 = () => {
	return (
			<div className = "item">
					<div className="image-infos">
	    					<img className="img" src="../media/ohmyfood.png" alt="Oh my food"/>
	    					
						<div className="infos">
							<div className="text">
								<h2>Oh my food</h2>
								<p className="icons">
									<DiHtml5 className="logo" />
									<DiSass className="logo" />
									<DiGit className="logo" />
									<DiGithubBadge className="logo" />
								</p>
								<p className="description">Utilisation de <strong>Sass</strong> et des <strong>@keyframes</strong></p>
								<button className="custom-btn btn"><a href="https://github.com/carlavila/CarlaVila_3_18032021">Voir le projet</a></button>
							</div>
	    					</div>
					</div>	
			</div>
	);
};

export default Project2;