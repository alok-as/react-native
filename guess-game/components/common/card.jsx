import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		marginHorizontal: 24,
		marginTop: 36,
		padding: 16,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.25,
		alignItems: "center",
	},
});

export default Card;
