import React from "react"
import "./sidebar.css"
import { MdLabel } from "react-icons/md"
import { useEffect, useRef } from "react"

export default function Sidebar({ isOpen, sidebarValueUpdate }) {
	const elementRef = useRef()
	useEffect(() => {
		console.log("ran this")
		if (isOpen) {
			elementRef.current = document.querySelector(".sidebar")
			elementRef.current.addEventListener("click", sidebarValueUpdate)
		}

		return () => {
			if (elementRef.current) {
				elementRef.current.removeEventListener("click", sidebarValueUpdate)
			}
		}
	}, [isOpen, sidebarValueUpdate])

	return (
		<div className={`sidebar ${isOpen ? "open" : "closed"}`}>
			<div className="Projects">
				{" "}
				<MdLabel className="icons" />
				Projects
			</div>
			<div className="D3.js">
				<MdLabel className="icons" /> D3.js{" "}
			</div>
			<div className="Cytoscape.js">
				{" "}
				<MdLabel className="icons" /> Cytoscape.js
			</div>
			<div className="New-Media">
				{" "}
				<MdLabel className="icons" /> New-Media
			</div>
			<div className="Design">
				{" "}
				<MdLabel className="icons" />
				Design
			</div>
		</div>
	)
}
