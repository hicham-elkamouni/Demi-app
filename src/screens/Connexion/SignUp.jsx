import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import { TextInput} from 'react-native-paper'
import { COLORS } from '../../constants/theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native';

export const SignUp = () => {

  const navigation = useNavigation();

  const validationSchema = yup.object().shape({
    fullName : yup.string()
    .label('fullName')
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  const initialValues = {
    fullName: '',
    email: '',
    password: ''
  }

  return (
    
    <SafeAreaView style={tw``}>
      <View style={tw`h-full w-full flex items-center justify-center`}>
        <View style={tw`w-[90%] h-[90%] rounded`}>
          <View style={tw`w-full mb-4`}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={40} color="black" />
            </TouchableOpacity>
          </View>
          <View style={tw`w-1/2 mb-3`}>
            <Text style={tw`text-3xl font-bold text-gray-500`}>Create New account</Text>
          </View>
          <View style={tw`mb-20`}>
            <View style={tw`flex flex-row`}>
              <View style={tw`h-2 w-10 rounded bg-red-400 mr-1`}></View>
              <View style={tw`h-2 w-3 rounded bg-gray-400 mr-1`}></View>
              <View style={tw`h-2 w-3 rounded bg-gray-400`}></View>
            </View>
          </View>
        <KeyboardAwareScrollView>
          <View style={tw`mb-4`}>
          {/* FORMIK SECTION */}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, {resetForm}) => {
              console.log(' values isssss', values);
              resetForm({values: initialValues});
            }}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
              <TextInput
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                label="fullName"
                placeholder='Enter your FullName'
                mode="outlined"
                outlineColor={COLORS.green}
                selectionColor={COLORS.green}
                activeOutlineColor={COLORS.green}
                error={errors.fullName && touched.fullName}
                style={tw`bg-transparent mb-4`}
                /> 
                
                {errors.fullName && touched.fullName ? ( <Text style={tw`text-red-900`}>{errors.fullName}</Text> ) : null}

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
                style={tw`bg-transparent mb-4`}
                />
                
                {errors.email && touched.email ? ( <Text style={tw`text-red-900`}>{errors.email}</Text> ) : null}

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
                style={tw`bg-transparent`}
                />
                
                {errors.password && touched.password ? ( <Text style={tw`text-red-900`}>{errors.password}</Text> ) : null}

                <View style={tw`flex items-center mt-14`}>
                  <TouchableOpacity style={tw`w-[80%] bg-red-400 p-4 flex items-center rounded-md`} onPress={() => handleSubmit}>
                    <Text style={tw`text-md text-white w-full text-center`}>Sign Up!</Text>
                  </TouchableOpacity>
                </View>
                </>
            )}
        
            </Formik>
          </View>
        </KeyboardAwareScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}