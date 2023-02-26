import React, { useState, useEffect, useRef } from "react"
import "./block.css"
import Tag from "./Tag"

export default function Block({ url, color, title, bgurl, tags }) {
	//sample   url = "https://storybook.js.org/docs/react/writing-docs/introduction"
	const [isHovered, setIsHovered] = useState(false)
	const overlayRef = useRef(null)

	useEffect(() => {
		if (isHovered) {
			overlayRef.current.style.display = "flex"
		} else {
			overlayRef.current.style.display = "none"
		}
	}, [isHovered])
	const clr = {
		textDecoration: "none",
		backgroundColor: "none",
		backgroundImage: `url(${bgurl})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		backgroundPosition: "'center' bottom",
		paddingTop: "1px",
	}
	// const titleStyle = {
	// 	backgroundColor: "rgba(0, 0, 0, 0.7)",
	// 	color: "white",
	// 	paddingLeft: "5px",
	// 	fontFamily: "Poppins",
	// 	fontSize: "12px",
	// }
	return (
		<a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="block" style={clr} href={url} rel="noopener noreferrer" target="_blank">
			<div className="overlay" ref={overlayRef}>
				{title}
				<br></br>
				<Tag tags={tags.toString()}></Tag>
			</div>
		</a>
	)
}
