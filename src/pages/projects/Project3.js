import React from 'react';
import './projects.css'

const Project3 = () => {
	return (
			<div className = "item">
					<div className="image-infos">
	    					<img className="img" src="../media/lachouetteagence.png" alt="La chouette agence"/>
	    					
						<div className="infos">
							<div className="text">
								<h2>La chouette agence</h2>
								<p className="icons">
									<img className="logo" src="./media/google-lighthouse.png" alt="Lighthouse"/>
									<img className="logo" src="./media/html5.png" alt="Html5"/>
									<img className="logo" src="./media/css3.png" alt="Css3"/>
									<img className="logo" src="./media/git.png" alt="Git"/>
								
								</p>
								<p className="description">Optimisation du <strong>référencement SEO</strong></p>
								<button className="custom-btn btn"><a href="https://github.com/carlavila/p4_vila_carla">Voir le projet</a></button>
							</div>
						</div>
					</div>
			</div>
	);
};

export default Project3;