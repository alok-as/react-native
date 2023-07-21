import { View, StyleSheet, Image, Text } from "react-native";

import Title from "../components/common/title";
import PrimaryButton from "../components/common/primary-button";
import Colors from "../constants/colors";

const GameOver = ({ onResetGame, userNumber, noOfRounds }) => {
	return (
		<View style={styles.container}>
			<Title>Game Over!!!</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../assets/success.png")}
				/>
			</View>
			<Text style={styles.text}>
				Your phone needed{" "}
				<Text style={styles.highlight}>{noOfRounds}</Text> rounds to
				guess the number
				<Text style={styles.highlight}> {userNumber}</Text>
			</Text>
			<PrimaryButton onPress={onResetGame}>Reset Game</PrimaryButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		borderRadius: 150,
		width: 300,
		height: 300,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: "hidden",
		margin: 36,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	text: {
		fontFamily: "Open-Sans",
		fontSize: 24,
		textAlign: "center",
		marginBottom: 24,
	},
	highlight: {
		fontFamily: "Open-Sans-Bold",
		color: Colors.primary500,
	},
});

export default GameOver;
