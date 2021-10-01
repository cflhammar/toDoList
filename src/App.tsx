import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ToDoList, { IToDoItem } from "./components/ToDoList";

const App: React.FunctionComponent = () => {
	const [lists, setLists] = useState([]);

	return (
		<div>
			<Button>Add new list</Button>

			<Box>
				<ToDoList title={"Lista1"} />
			</Box>
			<Box>
				<ToDoList title={"Lista2"} />
			</Box>
		</div>
	);
};

export default App;
