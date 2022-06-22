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
import { PharmacyInfo } from "../components/modals/PharmacyInfo";
import { CardFood } from "../components/CardFood";
import { MenuCardFood } from "../components/MenuCardFood";
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

  const getAllMenu = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query:
        "query GetAllMenu {\r\n  getAllMenu {\r\n    id\r\n    name\r\n    productIds {\r\n      id\r\n      name\r\n      image\r\n    price\r\n    image\r\n    description}\r\n  }\r\n}",
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
      .then((result) => setMenu(result.data.getAllMenu))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllFood();
    getAllMenu();
  }, [refreshing]);

  return (
    <View
    style={{
      flex: 1,
      position: "relative",
    }}
    >
      
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{ flex: 1 }}
    >
     
      <View
        style={[
          tw`w-full p-5`,
          {
            backgroundColor: COLORS.primary,
          },
        ]}
      >
        
        <View style={[tw`w-full py-4 justify-between items-end flex-row`]}>
          <View>
            <Text style={[tw`text-base text-white capitalize font-bold`]}>
              dimanche
            </Text>
            <Text style={[tw`text-6xl mt-1 text-white capitalize font-black`]}>
              Sept. 19
            </Text>
          </View>
          <View>
            <Image
              source={require("../../assets/png/smileGirl.png")}
              style={[tw`h-12 w-12 rounded-full mb-2`]}
            />
          </View>
        </View>
        {/* <ScrollView horizontal style={tw`w-full mb-6 `}>
          {Array(10).fill(0).map((e, i) => (
            <View
              key={i}
              style={[tw`w-[60px] h-[60px] mr-2 mt-2 bg-blue-500 rounded-full`]}
            />
          ))}
        </ScrollView> */}

        <Image
          source={require("../../assets/png/ads.jpg")}
          style={[tw`w-full h-[250px] rounded-xl bg-gray-600 mb-6`]}
        />
      </View>

      <View style={tw`-mt-6 bg-gray-200 rounded-t-5 w-full `}>
        <View style={tw`w-full  p-2 items-center`}>
          <View style={tw`p-1 w-[40px] rounded-full bg-gray-600 `}></View>
        </View>

        <View style={tw`p-3  pt-4 w-full `}>
          <Text style={tw`text-3xl font-bold pl-3`}>Nos legumes</Text>
        </View>

        <View style={tw`p-3 flex-wrap flex-row w-full  justify-evenly pt-0`}>
          {Food.length === 0 && true == false && (
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 200,
                height: 200,
                backgroundColor: "#eee",
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require("../../assets/lottie/loading.json")}
            />
          )}
          {Food?.map((item, index) => (
            <CardFood key={index} {...{ ...item, Food }} />
          ))}
        </View>
        <View style={tw`p-3  pt-4 `}>
          <Text style={tw`text-3xl font-bold mb-6 mt-10`}>Our Menu</Text>

          {menu.map((_, idx) => {
            return (
              <MenuCardFood
                key={idx}
                menu={_}
                navigation={navigation}
                Food={Food}
              />
            );
          })}
        </View>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
      {/* <View
      style={[
        tw`shadow-md justify-center bottom-10 right-10 z-50 rounded-full items-center absolute`,
      ]}>
      <View
        style={[
          {
            backgroundColor: COLORS.primary,
          },
          tw`justify-center  items-center rounded-full w-14 h-14`,
        ]}>
        <Ionicons name='create-outline' size={24} color='white' />
      </View>
    </View> */}
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
