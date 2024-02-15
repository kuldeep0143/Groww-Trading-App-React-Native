import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TextInput,Button } from "react-native";

const LockScreen = ({navigation}) => {
    const [password, setPassword] = useState("");
    const checkPassword = () => {
        if (password === '1234') {
            setPassword('')
            navigation.navigate('Home');
        } else {
            alert(`Incorrect password ${password}.Try again !`)
        }
    }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://groww.in/groww-logo-270.png" }}
        style={styles.logo}
      />
      <Text style={styles.greeting}>Hi,Mr. Lalit Keshre</Text>
      <Text style={styles.pinText}>Enter your Groww Pin</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Pin"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <Button title="Unlock" onPress={checkPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
        paddingHorizontal: 20,
   // marginTop:-50
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  greeting: {
    fontSize: 20,
    marginBottom: 10,
  },
  pinText: {
    fontSize: 16,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  passwordInput: {
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    paddingHorizontal: 20,
      fontSize: 20,
    textAlign: "center",
  },
});

export default LockScreen;
