import "./App.css";
import Droppable from "./components/Droppable";
import Draggble from "./components/Draggble";
import styled from "styled-components";

const StyledApp = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Item = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const droppableStyle = {
	backgroundColor: "#555",
	width: "250px",
	height: "400px",
	margin: "32px",
};

const draggableStyle = {
	margin: "8px",
	padding: "10px",
	backgroundColor: "#fff",
	cursor: "pointer",
};

function App() {
	return (
		<StyledApp>
			<Droppable id="drop1" style={droppableStyle}>
				<Draggble id="item1" style={draggableStyle}>
					<Item>Some text</Item>
				</Draggble>
				<Draggble id="item2" style={draggableStyle}>
					<Item>Some new text</Item>
				</Draggble>
			</Droppable>
			<Droppable id="Two" style={droppableStyle}>
				<Draggble id="item3" style={draggableStyle}>
					<Item>Build something</Item>
				</Draggble>
				<Draggble id="item4" style={draggableStyle}>
					<Item>Build something great and new</Item>
				</Draggble>
			</Droppable>
		</StyledApp>
	);
}

export default App;
