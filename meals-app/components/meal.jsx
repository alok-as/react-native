import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	Platform,
} from "react-native";
import MealMetaDetails from "./meal-meta-details";

const Meal = ({
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
	onPress,
}) => {
	return (
		<View style={styles.meal}>
			<Pressable
				style={({ pressed }) => [pressed ? styles.pressed : null]}
				android_ripple={{ color: "#ccc" }}
				onPress={onPress}
			>
				<View style={styles.mealInner}>
					<View>
						<Image
							style={styles.image}
							source={{ uri: imageUrl }}
						/>
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealMetaDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default Meal;

const styles = StyleSheet.create({
	meal: {
		margin: 16,
		borderRadius: 8,
		backgroundColor: "white",

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
	mealInner: {
		borderRadius: 8,
		overflow: "hidden",
	},
	pressed: {
		opacity: 0.5,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
});
