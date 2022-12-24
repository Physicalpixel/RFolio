import React from "react"
import Topbar from "./Topbar"
import Sidebar from "./Sidebar"
import Main from "./Main.js"

export default function App() {
	return (
		<div className="App">
			<Topbar></Topbar>
			<Sidebar />
			<Main />
		</div>
	)
}
