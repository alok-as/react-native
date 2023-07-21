import { useState, useCallback } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import StartGame from "./screens/start-game";
import GameScreen from "./screens/game-screen";
import Colors from "./constants/colors";
import GameOver from "./screens/game-over";

SplashScreen.preventAutoHideAsync();

const App = () => {
	const [userNumber, setUserNumber] = useState();
	const [isGameOver, setIsGameOver] = useState(false);
	const [noOfRounds, setNoOfRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		"Open-Sans": require("./assets/OpenSans-Regular.ttf"),
		"Open-Sans-Bold": require("./assets/OpenSans-Bold.ttf"),
	});

	const onStartGameHandler = (number) => setUserNumber(number);

	const onEndGameHandler = (noOfRounds) => {
		setIsGameOver(true);
		setNoOfRounds(noOfRounds);
	};

	const onResetGameHandler = () => {
		setUserNumber();
		setNoOfRounds(0);
		setIsGameOver(false);
	};

	let screen = <StartGame onStartGame={onStartGameHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onEndGame={onEndGameHandler} />
		);
	}

	if (userNumber && isGameOver) {
		screen = (
			<GameOver
				userNumber={userNumber}
				noOfRounds={noOfRounds}
				onResetGame={onResetGameHandler}
			/>
		);
	}

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<LinearGradient
				style={styles.container}
				colors={[Colors.primary700, Colors.ascent500]}
				onLayout={onLayoutRootView}
			>
				<ImageBackground
					source={require("./assets/background.png")}
					style={styles.container}
					imageStyle={styles.image}
					resizeMode="cover"
				>
					<SafeAreaView style={styles.container}>
						{screen}
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
			<StatusBar style="auto" />
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		opacity: 0.15,
	},
});

export default App;
