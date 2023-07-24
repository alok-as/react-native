import { StyleSheet, Text, View } from "react-native";

const MealMetaDetails = ({
	duration,
	complexity,
	affordability,
	style,
	textStyle,
}) => {
	return (
		<View style={[styles.details, style]}>
			<Text style={[styles.detail, textStyle]}>{duration}m</Text>
			<Text style={[styles.detail, textStyle]}>
				{complexity.toUpperCase()}
			</Text>
			<Text style={[styles.detail, textStyle]}>
				{affordability.toUpperCase()}
			</Text>
		</View>
	);
};

export default MealMetaDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
	},
	detail: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});
