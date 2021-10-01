import { Button, List, TextField } from "@mui/material";
import ToDoListItem from "./ToDoListItem";
import React, { useState } from "react";

export interface IToDoItem {
	id: number;
	text: string;
	handleRemove(id: number): void;
}
const ToDoList: React.FunctionComponent = () => {
	const [toDoItems, setToDoItems] = useState<IToDoItem[]>([]);

	const handleAddToDoItem = (text: string) => {
		if (inputText.length > 0) {
			let nextId = 1;
			if (toDoItems.length > 0) {
				nextId = toDoItems[toDoItems.length - 1].id + 1;
			}
			setToDoItems((currentToDoItem) => [
				...currentToDoItem,
				{ id: nextId, text: text, handleRemove: handleRemoveItem },
			]);
			setText("");
		}
	};

	const handleRemoveItem = (id: number) => {
		setToDoItems(toDoItems.filter((toDoItem) => toDoItem.id !== id));
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

	return (
		<div className="App">
			<div className="input">
				<TextField
					value={inputText}
					onChange={handleChange}
					placeholder="Write to do thing"
					label="Outlined secondary"
					color="secondary"
					focused
				/>
				<Button onClick={() => handleAddToDoItem(inputText)}>Save</Button>
			</div>

			<div className="toDoList">{renderToDoList()}</div>
		</div>
	);
};

export default ToDoList;
