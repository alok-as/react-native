import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./goal-item";

const GoalsList = ({ goals, deleteGoal }) => {
	return (
		<View style={styles.goals}>
			<FlatList
				data={goals}
				renderItem={({ item }) => (
					<GoalItem
						text={item.text}
						onPress={() => deleteGoal(item.id)}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	goals: {
		flex: 1,
	},
	goal: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	text: {
		color: "white",
	},
});

export default GoalsList;
