import { Text, View, Image } from "react-native";
import tw from "twrnc";
import { COLORS } from "../constants/theme";
import { useSelector } from "react-redux";

export const TabBarIcon = ({ name, source, isFocuse,lengthOfProducts = false, Icon }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <View style={tw`justify-center relative items-center flex-col`}>
      <Image
        source={source}
        resizeMode="contain"
        style={[
          tw`w-6 h-6`,
          { tintColor: isFocuse ? COLORS.primary : "#738c94" },
        ]}
      />
      <Text
        style={[
          tw`font-semibold mt-1 text-xs`,
          { color: isFocuse ? COLORS.primary : "#738c94" },
        ]}
      >
        {name}

        {lengthOfProducts && (
          <View
            style={[
              tw`px-1 absolute top-0 -right-2 rounded-full `,
              { backgroundColor: COLORS.primary },
            ]}
          >
            <Text style={tw`text-white`}>{cart?.allFood?.length}</Text>
          </View>
        )}
      </Text>
    </View>
  );
};
