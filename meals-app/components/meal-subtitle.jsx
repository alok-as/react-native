import { StyleSheet, Text, View } from "react-native";

const MealSubtitle = ({ children }) => {
	return (
		<View style={styles.subtitle}>
			<Text style={styles.subtitleText}>{children}</Text>
		</View>
	);
};

export default MealSubtitle;

const styles = StyleSheet.create({
	subtitle: {
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
		borderBottomColor: "#e2b497",
		borderBottomWidth: 2,
	},
	subtitleText: {
		color: "#e2b497",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
