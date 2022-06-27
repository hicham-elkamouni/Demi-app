import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { Divider } from 'react-native-paper'
import { PostCard } from '../components/PostCard.jsx'
import { FloatingAction } from "react-native-floating-action";
import { COLORS } from '../constants/theme'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  const actions = [
    {
      text: "Create Post",
      icon: require("./../../assets/png/heart.png"),
      name: "NewPost",
      position: 1
    },
  ]

  return (

    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >


  
    <View style={tw`mt-4 mb-6 w-full`}>
      <ScrollView>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </ScrollView>
    </View>

    

    <FloatingAction
        actions={actions}
        color={COLORS.primary}
        onPressItem={name => {
          navigation.navigate("AddPost");
        }}
      />



    </View>
  )
}

export default Home