import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, Platform, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import Profile from "../screens/Profile";

import { TabBarIcon, MapButton } from "../components/index";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Homeee from "../screens/Homeee";
import Settings from "../screens/Settings";
import AddPost from "../screens/AddPost";
import { Welcome , SignIn, SignUp } from "../screens/Connexion/Index";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const cart = useSelector((state) => state.cart);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === "ios" ? 80 : 60,
        },
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              Icon={<Ionicons name="heart-outline" size={24} color="black" />}
              name="Profile"
              source={require("../../assets/png/user.png")}
              isFocuse={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="Food"
              source={require("../../assets/png/food.png")}
              isFocuse={focused}
            />
          ),
        }}
      ></BottomTab.Screen>

      <BottomTab.Screen
        name="Home"
        component={Home}
        listeners={["tabPress"]}
        options={{
          title: "Demi",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          onPress: () => {
            console.log("clicked");
          },
          headerTitleStyle: {
            color: COLORS.primary,
            ...FONTS.h2,
          },
          tabBarIcon: ({ focused }) => <MapButton isFocuse={focused} />
        }}
      />
      <BottomTab.Screen
        name="Commande"
        component={Homeee}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={"Commandes"}
              source={require("../../assets/png/cart.png")}
              isFocuse={focused}
              lengthOfProducts
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="Réglages"
              source={require("../../assets/png/settings.png")}
              isFocuse={focused}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}



function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Connexion"
        component={Connexion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Connexion() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
