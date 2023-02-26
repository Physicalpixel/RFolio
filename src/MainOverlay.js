import React from "react"
import "./main.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Block from "./Block"
import { useEffect, useState } from "react"

export default function Main({ targetValue, isOpen }) {
	const [data, setData] = useState(null)
	const [isHovered, setIsHovered] = useState(false)
	console.log(isHovered)
	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://raw.githubusercontent.com/Physicalpixel/Portfolio/master/data.json")
			const data = await response.json()
			setData(data)
		}
		fetchData()
	}, [targetValue])
	if (!data) {
		return <div className="main-content-container loading">Loading...</div>
	} else {
		const result = data.filter((item) => item.tech.includes(targetValue) === true)
		return (
			<div className={`main-content-container ${isOpen ? "open" : "collapsed"}`}>
				<div onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} className="main-content">
					{result.map((item) => {
						if (item.tech.includes("Projects") === true) {
							console.log(item)
							return <Block key={item.id} bgurl={item.bgurl} url={item.url} title={item.title}></Block>
						}
					})}
				</div>
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
}
