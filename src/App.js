import React from "react"
import Topbar from "./Topbar"
import Sidebar from "./Sidebar"
import Main from "./Main.js"
import { useState } from "react"

export default function App() {
	const [SidebarState, setSidebarState] = useState(false)
	const toggleSidebar = () => {
		console.log("got called")
		setSidebarState(!SidebarState)
	}
	const [sidebarValue, setSidebarValue] = useState("Projects")

	const sidebarValueUpdate = (event) => {
		console.log(event.target.innerText)
		setSidebarValue(event.target.innerText)
	}

	return (
		<div className="App">
			<Topbar toggleSidebar={toggleSidebar}></Topbar>
			<Sidebar isOpen={SidebarState} sidebarValueUpdate={sidebarValueUpdate} />
			<Main targetValue={sidebarValue} isOpen={SidebarState} />
		</div>
	)
}
