import { FlatList } from "react-native";
import CategoryTile from "../components/category-tile";

import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
	const navigation = useNavigation();

	const renderItem = ({ item }) => {
		const onPressHandler = () => {
			navigation.navigate("Meals Overview", { categoryId: item.id });
		};

		return (
			<CategoryTile
				title={item.title}
				color={item.color}
				onPress={onPressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	);
};

export default Categories;
