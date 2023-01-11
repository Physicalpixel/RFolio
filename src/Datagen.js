import React from "react"
import { useState } from "react"
import "./datagen.css"
import Topbar from "./Topbar"

export default function Datagen() {
	return (
		<div>
			<Topbar rightPos="1700px" className="home" display="none" text="Sample Data Generator" />
		</div>
	)
}
