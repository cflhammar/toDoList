import { Button, Grid, List, Paper, TextField } from "@mui/material";
import ToDoListItem from "./ToDoListItem";
import React, { useState } from "react";

export interface IToDoItem {
	toDoId: number;
	toDoText: string;
	handleRemove(id: number): void;
}

interface ToDoListProps {
	title: string;
}

const ToDoList: React.FunctionComponent<ToDoListProps> = ({ title }) => {
	const [toDoItems, setToDoItems] = useState<IToDoItem[]>([]);

	const handleAddToDoItem = (toDoText: string) => {
		if (inputText.length > 0) {
			let nextId = 1;
			if (toDoItems.length > 0) {
				nextId = toDoItems[toDoItems.length - 1].toDoId + 1;
			}
			setToDoItems((currentToDoItem) => [
				...currentToDoItem,
				{
					toDoId: nextId,
					toDoText: toDoText,
					handleRemove: handleRemoveItem,
				},
			]);
			setText("");
		}
	};

	const handleRemoveItem = (id: number) => {
		setToDoItems(toDoItems.filter((toDoItem) => toDoItem.toDoId !== id));
	};

	const [inputText, setText] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const renderToDoList = () => {
		if (toDoItems.length > 0) {
			return (
				<List sx={{ width: "100%", maxWidth: 360 }}>
					{toDoItems.map((item) => {
						return (
							<ToDoListItem
								key={item.toDoId}
								toDoText={item.toDoText}
								toDoId={item.toDoId}
								handleRemove={handleRemoveItem}
							/>
						);
					})}
				</List>
			);
		}
	};

	return (
		<Paper
			elevation={4}
			className="toDoList"
			sx={{
				width: "50%",
				margin: "100px",
				padding: "10px",
				display: "inline-block",
			}}
		>
			{title}
			<Grid container spacing={1}>
				<Grid item xs={9}>
					<TextField
						value={inputText}
						onChange={handleChange}
						placeholder="Enter new task"
						variant="filled"
						margin="normal"
						focused
						sx={{ height: "100%", width: "100%" }}
					/>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={() => handleAddToDoItem(inputText)}
						sx={{ height: "100%" }}
					>
						Save
					</Button>
				</Grid>
			</Grid>

			<Grid container spacing={1}>
				{renderToDoList()}
			</Grid>
		</Paper>
	);
};

export default ToDoList;
