import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressable, styles.pressed]
						: styles.pressable
				}
				onPress={onPress}
				android_ripple={{ color: "#640233" }}
			>
				<Text style={styles.text}>{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	pressable: {
		backgroundColor: "#72063c",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	text: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
