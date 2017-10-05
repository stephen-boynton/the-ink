import React from "react";
import SideNav from "../components/SideNav";
import NewBlogForm from "../components/NewBlogForm";
import "../styles/NewView.css";

export default function NewView() {
	return (
		<div className="container">
			<SideNav />
			<NewBlogForm />
		</div>
	);
}
