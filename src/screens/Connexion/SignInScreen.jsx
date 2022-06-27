import { View, Text, Button } from 'react-native'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import { Divider } from 'react-native-paper'
import { COLORS } from '../../constants/theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native';
import { SignInForm } from '../../components/SignInForm';
import { useLoginMutation } from '../../app/features/donator/donatorApi';
import { useDispatch } from "react-redux"
import { setToken } from "../../app/features/donator/userSlice"


export const SignIn = ({  }) => {
  
    const navigation = useNavigation();
    let dispatch = useDispatch()
    const [ login, { data, loading, error }] = useLoginMutation();

  const validationSchema = yup.object().shape({
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
    email: '',
    password: ''
  }

  // api for login
  const signIn = async (obj) => {
    try{

      console.log("sign in obj is :", obj);
      let res = await login(obj);
      if (res.data) {
        console.log("res is :", res.data.token);
        await dispatch(setToken({userToken:res.data.token}))
        navigation.navigate('Root');
      }
    }catch(e){
      console.log("error is :", e);
    }

  }


  return (
    
    <SafeAreaView style={tw``}>
      <View style={tw`h-full w-full flex items-center justify-center`}>
        <View style={tw`w-[90%] h-[90%] rounded`}>
          <View style={tw`w-full mb-14`}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <View style={tw`w-1/2 mb-3`}>
            <Text style={tw`text-3xl font-bold text-gray-700`}>Welcome Back !</Text>
          </View>
          <View style={tw`mb-20`}>
            <View style={tw`flex flex-row`}>
              <View style={tw`h-2 w-3 rounded bg-gray-400 mr-1`}></View>
              <View style={tw`h-2 w-10 rounded bg-red-400 mr-1`}></View>
              <View style={tw`h-2 w-3 rounded bg-gray-400`}></View>
            </View>
          </View>
  
          <View style={tw``}>
          {/* FORMIK SECTION */}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, {resetForm}) => {
              signIn(values);
              resetForm({values: initialValues});
            }}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <KeyboardAwareScrollView enableOnAndroid={true}>
                  
                  <SignInForm handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched}></SignInForm>

                  <View style={tw`flex items-center mt-8`}>
                    <TouchableOpacity style={tw`w-full bg-red-400 p-4 flex items-center rounded-md`} onPress={handleSubmit}>
                      <Text style={tw`text-md text-white w-full text-center`}>Sign In!</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={tw`mt-6 flex items-center`}>
                    <Text style={[tw`text-red-400 `, {fontWeight : "bold"}]} onPress={() => console.log("to forgot password screen ...")}>Forgot Password ?</Text>
                  </View>
                  <Divider style={tw`my-6`}></Divider>
                  <View>
                    <Text style={tw`text-center text-gray-700`}>don't have an account? <Text style={[tw`text-red-400 `, {fontWeight : "bold"}]} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></Text>
                  </View>
                </KeyboardAwareScrollView>
              </>
            )}
          
            </Formik>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

