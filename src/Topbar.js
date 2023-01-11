import React from "react"
import "./topbar.css"
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { HiSearch, HiMenu } from "react-icons/hi"

export default function Topbar({ toggleSidebar, text, display, rightPos }) {
	return (
		<div className="topbar">
			<HiMenu style={{ display: display }} className="menu-icon" onClick={toggleSidebar} />
			<div className="portfolio">{text}</div>
			<div className="search-container" style={{ display: display }}>
				<HiSearch className="search-icon" />
				<input type="text" className="search-input" placeholder="Search feature coming soon..." />
			</div>
			<Link style={{ right: rightPos }} className="home-icon" to="/">
				<AiFillHome />
			</Link>
		</div>
	)
}
