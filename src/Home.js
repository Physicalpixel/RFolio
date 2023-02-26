import React from "react"
import "./home.css"

import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div>
			<div>
				{" "}
				Next Steps: 1)add one data gen feature in DG page<br></br>
				2)Edit timeseries graph and make it a full fleged visualization with correct contextual text<br></br>
				3)
			</div>
			<Link className="folio" to="/App">
				Portfolio
			</Link>
			<Link className="datagen" to="/Datagen">
				Data Generator
			</Link>
		</div>
	)
}
