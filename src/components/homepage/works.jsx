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
								src="./visa.png"
								alt="visa"
								className="work-image"
							/>
							<div className="work-title">Visa</div>
							<div className="work-subtitle">
							Software Engineer - Site Reliability
							</div>
							<div className="work-duration">2024 - 2025</div>
						</div>

						<div className="work">
							<img
								src="./amazon.png"
								alt="amazon"
								className="work-image"
							/>
							<div className="work-title">Amazon</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
