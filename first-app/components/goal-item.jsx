import { View, Text, Pressable, StyleSheet } from "react-native";

const GoalItem = ({ text, onPress }) => {
	return (
		<View style={styles.goal}>
			<Pressable
				android_ripple={{ color: "#ddd" }}
				style={({ pressed }) => pressed && styles.pressed}
				onPress={onPress}
			>
				<Text style={styles.text}>{text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goal: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	text: {
		padding: 8,
		color: "white",
	},
	pressed: {
		opacity: 0.5,
	},
});

export default GoalItem;
