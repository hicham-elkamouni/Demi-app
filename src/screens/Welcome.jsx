import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Welcome = () => {
    return (
        <SafeAreaView>
            <View style={tw`w-4/5 h-36 flex flex-row justify-center mt-5`}>
                <TouchableOpacity>
                <View style={tw`border-4 border-red-600 h-26 w-26 rounded-full flex flex-row justify-center items-center`}>
                    <Text style={tw`text-2xl`}>A+</Text>
                </View>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};