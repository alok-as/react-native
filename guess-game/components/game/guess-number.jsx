import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessNumber = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.ascent500,
		borderRadius: 8,
		padding: 24,
		margin: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontFamily: "Open-Sans-Bold",
		color: Colors.ascent500,
		fontSize: 36,
	},
});

export default GuessNumber;
