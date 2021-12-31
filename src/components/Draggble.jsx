import React from "react";

const Draggble = (props) => {
	const drag = (e) => {
		e.dataTransfer.setData("transfer", e.target.id);

		// setTimeout(() => {
		// 	e.target.style.display = "none";
		// }, 0);
	};

	const noAllowDrop = (e) => {
		e.stopPropagation();
	};
	return (
		<div
			id={props.id}
			draggable={true}
			onDragStart={(e) => drag(e)}
			onDragOver={(e) => noAllowDrop(e)}
			style={props.style}
		>
			{props.children}
		</div>
	);
};

export default Draggble;
