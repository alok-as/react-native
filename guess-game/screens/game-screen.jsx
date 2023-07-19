import { View, Text, StyleSheet } from "react-native";

const GameScreen = ({ number }) => {
	return (
		<View>
			<Text>Game Screen - {number}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default GameScreen;
