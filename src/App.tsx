import { Box } from "@mui/material";
import "./App.css";
import ToDoList from "./components/ToDoList";

const App: React.FunctionComponent = () => {
	return (
		<Box>
			<ToDoList />
		</Box>
	);
};

export default App;
