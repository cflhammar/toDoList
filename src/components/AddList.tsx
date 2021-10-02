import { Grid } from "@mui/material";
import "./AddList.css";
import InputField from "./InputField";

interface AddListProps {
	handleAddList(title: string): void;
}

const AddList: React.FunctionComponent<AddListProps> = ({ handleAddList }) => {
	const tempAddList = (inputText: string) => {
		handleAddList(inputText);
		console.log(inputText);
	};

	return (
		<div className="header-container">
			<Grid
				container
				spacing={0}
				sx={{
					width: "100%",
				}}
			>
				<Grid item xs={12} sx={{ textAlign: "center" }}>
					<h2>Add new list</h2>
				</Grid>
				<InputField
					placeHolder="Enter list name..."
					addFunction={tempAddList}
				/>
			</Grid>
		</div>
	);
};

export default AddList;
