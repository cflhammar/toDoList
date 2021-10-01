import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { IToDoItem } from "./ToDoList";

const ToDoListItem: React.FunctionComponent<IToDoItem> = (toDoItem) => {
	const [checkedBox, setCheck] = useState(false);

	const handleToggle = () => {
		setCheck(!checkedBox);
	};

	return (
		<ListItem key={toDoItem.toDoId} divider>
			<Checkbox onClick={() => handleToggle()} />

			<ListItemText
				primary={toDoItem.toDoText}
				sx={{ textDecoration: checkedBox ? "line-through" : "none" }}
			/>

			<IconButton
				edge="end"
				aria-label="delete"
				onClick={() => toDoItem.handleRemove(toDoItem.toDoId)}
			>
				<DeleteIcon />
			</IconButton>
		</ListItem>
	);
};

export default ToDoListItem;
