import React, { useState } from "react";
import { Dimensions } from "react-native";
import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";
import tw from "twrnc";
import { COLORS } from "../../constants/theme";
import { SharedElement } from "react-navigation-shared-element";

export const CardFood = ({
  name,
  image,
  isFav,
  price,
  rating,
  description,
  Food,
  id
}) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const [imageLoaded, setImageLoaded] = useState(true);

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("FoodInfo", {
          name: name,
          id: id,
          image: image,
          isFav: isFav,
          price: price,
          rating: rating,
          description: description,
          food: Food,
        });
      }}
      style={[
        tw`p-3  items-center  m-1 w-[45%] rounded-lg bg-white my-2`,
        { maxWidth: windowWidth * 0.45 },
        style.shadow,
        { color: COLORS.primary },
      ]}
    >
      <View style={tw`w-[110px] h-[110px]`}>
        {imageLoaded && (
          <View
            style={tw`w-full bg-gray-50 rounded-full h-full justify-center items-center`}
          >
            <ActivityIndicator size="small" color="#ff0000" />
          </View>
        )}
       
          <Image
            source={{
              uri: image[0],
            }}
            onLoad={() => {
              setImageLoaded(false);
            }}
            style={tw`w-full h-full rounded-full`}
          />
      </View>
      <Text style={tw`text-xl font-bold`}>{name}</Text>
      <Text style={tw`text-xl `}>{price} Dh</Text>
      <View
        style={tw`absolute top-2 right-2 flex-row items-center justify-center`}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(
              addToCart({
                product: {
                  name: name,
                  image: image,
                  price: price,
                },
                quantity: 1,
              })
            );
          }}
        >
          <Ionicons name="md-cart" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
