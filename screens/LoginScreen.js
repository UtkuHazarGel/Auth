import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView>
      <View>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Şifre'/>

      
      </View>
      <View>
      <TouchableOpacity>
          <Text> Giriş yap</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> Kayıt ol</Text>
        </TouchableOpacity>
      </View>
     
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({})