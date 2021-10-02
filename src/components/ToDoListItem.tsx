import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { IToDoItem } from "./ToDoList";

const ToDoListItem: React.FunctionComponent<IToDoItem> = ({
	id,
	text,
	handleRemove,
}) => {
	const [checkedBox, setCheck] = useState(false);

	const handleToggle = () => {
		setCheck(!checkedBox);
	};

	return (
		<ListItem key={id} divider>
			<Checkbox onClick={() => handleToggle()} />

			<ListItemText
				primary={text}
				sx={{ textDecoration: checkedBox ? "line-through" : "none" }}
			/>

			<IconButton
				edge="end"
				aria-label="delete"
				onClick={() => handleRemove(id)}
			>
				<DeleteIcon />
			</IconButton>
		</ListItem>
	);
};

export default ToDoListItem;
