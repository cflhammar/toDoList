import { ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import React from "react";
import { IToDoItem } from "./ToDoList";
import { CheckBox } from "@material-ui/icons";

const ToDoListItem: React.FunctionComponent<IToDoItem> = (toDoItem) => {
	return (
		<ListItem>
			<CheckBox />
			<ListItemText primary={toDoItem.text + "," + toDoItem.id} />
			<ClearIcon onClick={() => toDoItem.handleRemove(toDoItem.id)} />
		</ListItem>
	);
};

export default ToDoListItem;
