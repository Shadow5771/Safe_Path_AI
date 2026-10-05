// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import DashboardScreen from "./screens/DashboardScreen";
import MapScreen from "./screens/MapScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: "#0b0b0b", height: 64, paddingBottom: 6, paddingTop: 6 },
          tabBarActiveTintColor: "#0ff",
          tabBarInactiveTintColor: "#666",
          tabBarIcon: ({ color, size }) => {
            let iconName = "circle";
            if (route.name === "Dashboard") iconName = "view-dashboard";
            else if (route.name === "Map") iconName = "map";
            else if (route.name === "Leaderboard") iconName = "trophy";
            else if (route.name === "Profile") iconName = "account";
            return <Icon name={iconName} color={color} size={24} />;
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
