import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

const CategoryTile = ({ title, color, onPress }) => {
	return (
		<View style={styles.tile}>
			<Pressable
				style={({ pressed }) => [
					styles.pressable,
					pressed ? styles.pressed : null,
				]}
				android_ripple={{ color: "#ccc" }}
				onPress={onPress}
			>
				<View style={[styles.tileInner, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryTile;

const styles = StyleSheet.create({
	tile: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,

		// android
		elevation: 4,

		// ios
		shadowColor: "black",
		shadowOffset: "0.25",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		backgroundColor: "white",
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	pressable: {
		flex: 1,
	},
	tileInner: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
	pressed: {
		opacity: 0.5,
	},
});
