import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import MealMetaDetails from "../components/meal-meta-details";
import MealSubtitle from "../components/meal-subtitle";
import MealList from "../components/meal-list";
import IconButton from "../components/icon-button";

import { MEALS } from "../data/dummy-data";

const MealDetails = () => {
	const route = useRoute();
	const navigation = useNavigation();

	const { mealId } = route.params;
	const meal = MEALS.find((meal) => meal.id === mealId);

	const onPressHandler = () => {};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: meal.title,
			headerRight: () => (
				<IconButton icon="star" color="#fff" onPress={onPressHandler} />
			),
		});
	}, [navigation]);

	return (
		<ScrollView style={styles.meal}>
			<Image style={styles.image} source={{ uri: meal.imageUrl }} />
			<Text style={styles.title}>{meal.title}</Text>

			<MealMetaDetails
				duration={meal.duration}
				complexity={meal.complexity}
				affordability={meal.affordability}
				textStyle={styles.metaText}
			/>

			<View style={styles.detailsContainer}>
				<View style={styles.details}>
					<MealSubtitle>Ingridients</MealSubtitle>
					<MealList data={meal.ingredients} />

					<MealSubtitle>Steps</MealSubtitle>
					<MealList data={meal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetails;

const styles = StyleSheet.create({
	meal: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	metaText: {
		color: "white",
	},
	detailsContainer: {
		alignItems: "center",
	},
	details: {
		width: "80%",
	},
});
