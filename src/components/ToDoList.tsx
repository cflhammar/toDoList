import { Grid, IconButton, List, Paper } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import DeleteIcon from "@mui/icons-material/Delete";
import ToDoListItem from "./ToDoListItem";
import React, { useState } from "react";
import "./ToDoList.css";
import CSS_COLOR_NAMES from "./BGColorsArray";
import InputField from "./InputField";

export interface IToDoItem {
	id: number;
	text: string;
	handleRemove(id: number): void;
}

interface ToDoListProps {
	title: string;
	id: number;
	handleRemoveList(id: number): void;
}

const ToDoList: React.FunctionComponent<ToDoListProps> = ({
	title,
	id,
	handleRemoveList,
}) => {
	const [toDoItems, setToDoItems] = useState<IToDoItem[]>([]);

	const handleAddToDoItem = (text: string) => {
		let nextId = assignId();
		const newToDoItem = {
			id: nextId,
			text: text,
			handleRemove: handleRemoveItem,
		};
		setToDoItems((currentToDoItem) => [...currentToDoItem, newToDoItem]);
	};

	const assignId = (): number => {
		let nextId = 1;
		if (toDoItems.length > 0) {
			nextId = toDoItems[toDoItems.length - 1].id + 1;
		}
		return nextId;
	};

	const handleRemoveItem = (id: number) => {
		setToDoItems(toDoItems.filter((toDoItem) => toDoItem.id !== id));
	};

	const renderToDoList = () => {
		if (toDoItems.length > 0) {
			return (
				<List sx={{ width: "100%", maxWidth: 360 }}>
					{toDoItems.map((item) => {
						return (
							<ToDoListItem
								key={item.id}
								text={item.text}
								id={item.id}
								handleRemove={handleRemoveItem}
							/>
						);
					})}
				</List>
			);
		}
	};

	/*
				elevation={4}
			className="toDoList"
			sx={{
				backgroundColor: CSS_COLOR_NAMES[id],
				width: "90%",
				margin: "10px",
				padding: "10px",
				display: "inline-block",
			}}
			*/
	return (
		<Paper
			elevation={4}
			sx={{
				backgroundColor: CSS_COLOR_NAMES[id],
				margin: "5px",
				display: "inline-block",
				width: "100%",
			}}
		>
			<div>
				<Grid sx={{ display: "inline-flex" }}>
					<Grid item sx={{ width: "90%" }}>
						<h1 className="list-title">{title}</h1>
					</Grid>
					<Grid item sx={{ width: "10%" }}>
						<IconButton
							edge="end"
							aria-label="delete"
							onClick={() => handleRemoveList(id)}
						>
							<DeleteIcon />
						</IconButton>
					</Grid>
				</Grid>

				<InputField
					placeHolder="Enter task name..."
					addFunction={handleAddToDoItem}
				/>

				<Grid container spacing={1}>
					{renderToDoList()}
				</Grid>
			</div>
		</Paper>
	);
};

export default ToDoList;
