import { Box, Paper } from "@mui/material";

import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import AddList from "./components/AddList";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";

interface IList {
	id: number;
	title: string;
	handleRemoveList(id: number): void;
}

const App: React.FunctionComponent = () => {
	const [lists, setLists] = useState<IList[]>([]);

	const handleAddList = (title: string) => {
		let nextId = assignId();
		const newList = {
			id: nextId,
			title: title,
			handleRemoveList: handleRemoveList,
		};
		setLists((currentLists) => [...currentLists, newList]);
	};

	const assignId = (): number => {
		let nextId = 1;
		if (lists.length > 0) {
			nextId = lists[lists.length - 1].id + 1;
		}
		return nextId;
	};

	const handleRemoveList = (id: number) => {
		setLists(lists.filter((list) => list.id !== id));
	};

	const renderLists = () => {
		return lists.map((list) => {
			return (
				<MasonryItem sx={{ width: "400px", textAlign: "center" }}>
					<ToDoList
						title={list.title}
						id={list.id}
						handleRemoveList={handleRemoveList}
					/>
				</MasonryItem>
			);
		});
	};

	return (
		<div>
			<Paper
				elevation={4}
				className="header"
				sx={{
					border: "3px solid black",
					backgroundColor: "rgba(50,200,100,0.2)",
					marginTop: "10px",
				}}
			>
				<AddList handleAddList={handleAddList} />
			</Paper>
			<Masonry
				columns={{ xs: 1, sm: 3, md: 4 }}
				spacing={2}
				className="to-do-lists-container"
			>
				{renderLists()}
			</Masonry>
		</div>
	);
};

export default App;
