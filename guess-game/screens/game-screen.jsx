import { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/common/card";
import GuessNumber from "../components/game/guess-number";
import Instruction from "../components/common/instruction";
import PrimaryButton from "../components/common/primary-button";
import Title from "../components/common/title";

const generateNumberBetween = (min, max, exclude) => {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber === exclude) {
		return generateNumberBetween(min, max, exclude);
	}

	return randomNumber;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onEndGame }) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateNumberBetween(minBoundary, maxBoundary, userNumber)
	);

	const onNextGuessHandler = (dir) => {
		if (
			(dir === "lower" && currentGuess < userNumber) ||
			(dir === "higher" && currentGuess > userNumber)
		) {
			Alert.alert("Dont Lie!", "You know that this is wrong", [
				{
					text: "Sorry",
					style: "cancel",
				},
			]);

			return;
		}

		if (dir === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newGuess = generateNumberBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);

		setCurrentGuess(newGuess);
	};

	useEffect(() => {
		if (currentGuess === userNumber) {
			onEndGame();
		}
	}, [currentGuess, userNumber, onEndGame]);

	return (
		<View style={styles.container}>
			<Title>Opponents Guess</Title>
			<GuessNumber>{currentGuess}</GuessNumber>
			<Card>
				<Instruction style={styles.instruction}>
					Lower or Higher?
				</Instruction>
				<View style={styles.buttons}>
					<View style={styles.button}>
						<PrimaryButton
							onPress={() => onNextGuessHandler("lower")}
						>
							<Ionicons
								name="md-remove"
								size={24}
								color="white"
							/>
						</PrimaryButton>
					</View>
					<View style={styles.button}>
						<PrimaryButton
							onPress={() => onNextGuessHandler("higher")}
						>
							<Ionicons name="md-add" size={24} color="white" />
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
		padding: 24,
	},
	instruction: {
		marginBottom: 12,
	},
	buttons: {
		flexDirection: "row",
	},
	button: {
		flex: 1,
	},
});

export default GameScreen;
