import { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from "react-native";

const GoalsForm = ({ isOpen, addGoal, closeModal }) => {
	const [text, setText] = useState("");

	const onInputChangeHandler = (value) => setText(value);

	const addGoalHandler = () => {
		if (!text) return;

		addGoal(text);
		setText("");
		closeModal();
	};

	return (
		<Modal visible={isOpen} animationType="slide">
			<View style={styles.form}>
				<Image
					style={styles.image}
					source={require("../assets/goal.png")}
				/>
				<TextInput
					style={styles.input}
					placeholder="Your course goals"
					onChangeText={onInputChangeHandler}
					value={text}
				/>
				<View style={styles.buttons}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							color="#f31282"
							onPress={closeModal}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Add Goal"
							color="#5e0acc"
							onPress={addGoalHandler}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	form: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		paddingHorizontal: 16,
		backgroundColor: "#311b6b",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	input: {
		width: "100%",
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		borderRadius: 6,
		color: "#120438",
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	buttons: {
		flexDirection: "row",
		gap: 10,
		justifyContent: "center",
	},
	button: {
		width: "40%",
	},
});

export default GoalsForm;
