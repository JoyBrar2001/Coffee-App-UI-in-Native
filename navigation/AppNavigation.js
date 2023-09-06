import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from '../screens/ProductScreen';
import HomeScreen from '../screens/HomeScreen';
import { themeColors } from '../theme/themeColors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				screenOptions={{
					contentStyle: { backgroundColor: 'white' }
				}}
			>
				<Stack.Screen name='Home' options={{ headerShown: false }} component={HomeTabs} />
				<Stack.Screen name='Product' options={{ headerShown: false }} component={ProductScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const HomeTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) =>({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
				tabBarStyle: {
					height: 80,
					marginVertical: 20,
					borderRadius: 50,
					backgroundColor: themeColors.bgLight,
				},
				tabBarItemStyle: {
					// marginTop: 30,
				}
			})}
		>
			<Tab.Screen name='home' options={{ headerShown: false }} component={HomeScreen} />
			<Tab.Screen name='favourite' options={{ headerShown: false }} component={HomeScreen} />
			<Tab.Screen name='cart' options={{ headerShown: false }} component={HomeScreen} />
		</Tab.Navigator>
	)
}

const menuIcons = (route, focused) => {
	let icon;
	if(route.name == 'home'){
		icon = focused ? <Ionicons name="home" size={30} color={themeColors.bgLight} /> : <Ionicons name="home-outline" size={30} color={themeColors.bgDark} />
	}
	else if(route.name == "favourite"){
		icon = focused ? <FontAwesome name="heart" size={30} color={themeColors.bgLight} /> : <FontAwesome name="heart-o" size={30} color={themeColors.bgDark} />
	}
	else if(route.name == "cart"){
		icon = focused ? <Entypo name="shopping-bag" size={30} color={themeColors.bgLight} /> : <Feather name="shopping-bag" size={30} color={themeColors.bgDark} />
	}
	let buttonClass = focused ? 'white' : '';
	return(
		<View
			// className={`flex items-center rounded-full p-3 shadow ${buttonClass}`}
			style={{
				display: 'flex',
				alignItems: 'center',
				borderRadius: 60,
				padding: 12,
				backgroundColor: buttonClass,
			}}
		>
			{icon}
		</View>
	)
}

export default AppNavigation;