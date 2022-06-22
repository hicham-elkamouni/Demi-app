import React from 'react'
import { Button, Text ,View } from 'react-native'

export const Auth = ({navigation})=>{
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Auth</Text>
        <Button title="Login" onPress={()=>{
          navigation.navigate('Root')
        }}/>
      </View>
    )
  }
