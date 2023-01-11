import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Home from "./Home"
import Datagen from "./Datagen"

export default function Router() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/App" element={<App />}></Route>
				<Route path="/Datagen" element={<Datagen />}></Route>
			</Routes>
		</HashRouter>
	)
}
