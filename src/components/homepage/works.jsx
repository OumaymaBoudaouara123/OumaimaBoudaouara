import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
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
					</div>
				}
			/>
		</div>
	);
};

export default Works;
