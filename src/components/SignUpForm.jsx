import { View, Text } from 'react-native'
import { TextInput} from 'react-native-paper'
import { COLORS } from '../constants/theme'
import tw from 'twrnc'
import React from 'react'

const SignUpForm = ({handleChange, handleBlur, values, errors, touched}) => {

  return (
    <>
            <TextInput
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                label="Full name"
                placeholder='Enter your FullName'
                mode="outlined"
                outlineColor={COLORS.black}
                selectionColor={COLORS.black}
                activeOutlineColor={COLORS.black}
                error={errors.fullName && touched.fullName}
                style={tw`mb-4`}
            /> 
                
                {errors.fullName && touched.fullName ? ( <Text style={COLORS.pink}>{errors.fullName}</Text> ) : null}

            <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                label="email"
                placeholder='Enter your email'
                mode="outlined"
                outlineColor={COLORS.green}
                selectionColor={COLORS.green}
                activeOutlineColor={COLORS.green}
                error={errors.email && touched.email}
                style={tw`mb-4`}
            />
                
                {errors.email && touched.email ? ( <Text style={COLORS.red}>{errors.email}</Text> ) : null}

              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                label="password"
                type="password"
                placeholder='Enter your password'
                mode="outlined"
                outlineColor={COLORS.green}
                selectionColor={COLORS.green}
                activeOutlineColor={COLORS.green}
                error={errors.password && touched.password}
                secureTextEntry={true}
                style={tw`mb-4`}
                />
                
                {errors.password && touched.password ? ( <Text style={COLORS.red}>{errors.password}</Text> ) : null}
    </>
  )
}

export { SignUpForm }