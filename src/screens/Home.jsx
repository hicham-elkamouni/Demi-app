import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
//navigation
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Ionicons } from '@expo/vector-icons';
import { Button, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { FloatingAction } from "react-native-floating-action";


const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);


  const actions = [
    {
      text: "Create Post",
      icon: require("./../../assets/png/heart.png"),
      name: "NewPost",
      position: 1
    },
  ]



  const cart = useSelector((state) => state.cart);

  const [Food, setFood] = useState([]);
  const [menu, setMenu] = useState([]);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getAllFood = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query:
        "query Query {\r\n  getAllProducts {\r\n    id\r\n    name\r\n    description\r\n    image\r\n    price\r\n    status\r\n    createdAt\r\n  }\r\n}",
      variables: {},
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };

    fetch("https://foodaly.herokuapp.com/gql", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setFood(result.data.getAllProducts);
      })
      .catch((error) => console.log("error", error));
  };

  // const getAllMenu = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var graphql = JSON.stringify({
  //     query:
  //       "query GetAllMenu {\r\n  getAllMenu {\r\n    id\r\n    name\r\n    productIds {\r\n      id\r\n      name\r\n      image\r\n    price\r\n    image\r\n    description}\r\n  }\r\n}",
  //     variables: {},
  //   });
  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: graphql,
  //     redirect: "follow",
  //   };

  //   fetch("https://foodaly.herokuapp.com/gql", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => setMenu(result.data.getAllMenu))
  //     .catch((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   getAllFood();
  //   getAllMenu();
  // }, [refreshing]);

  return (
    <View
    style={{
      flex: 1,
      position: "relative",
    }}
    >
     <FloatingAction
        actions={actions}
        color={COLORS.primary}
        onPressItem={name => {
          navigation.navigate("AddPost");
        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  map: {
    width: SIZES.width,
    height: SIZES.height,
  },
});
