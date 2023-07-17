import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import GoalsForm from "./components/goals-form";
import GoalsList from "./components/goals-list";
import { StatusBar } from "expo-status-bar";

const App = () => {
	const [goals, setGoals] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModalHandler = () => setIsModalOpen(true);
	const clsoeModalHandler = () => setIsModalOpen(false);

	const addGoalHandler = (value) =>
		setGoals((goals) => [
			...goals,
			{ text: value, id: Math.random().toString() },
		]);

	const deleteGoalHandler = (id) =>
		setGoals((goals) => goals.filter((goal) => goal.id !== id));

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.container}>
				<Button
					title="Add New Goal"
					color="#a065ec"
					onPress={openModalHandler}
				/>
				<GoalsForm
					addGoal={addGoalHandler}
					isOpen={isModalOpen}
					closeModal={clsoeModalHandler}
				/>
				<GoalsList goals={goals} deleteGoal={deleteGoalHandler} />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingHorizontal: 16,
		flex: 1,
	},
});

export default App;
