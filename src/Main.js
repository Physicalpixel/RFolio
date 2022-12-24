import React from "react"
import "./main.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export default function Main() {
	return (
		<div className="main-content-container">
			<div className="main-content"></div>
			<div className="footer">
				<p>Hello there. I am Preethi and this is my portfolio. My work involves data visualization and front-end projects with D3.js, React and Cytoscape.js.</p>
				<a href="https://www.linkedin.com/in/preethikaran91/" rel="noopener noreferrer" target="_blank">
					<AiFillLinkedin className="linkedin" />
				</a>
				<a href="https://github.com/Physicalpixel" rel="noopener noreferrer" target="_blank">
					<AiFillGithub className="github" />
				</a>
			</div>
		</div>
	)
}
