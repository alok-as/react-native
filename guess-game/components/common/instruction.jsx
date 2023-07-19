import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Instruction = ({ style, children }) => {
	return <Text style={[styles.instruction, style]}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
	instruction: {
		fontFamily: "Open-Sans",
		color: Colors.ascent500,
		fontSize: 24,
	},
});
