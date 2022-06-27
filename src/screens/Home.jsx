import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Divider } from "react-native-paper";
import { PostCard } from "../components/PostCard.jsx";
import { FloatingAction } from "react-native-floating-action";
import { COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useGetPostsQuery } from "../app/features/donator/postApi.js";

const Home = () => {
  const navigation = useNavigation();

  const { data, loading, error } = useGetPostsQuery();

  const actions = [
    {
      text: "Create Post",
      icon: require("./../../assets/png/heart.png"),
      name: "NewPost",
      position: 1,
    },
  ];

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >

      <View style={tw`mt-4 mb-6 w-full`}>
        <ScrollView>
          {data && 
            data.map((post, index) => {
              return (
                <View key={index}>
                  <PostCard key={index} post={post}/>
                </View>
              );
            })}
        </ScrollView>
      </View>

      <FloatingAction
        actions={actions}
        color={COLORS.primary}
        onPressItem={(name) => {
          navigation.navigate("AddPost");
        }}
      />
    </View>
  );
};

export default Home;
