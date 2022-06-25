import { View, Text } from 'react-native'
import { TextInput} from 'react-native-paper'
import { COLORS } from '../constants/theme'
import tw from 'twrnc'
import { useState, useEffect} from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { RadioButton } from 'react-native-paper';

const SignUpForm = ({handleChange, handleBlur, values, errors, touched}) => {

  // select value
  const [bloodType, setBloodType] = useState('');

  // array of blood types
  const bloodTypes = [
    { label: 'A+', value: 'A+' },
    { label: 'A-', value: 'A-' },
    { label: 'B+', value: 'B+' },
    { label: 'B-', value: 'B-' },
    { label: 'AB+', value: 'AB+' },
    { label: 'AB-', value: 'AB-' },
    { label: 'O+', value: 'O+' },
    { label: 'O-', value: 'O-' },
  ];


  const placeholder = {
    label: 'Select your blood type',
    value: null,
    color: '#4b5563',
  };


  return (
    <>

      <View style={tw`flex justify-between w-full`}>
            <TextInput
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                label="Full name"
                placeholder='Enter your FullName'
                mode="outlined"
                outlineColor={COLORS.gray}
                selectionColor={COLORS.gray}
                activeOutlineColor={COLORS.gray}
                error={errors.fullName && touched.fullName}
                style={tw`mb-2`}
            /> 
                
                {errors.fullName && touched.fullName ? ( <Text style={tw`text-red-500 mb-2`}>{errors.fullName}</Text> ) : null}

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

                    {/* FIRST PART */}
                    <View style={tw`flex flex-row justify-around`}>
                      
                      {/* {
                        bloodTypes.map((bloodType, index) => {
                          return (
                            <View style={tw`flex flex-row items-center`}>
                              <RadioButton
                                key={index}
                                value={bloodType.value}
                                label={bloodType.label}
                                onPress={() => setBloodType(bloodType.value)}
                                checked={bloodType.value === bloodType}
                              />
                              <Text style={tw`text-lg`}>{bloodType.value}</Text>
                            </View>
                          )
                          }
                        )
                      } */}
                      
                        <View style={tw`flex flex-row items-center`}>
                          <RadioButton
                            value={bloodTypes[0].value}
                            status={ bloodType === 'A+' ? 'checked' : 'unchecked' }
                            onPress={() => setBloodType('A+')}
                            />
                          <Text style={tw`text-lg`}>A+</Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                          <RadioButton
                            value={bloodTypes[1].value}
                            status={ bloodType === 'A-' ? 'checked' : 'unchecked' }
                            onPress={() => setBloodType('A-')}
                          />
                          <Text style={tw`text-lg`}>A-</Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                          <RadioButton
                            value={bloodTypes[2].value}
                            status={ bloodType === 'B+' ? 'checked' : 'unchecked' }
                            onPress={() => setBloodType('B+')}
                            />
                          <Text style={tw`text-lg`}>B+</Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                          <RadioButton
                            value={bloodTypes[3].value}
                            status={ bloodType === 'B-' ? 'checked' : 'unchecked' }
                            onPress={() => setBloodType('B-')}
                          />
                          <Text style={tw`text-lg`}>B-</Text>
                        </View>
                  </View>

                  {/* SECOND PART */}
                    <View style={tw`flex flex-row justify-around`}>
                        <View style={tw`flex flex-row items-center`}>
                          <RadioButton
                            value={bloodTypes[4].value}
                            status={ bloodType === 'AB+' ? 'checked' : 'unchecked' }
                            onPress={() => setBloodType('AB+')}
                            />
                          <Text style={tw`text-lg`}>AB+</Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                          <RadioButton
                            value={bloodTypes[5].value}
                            status={ bloodType === 'AB-' ? 'checked' : 'unchecked' }
                            onPress={() => setBloodType('AB-')}
                          />
                          <Text style={tw`text-lg`}>AB-</Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                          <RadioButton
                            value={bloodTypes[6].value}
                            status={ bloodType === 'O+' ? 'checked' : 'unchecked' }
                            onPress={() => setBloodType('O+')}
                            />
                          <Text style={tw`text-lg`}>O+</Text>
                        </View>
                        <View style={tw`flex flex-row items-center`}>
                          <RadioButton
                            value={bloodTypes[7].value}
                            status={ bloodType === 'O-' ? 'checked' : 'unchecked' }
                            onPress={() => setBloodType('O-')}
                          />
                          <Text style={tw`text-lg`}>O-</Text>
                        </View>
                    
                  </View>
              
              </View>
    </>
  )
}

export { SignUpForm }