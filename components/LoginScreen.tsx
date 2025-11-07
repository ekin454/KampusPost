import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomInput from './CustomInput';
import { Alert } from 'react-native';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    function alert(arg0: string) {
        throw new Error('Function not implemented.');
    }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>KampüsPost’a Hoş Geldiniz!</Text>
      <Text style={styles.login}>Giriş Yap</Text>

      <CustomInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
  title="Giriş Yap"
  onPress={() => {
    console.log('E-posta:', email);
    console.log('Şifre:', password);
    Alert.alert('Giriş Bilgileri', `E-posta: ${email}\nŞifre: ${password}`);
  }}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  welcome: {
    fontSize: 20,
    color: '#e726f5ff',
    marginBottom: 8,
  },
  login: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default LoginScreen;




