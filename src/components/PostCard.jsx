import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Divider } from "react-native-paper";

const PostCard = ({ post }) => {
  return (
    <View style={tw`flex items-center mb-4`}>
      <View style={tw`w-[90%] border-2 border-red-200 rounded-md p-2 bg-white`}>
        <View style={tw``}>
          {/* POST HEADER */}
          <View style={tw`flex flex-row items-center mb-4`}>
            <Image
              source={require("../../assets/blank-profile-picture.png")}
              style={tw`h-12 w-12 rounded-full border-2 border-red-200 mr-4`}
            ></Image>
            <View>
              <Text style={tw`text-lg text-gray-600 font-bold tracking-wider`}>
                John Doe
              </Text>
              <Text style={[tw`text-[4] text-gray-600 `, { fontSize: 14 }]}>
                26-07-2022
              </Text>
            </View>
          </View>

          {/* POST CONTENT */}
          <View style={tw``}>
            <Text style={[tw`mb-2`, { fontSize: 20 }]}>
              {post.description}
            </Text>

            {/* BLOOD TYPES */}
            <View style={tw`flex flex-row`}>
              <View
                style={tw`rounded-full border-2 border-red-400 h-10 w-10 flex items-center justify-center mr-2`}
              >
                <Text style={tw`font-bold text-lg text-red-400`}>{post.bloodType}</Text>
              </View>
            </View>

            {/* PICTURE */}
            <View
              style={tw`flex flex-row justify-around mt-3 mb-2 overflow-hidden	rounded-md`}
            >
              <Image
                source={require("../../assets/blood-donation.jpg")}
                style={tw`h-60 w-90 rounded-md`}
              ></Image>
            </View>

            {/* DIVIDER */}
            <Divider style={tw`h-0.5 rounded-full mb-2`} />

            {/* ICONS */}
            <View style={tw`w-full flex flex-row`}>
              <View style={tw`w-4/5 flex flex-row`}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/post-icons/love.png")}
                    style={tw`h-6 w-6 mr-2`}
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/post-icons/chat-balloon.png")}
                    style={tw`h-6 w-6`}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={tw`w-1/5`}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/post-icons/send.png")}
                    style={tw`w-6 h-6 self-end`}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export { PostCard };
