import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

export interface IList {
	id: number;
}

const App: React.FunctionComponent = () => {
	const [lists, setLists] = useState<IList[]>([{ id: 1 }, { id: 2 }]);

	const handleAddList = () => {
		setLists((currentLists) => [...currentLists, { id: 3 }]);
	};

	const renderLists = () => {
		return lists.map((list) => {
			return (
				<Box>
					<ToDoList title={list.id.toString()} />
				</Box>
			);
		});
	};

	return (
		<div>
			<Button onClick={() => handleAddList()}>Add new list</Button>
			{renderLists()}
		</div>
	);
};

export default App;
