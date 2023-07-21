import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

const GuessLog = ({ roundNumber, roundGuess }) => {
	return (
		<View style={styles.log}>
			<Text style={styles.text}>#{roundNumber}</Text>
			<Text style={styles.text}>Opponent's Guess: {roundGuess}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	log: {
		borderColor: Colors.primary700,
		borderRadius: 40,
		borderWidth: 2,
		padding: 12,
		marginVertical: 8,
		backgroundColor: Colors.ascent500,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		elevation: 4,
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3,
	},
	text: {
		fontFamily: "Open-Sans",
	},
});

export default GuessLog;
