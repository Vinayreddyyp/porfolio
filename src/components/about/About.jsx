import "./about.css";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import ME from "../../assets/me-about.png";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Experience</h5>
							<small>6+ Years of Working</small>
						</article>

						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Clients</h5>
							<small>4+ Worldwide</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>6+ completed</small>
						</article>
					</div>
					<p>
						Seasoned and Independent Front End Developer with 6 plus years of
						experience in blending the art of design with skill of programming
						to deliver an immersive and engaging user experience through
						efficient website development,proactive feature optimization,and
						relentless debugging
					</p>
					<a href="#contact" className="btn-btn-primary"></a>
				</div>
			</div>
		</section>
	);
};

export default About;
