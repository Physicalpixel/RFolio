import React from "react"
import "./tag.css"

export default function Tag(tag) {
	console.log(tag.tags)
	return <div className="tag">{tag.tags}</div>
}
