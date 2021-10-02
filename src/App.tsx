import { Box, Button, Grid, IconButton, TextField } from "@mui/material";

import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import AddList from "./components/AddList/AddList";

interface IList {
	id: number;
	title: string;
	handleRemoveList(id: number): void;
}

const App: React.FunctionComponent = () => {
	const handleRemoveList = (id: number) => {
		setLists(lists.filter((list) => list.id !== id));
	};
	const [lists, setLists] = useState<IList[]>([
		{ id: 1, title: "List1", handleRemoveList: handleRemoveList },
		{ id: 2, title: "list 2", handleRemoveList: handleRemoveList },
	]);

	const handleAddList = () => {
		if (inputText.length > 0) {
			const newList = {
				id: 3,
				title: inputText,
				handleRemoveList: handleRemoveList,
			};
			setLists((currentLists) => [...currentLists, newList]);
			setText("");
		}
	};

	const [inputText, setText] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const renderLists = () => {
		return lists.map((list) => {
			return (
				<Box sx={{ width: "500px", textAlign: "center" }}>
					<ToDoList
						title={list.title}
						id={list.id}
						handleRemoveList={handleRemoveList}
					/>
				</Box>
			);
		});
	};

	return (
		<div>
			<AddList />
			<Grid className="container" container spacing={1}>
				<Grid item xs={9}>
					<TextField
						value={inputText}
						onChange={handleChange}
						placeholder="Enter list name"
						variant="filled"
						margin="normal"
						focused
						sx={{ height: "100%", width: "100%" }}
					/>
				</Grid>
				<Grid item xs={3}>
					<Button onClick={() => handleAddList()} sx={{ height: "100%" }}>
						Add
					</Button>
				</Grid>
			</Grid>
			<div className="to-do-lists-container">{renderLists()}</div>
		</div>
	);
};

export default App;
