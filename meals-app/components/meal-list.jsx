import { StyleSheet, Text, View } from "react-native";

const MealList = ({ data }) => {
	return data.map((item) => (
		<View style={styles.item} key={item}>
			<Text style={styles.text}>{item}</Text>
		</View>
	));
};

export default MealList;

const styles = StyleSheet.create({
	item: {
		borderRadius: 6,
		paddingVertical: 4,
		marginVertical: 4,
		paddingHorizontal: 8,
		paddingVertical: 12,
		backgroundColor: "#e2b497",
	},
	text: {
		color: "#351401",
		textAlign: "center",
	},
});
