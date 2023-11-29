import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
		<div className="card-container">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./flydev.png"
								alt="flydev"
								className="work-image"
							/>
							<div className="work-title">Flydev</div>
							<div className="work-subtitle">
								Full-stack developer
							</div>
							<div className="work-duration">Summer 2022 And Summer 2023</div>
						</div>

						<div className="work">
							<img
								src="./newtechit.png"
								alt="newtechit"
								className="work-image"
							/>
							<div className="work-title">NewTechIt</div>
							<div className="work-subtitle">
								SharePoint Developer
							</div>
							<div className="work-duration">Summer 2021</div>
						</div>
						<div className="work">
							<img
								src="./soteca.png"
								alt="soteca"
								className="work-image"
							/>
							<div className="work-title">Soteca</div>
							<div className="work-subtitle">
							administrative intern
							</div>
							<div className="work-duration"> 2020</div>
						</div>
					</div>
				}
			/>

			{/* Ajoutez votre élément de texte ici */}
			<div className="works-body-text">
			<div className="work"></div>
			<Card
				icon={faBriefcase}
				title="Courses"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./python.png"
								alt="flydev"
								className="work-image"
							/>
							<div className="work-title">sololearn</div>
							<div className="work-subtitle">
							python core
							</div>
							<div className="work-duration"> 2022 </div>
						</div>

						<div className="work">
							<img
								src="./ieee.png"
								alt="ieee"
								className="work-image"
							/>
							<div className="work-title">IEEE</div>
							<div className="work-subtitle">
							Certificate of Participation in IEEEXtreme 16.0 <br></br>Programming

							</div>
							<div className="work-duration">2022</div>
						</div>
						<div className="work">
							<img
								src="./coursera.png"
								alt="coursera"
								className="work-image"
							/>
							<div className="work-title">Coursera </div>
							<div className="work-subtitle">
							Command Line Basics in Linux

							</div>
							<div className="work-duration">2022</div>
						</div>
						<div className="work">
							<img
								src="./scrum.png"
								alt="scrum"
								className="work-image"
							/>
							<div className="work-title">SCRUMstudy </div>
							<div className="work-subtitle">
							Scrum Fundamentals Certified
							</div>
							<div className="work-duration">2023</div>
						</div>
					</div>
					
				}
			/>
				
			</div>
		</div>
		</div>
	);
};

export default Works;
