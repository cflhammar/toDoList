import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ToDoList, { IToDoItem } from "./components/ToDoList";

const App: React.FunctionComponent = () => {
	return (
		<div>
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
