import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";

import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/start-game";
import GameScreen from "./screens/game-screen";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const startGameHandler = (number) => setUserNumber(number);

	let screen = <StartGame onStartGame={startGameHandler} />;

	if (userNumber) {
		screen = <GameScreen number={userNumber} />;
	}

	return (
		<>
			<LinearGradient
				style={styles.container}
				colors={["#4e0329", "#ddb52f"]}
			>
				<ImageBackground
					source={require("./assets/background.png")}
					style={styles.background}
					imageStyle={styles.image}
					resizeMode="cover"
				>
					{screen}
				</ImageBackground>
			</LinearGradient>
			<StatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
	},
	image: {
		opacity: 0.15,
	},
});
