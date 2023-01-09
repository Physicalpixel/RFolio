import React from "react"
import "./topbar.css"

import { AiFillHome } from "react-icons/ai"
import { HiSearch, HiMenu } from "react-icons/hi"

export default function Topbar({ toggleSidebar }) {
	return (
		<div className="topbar">
			<HiMenu className="menu-icon" onClick={toggleSidebar} />
			<div className="portfolio">Portfolio | Data Visualization | Front-End</div>
			<div className="search-container">
				<HiSearch className="search-icon" />
				<input type="text" className="search-input" placeholder="Search feature coming soon..." />
			</div>

			<AiFillHome className="home-icon" />
		</div>
	)
}
