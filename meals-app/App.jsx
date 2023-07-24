import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import Categories from "./screens/categories";
import MealsOverview from "./screens/meals-overview";
import MealDetails from "./screens/meal-details";
import Favourites from "./screens/favourites";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#351401",
				},
				headerTintColor: "#fff",
				sceneContainerStyle: {
					backgroundColor: "#3f2f25",
				},
				drawerContentStyle: {
					backgroundColor: "#351401",
				},
				drawerInactiveTintColor: "white",
				drawerActiveTintColor: "#351401",
				drawerActiveBackgroundColor: "#e4baa1",
			}}
		>
			<Drawer.Screen
				name="Meals Categries"
				component={Categories}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favourites"
				component={Favourites}
				options={{
					title: "All Favourites",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

const App = () => {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#351401",
						},
						headerTintColor: "#fff",
						contentStyle: {
							backgroundColor: "#3f2f25",
						},
					}}
				>
					<Stack.Screen
						name="Drawer"
						component={DrawerNavigation}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Meals Overview"
						component={MealsOverview}
					/>
					<Stack.Screen name="Meal Details" component={MealDetails} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
