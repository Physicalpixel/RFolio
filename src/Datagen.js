import React from "react"
import { useState } from "react"
import "./datagen.css"
import Topbar from "./Topbar"

export default function Datagen() {
	const [selectedOption, setselectedOption] = useState("Select Type")
	const handleChange = (event) => {
		setselectedOption(event.target.value)
	}

	return (
		<div>
			<Topbar selectedOption={selectedOption} className="home" display="none" text="Sample Data Generator" />
			<form id="form" className="form">
				<select value={selectedOption} id="type" onChange={handleChange}>
					<option value="" selected>
						Select Type
					</option>
					<option value="JSON">JSON</option>
					<option value="hierarchical">Hierarchical</option>
					<option value="d3">d3JSON</option>
					<option value="cy">CyJSON</option>
					<option value="sankeyJSON">sankeyJSON</option>
				</select>
			</form>
		</div>
	)
}
