import React from 'react'
import { Text ,TextInput,View , TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { COLORS, FONTS, SHADOW } from '../constants/theme'
import {Fontisto} from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Motion } from "@legendapp/motion"



export const BloodContainer = ({item}) => {
    const [checkedPlus, setCheckedPlus] = React.useState(false)
    const [checkedMinus, setCheckedMinus] = React.useState(false)

    const onPressPlus = () => {
        setCheckedPlus(!checkedPlus)
    }
    const onPressMinus = () => {
        setCheckedMinus(!checkedMinus)
    }


                    return(
                        <View
                        
                        style={[tw`my-1 w-[46%] p-2 items-center rounded-lg rounded-lg`,{backgroundColor :'#fff'}]}
                        >
                            <View
                            style={[tw`flex-row`]}
                            >
                            <CheckBox
                            checked={checkedPlus}
                            onPress={onPressPlus}
                            checkedColor={COLORS.primary}
                            />
                            <Text>{item} +</Text>
                                </View>
                            <View
                            style={[tw`flex-row`]}
                            
                            >
                            <CheckBox
                            checked={checkedMinus}
                            onPress={onPressMinus}
                            checkedColor={COLORS.primary}
                            />
                            <Text>{item} -</Text>
                            </View>
                        </View>
                    )

                }



const AddPost = ({navigation}) => {

    const BloodTypes = [
        'A','B','AB','O'
    ]

const [sizeBlood , setSizeBlood] = React.useState(70)

const whileScrollResize = (event) => {
    if (event.nativeEvent.contentOffset.y > 0) {
        setSizeBlood(30)
    } else {
        setSizeBlood(84)
    }
}





  return (
    <SafeAreaView
    style={{
        flex:1
    }}
    >

    <KeyboardAwareScrollView
    onKeyboardWillShow={(frames) => {
        console.log('Keyboard event', frames)
      }}
        onKeyboardWillHide={(frames) => {
        console.log('Keyboard event', frames)
        }}
        onScroll={whileScrollResize}

    style={[tw` p-3`,{
        flex:1,
    }]}
    >
        <View
        style={[tw``,{
            flex:1,
        }]}
        >
            <View
            style={[tw`flex-row justify-between items-center border-solid border-b-2 border-gray-300 p-3`]}
            >
                <View
                style={[tw`flex-row items-center`]}
                >
                    <TouchableOpacity
                    style={[tw``]}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Fontisto name="close-a" size={20} color={COLORS.black} />
                    </TouchableOpacity>
                    <Text
                        style={[tw`text-lg font-bold ml-2 `]}
                        >
                        Create Post
                    </Text>
                </View>
                    <TouchableOpacity
                        >

                    <Text
                    style={[tw`text-lg capitalize font-bold ml-2 `]}
                    >
                        Post

                    </Text>
                        </TouchableOpacity>

            </View>
            <View
            style={[tw`w-full mt-6 justify-center`]}
            >
                <View
                style={[tw`flex-row justify-center`]}
                >
                    <TouchableOpacity>
                        <Fontisto name="blood-drop" size={sizeBlood} 
                        style={[tw` text-center `]}
                        color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text
            style={[tw`text-2xl font-bold mb-6 mt-10`]}
            >
                Please Pick A BLOOD TYPE

            </Text>
            <View
            style={[tw`flex-row flex-wrap justify-evenly  w-full` ]}
            >
                {BloodTypes.map((item,index)=>
                    <BloodContainer item={item} key={index} />
                
                )}
            </View>
            <View
            style={{...SHADOW.medium}}
            >
                    <Text style={[tw`text-2xl font-bold mb-6 mt-10`]}>
                        What's on your mind?
                        </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={[tw`border-solid text-lg font-bold bg-white border-2 border-gray-300 p-2 rounded-lg`,{ height:200, textAlignVertical: 'top',}]}
                    />
            </View>
            
        </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>

)
}

export default AddPost