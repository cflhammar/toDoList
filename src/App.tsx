import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ToDoList, { IToDoItem } from "./components/ToDoList";

interface IToDoList {
	id: number;
	title: string;
	list: Array<IToDoItem>;
}

const App: React.FunctionComponent = () => {
	const [toDoLists, setToDoLists] = useState<IToDoList[]>([]);

	const handleAddToDoList = (title: string) => {
		setToDoLists((currentToDoLists) => [...currentToDoLists, {
			id: 1,
			title: title,
			list: newList;
		}])
	};

	const renderToDoLists = () => {
		if (toDoLists.length > 0) {
			return toDoLists.map((toDoList) => {
				<Box>
					<ToDoList />
				</Box>;
			});
		}
	};

	return;
	<Button
		onClick={() => {
			setToDoLists;
		}}
	>
		{" "}
		Add new list
	</Button>;
	renderToDoLists();
};

export default App;
