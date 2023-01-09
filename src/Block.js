import React from "react"

export default function Block({ url, color, title }) {
	//sample   url = "https://storybook.js.org/docs/react/writing-docs/introduction"
	const clr = {
		backgroundColor: color,
	}
	return (
		<a className="block" style={clr} href={url} rel="noopener noreferrer" target="_blank">
			<div>{title} </div>
		</a>
	)
}
