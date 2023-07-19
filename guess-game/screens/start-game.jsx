import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "../components/primary-button";

const StartGame = ({ onStartGame }) => {
	const [value, setValue] = useState("");

	const onChangeTextHandler = (value) => setValue(value);

	const isInputValid = (value) => !isNaN(value) && value > 0 && value <= 99;

	const onResetInputHandler = () => setValue("");

	const onConfirmInputHandler = () => {
		const number = parseInt(value);

		if (!isInputValid(number)) {
			Alert.alert(
				"Invalid Number!",
				"Number should be between 1 and 99.",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: onResetInputHandler,
					},
				]
			);
			return;
		}

		onStartGame(number);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				maxLength={2}
				onChangeText={onChangeTextHandler}
				value={value}
			/>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<PrimaryButton onPress={onResetInputHandler}>
						Reset
					</PrimaryButton>
				</View>
				<View style={styles.button}>
					<PrimaryButton onPress={onConfirmInputHandler}>
						Confirm
					</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		marginHorizontal: 24,
		marginTop: 100,
		padding: 16,
		backgroundColor: "#3b021f",
		elevation: 4,
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.25,
		alignItems: "center",
	},
	input: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttons: {
		flexDirection: "row",
	},
	button: {
		flex: 1,
	},
});

export default StartGame;
