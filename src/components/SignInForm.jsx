import { View, Text } from 'react-native'
import { TextInput} from 'react-native-paper'
import { COLORS } from '../constants/theme'
import tw from 'twrnc'
import { useState} from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { useEffect } from 'react'

const SignInForm = ({handleChange, handleBlur, values, errors, touched}) => {


  useEffect(() => {
    console.log("useEffssect is ",values);
  } , [values])


  return (
    <>

      <View style={tw`flex justify-between w-full`}>

            <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                label="email"
                placeholder='Enter your email'
                mode="outlined"
                outlineColor={COLORS.gray}
                selectionColor={COLORS.gray}
                activeOutlineColor={COLORS.gray}
                error={errors.email && touched.email}
                style={tw`mb-2`}
            />
                
                {errors.email && touched.email ? ( <Text style={tw`text-red-500 mb-2`}>{errors.email}</Text> ) : null}

              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                label="password"
                type="password"
                placeholder='Enter your password'
                mode="outlined"
                outlineColor={COLORS.gray}
                selectionColor={COLORS.gray}
                activeOutlineColor={COLORS.gray}
                error={errors.password && touched.password}
                secureTextEntry={true}
                style={tw`mb-2`}
                />
                
                {errors.password && touched.password ? ( <Text style={tw`text-red-500 `}>{errors.password}</Text> ) : null}

            </View>
    </>
  )
}

export { SignInForm }