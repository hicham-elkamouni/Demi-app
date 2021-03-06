import { View, Text, Image, Button, Alert  } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`flex items-center h-full w-full`}>
            <View style={tw`w-[90%] h-[70%] flex justify-center items-center mt-2`}>
                <Image source={require("../../../assets/logo/icon-logo.png")} style={tw`h-36 w-36 mb-2`}></Image>
                <Text style={tw`text-lg text-gray-600 text-center uppercase font-900 tracking-widest`}>welcome to demi app</Text>
            </View>
            <View>
                
            </View>
            <View style={tw`h-[20%] w-[90%] flex justify-evenly items-center`}>
                <TouchableOpacity style={tw`w-[80%] bg-red-400 p-4 flex items-center rounded-md`} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={tw`text-md text-white w-full text-center`}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`w-[80%] border-2 border-red-400 p-4 flex items-center rounded-md`} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={tw`text-md text-gray-600 w-full text-center`}>No account yet? <Text style={tw`text-red-400 `}>Sign up</Text></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};