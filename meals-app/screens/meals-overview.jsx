import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Meal from "../components/meal";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverview = () => {
	const route = useRoute();
	const navigation = useNavigation();

	const { categoryId } = route.params;
	const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

	useLayoutEffect(() => {
		const title = CATEGORIES.find(
			(category) => category.id === categoryId
		).title;

		navigation.setOptions({
			title,
		});
	}, [navigation, categoryId]);

	const renderItem = ({ item }) => {
		const onPressHandler = () => {
			navigation.navigate("Meal Details", { mealId: item.id });
		};

		return (
			<Meal
				key={item.id}
				title={item.title}
				imageUrl={item.imageUrl}
				duration={item.duration}
				affordability={item.affordability}
				complexity={item.complexity}
				onPress={onPressHandler}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={meals}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default MealsOverview;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
