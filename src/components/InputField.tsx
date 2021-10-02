import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

interface InputFieldProps {
	placeHolder: string;
	addFunction(inputText: string): void;
}
const InputField: React.FunctionComponent<InputFieldProps> = ({
	placeHolder,
	addFunction,
}) => {
	const [inputText, setText] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleAddInputField = () => {
		if (inputText.length > 0) {
			addFunction(inputText);
			console.log(inputText);
			setText("");
		}
	};

	return (
		<Grid container item>
			<Grid item xs={10}>
				<TextField
					value={inputText}
					onChange={handleChange}
					placeholder={placeHolder}
					variant="outlined"
					margin="normal"
					focused
					sx={{ width: "95%", margin: "5px" }}
				/>
			</Grid>
			<Grid item xs={2}>
				<Button
					onClick={() => handleAddInputField()}
					variant="outlined"
					sx={{
						border: "2px solid",
						minHeight: "55.980px",
						marginTop: "5px",
						marginBottom: "5px",
						marginRight: "5px",
					}}
				>
					Add
				</Button>
			</Grid>
		</Grid>
	);
};

export default InputField;
