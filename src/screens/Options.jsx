import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Button, Menu, Divider, Provider, List } from "react-native-paper";
import { useDispatch } from "react-redux";
import { checkDarkMode } from "../app/features/user/userSlice";

const Options = () => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity>
        <Text>Toggle Dark Mode</Text>
      </TouchableOpacity>
      <Divider />
    </View>
  );
};
export default Options;
