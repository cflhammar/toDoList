import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { IToDoItem } from "../ToDoList/ToDoList";

const ToDoListItem: React.FunctionComponent<IToDoItem> = ({
	toDoId,
	toDoText,
	handleRemove,
}) => {
	const [checkedBox, setCheck] = useState(false);

	const handleToggle = () => {
		setCheck(!checkedBox);
	};

	return (
		<ListItem key={toDoId} divider>
			<Checkbox onClick={() => handleToggle()} />

			<ListItemText
				primary={toDoText}
				sx={{ textDecoration: checkedBox ? "line-through" : "none" }}
			/>

			<IconButton
				edge="end"
				aria-label="delete"
				onClick={() => handleRemove(toDoId)}
			>
				<DeleteIcon />
			</IconButton>
		</ListItem>
	);
};

export default ToDoListItem;
