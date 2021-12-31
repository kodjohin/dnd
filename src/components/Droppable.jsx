import React from "react";

const Droppable = (props) => {
	const drop = (e) => {
		e.preventDefault();
		const data = e.dataTransfer.getData("transfer");
		e.target.appendChild(document.getElementById(data));
	};

	const allowDrop = (e) => {
		e.preventDefault();
	};
	return (
		<div
			id={props.id}
			onDrop={(e) => drop(e)}
			onDragOver={(e) => allowDrop(e)}
			style={props.style}
		>
			{props.children}
		</div>
	);
};

export default Droppable;
