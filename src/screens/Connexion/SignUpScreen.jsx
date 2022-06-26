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
import { SignUpForm } from '../../components/SignUpForm';
import { useRegisterMutation } from '../../app/features/donator/donatorApi';

export const SignUp = () => {

  const navigation = useNavigation();

  // apis
  const [register, { data, loading, error }] = useRegisterMutation();

  const validationSchema = yup.object().shape({
    fullName : yup.string()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    bloodType: yup.string()
    .required('Blood type is required')
  });

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    bloodType : ''
  }

  const signUp = async (obj) => {
    let res = await register(obj); 
    // get only email from res.data
    let email = res.data;

    // let x = "test"
    console.log("res is :", res.data.email);
    navigation.navigate('SignIn', {
      paramKey: res.data.email,
    });
  }


  // useEffect(() => {
  //   console.log(values);
  // })

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
            <Text style={tw`text-3xl font-bold text-gray-700`}>Create New account</Text>
          </View>
          <View style={tw`mb-10`}>
            <View style={tw`flex flex-row`}>
              <View style={tw`h-2 w-10 rounded bg-red-400 mr-1`}></View>
              <View style={tw`h-2 w-3 rounded bg-gray-400 mr-1`}></View>
              <View style={tw`h-2 w-3 rounded bg-gray-400`}></View>
            </View>
          </View>

          <View style={tw``}>
          {/* FORMIK SECTION */}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, {resetForm}) => {
              await signUp(values);
              resetForm({values: initialValues});
            }}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <KeyboardAwareScrollView enableOnAndroid={true}>
                  
                  <SignUpForm handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched}></SignUpForm>
                  <View style={tw`flex items-center mt-8`}>
                    <TouchableOpacity style={tw`w-full bg-red-400 p-4 flex items-center rounded-md`} onPress={handleSubmit}>
                      <Text style={tw`text-md text-white w-full text-center`}>Sign Up!</Text>
                    </TouchableOpacity>
                  </View>
                  <Divider style={tw`my-6`}></Divider>
                  <View>
                    <Text style={tw`text-center text-gray-700`}>Already have an account? <Text style={[tw`text-red-400 `, {fontWeight : "bold"}]} onPress={() => navigation.navigate('SignIn')}>Login</Text></Text>
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