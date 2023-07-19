import { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";

import Card from "../components/common/card";
import Instruction from "../components/common/instruction";
import PrimaryButton from "../components/common/primary-button";
import Title from "../components/common/title";

import Colors from "../constants/colors";

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
			<Title>Guess My Number</Title>
			<Card>
				<Instruction>Enter a Number</Instruction>
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
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 100,
		alignItems: "center",
	},
	input: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.ascent500,
		borderBottomWidth: 2,
		color: Colors.ascent500,
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
