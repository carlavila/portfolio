import React from 'react';
import './projects.css'


const Project1 = () => {
	return (

			<div className = "item">
				
						<div className="image-infos">
	    						
							<img className="img"src="./media/reservia.png" alt="Reservia"/>

							<div className="infos">
								<div className="text">
									<h2>Reservia</h2>
									<p className="icons">
										<img className="logo" src="./media/html5.png" alt="Html5"/>
										<img className="logo" src="./media/css3.png" alt="Css3"/>
										<img className="logo" src="./media/git.png" alt="Git"/>
									</p>
									<p className="description">Maquette graphique en <strong>HTML5</strong> et <strong>CSS3</strong></p>
									<button className="custom-btn btn"><a href="https://github.com/carlavila/CarlaVila_2_22122020">Voir le projet</a></button>
								</div>
							</div>	
						</div>	

			</div>


	);
};

export default Project1;