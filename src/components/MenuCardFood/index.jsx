import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { COLORS } from "../../constants/theme";

const Card = ({ navigation, item, Food }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <View style={tw`items-center m-3`}>
      <TouchableOpacity
        onPress={() => {
          navigation.push("FoodInfo", {
            name: item.name,
            image: item.image,
            isFav: true,
            price: item.price,
            rating: 4,
            description: item.description,
            food: Food,
          });
        }}
        style={tw`w-[110px] h-[110px]`}
      >
        {imageLoaded && (
          <View
            style={tw`w-full  h-full bg-gray-50 rounded-full justify-center items-center`}
          >
            <ActivityIndicator size="small" color="#ff0000" />
          </View>
        )}
        <Image
          onLoadEnd={() => {
            setImageLoaded(false);
          }}
          style={tw`w-full h-full bg-gray-200 rounded-full`}
          source={{
            uri: item.image[0],
          }}
        />
      </TouchableOpacity>
      <Text style={tw`text-xl font-bold`}>{item.name}</Text>
    </View>
  );
};

export const MenuCardFood = ({ menu, navigation, Food }) => {
  return (
    <View style={tw`border-gray-200 border-t-2 my-4 `}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-3xl font-bold mt-6`}>{menu.name}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.push("MenuInfo", {
              name: menu.name,
              id: menu.id,
              food: menu.productIds,
              Food: Food,
            });
          }}
          style={[tw` text-sm rounded-full p-1`, { backgroundColor: COLORS.primary }]}
        >
          <Text style={tw`text-sm  text-white`}>View More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={tw`w-full `}>
        {menu.productIds.map((item, index) => (
          <Card key={index} navigation={navigation} item={item} Food={Food} />
        ))}
      </ScrollView>
    </View>
  );
};
