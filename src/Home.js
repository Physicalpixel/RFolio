import React from "react"
import "./home.css"

import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div>
			<Link className="folio" to="/App">
				Portfolio
			</Link>
			<Link className="datagen" to="/Datagen">
				Data Generator
			</Link>
		</div>
	)
}
