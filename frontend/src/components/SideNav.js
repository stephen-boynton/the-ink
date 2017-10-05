import React from "react";
import { Link } from "react-router-dom";

export default function SideNav(props) {
	return (
		<nav className="side-nav col-1-4">
			<Link to="/">Home</Link>
			<Link to="/">Archive</Link>
			<Link to="/">Featured</Link>
			<Link to="/">Profile</Link>
			<Link to="/newblog">New</Link>
		</nav>
	);
}
