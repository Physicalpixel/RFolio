import React from "react"
import "./sidebar.css"
import { MdLabel } from "react-icons/md"

export default function Sidebar() {
	return (
		<div className="sidebar">
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
				<MdLabel className="icons" /> New Media
			</div>
			<div className="Design">
				{" "}
				<MdLabel className="icons" />
				Design
			</div>
		</div>
	)
}
