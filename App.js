import { StatusBar, Alert } from "react-native";
import React, { useState } from "react";
import { TextInput } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";

export default function App() {
  const initialText = "";
  const inputAccessoryViewID = "uniqueID";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = () => {
    if (!email) {
      Alert.alert('Please Enter Your Email id');
    } else if (!password) {
      Alert.alert('Please Enter Your Password');
    } else {
      login();
    }
  };

  const login = async () => {
    console.log(email,";;;;;;;;;;;;;;;;res;;;;;")
    try {
      let res = await fetch('https://api.fahdu.com/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let response = await res.json();
      console.log('response', response);
      // if (response.result.success == true) {
      
      // } else {
       
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.main}>
          <View style={styles.first}>
            <Text style={styles.text1}>Hey!</Text>
            <Text style={styles.text2}>Welcome to Fahdu</Text>
            <Text style={styles.text2}>Please Login to continue</Text>
          </View>
          <View>
            <Image style={styles.img} source={require("./image/ggg.png")} />
          </View>
        </View>

        <View style={styles.inp}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder={"Email"}
            left={<TextInput.Icon icon="email" size={20}/>}

          />
          <TextInput
            style={styles.input}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setPassword}
            value={password}
           right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={toggleShowPassword} size={20} />}
            left={<TextInput.Icon icon="lock" size={20}/>}
             placeholderColor={"grey"}  
             secureTextEntry={!showPassword}
             placeholder="Password"
          />
        </View>
        <Text
          style={{
            color: "#FFA07A",
            left: "60%",
          }}
        >
          Forget Password
        </Text>

        <View
          style={{
            width: 100,
            left: "30%",
            marginTop: 18,
          }}
        >
          <Pressable
            style={styles.button}
            onPress={submitHandler}
          >
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            left: 15,
            marginTop: 15,
            gap: 4,
          }}
        >
          <View
            style={{
              width: 70,
              height: 1,
              border: 2,
              borderWidth: 0.5,
              borderColor: "black",
              marginTop: 10,
              
            }}
          ></View>
          <Text> Or Connect With</Text>
          <View
            style={{
              width: 70,
              height: 1,
              border: 4,
              borderWidth: 0.5,
              borderColor: "black",
              marginTop: 10,
            }}
          ></View>
        </View>
        <Image
          style={{
            left: "43%",
            marginTop: 20,
          }}
          source={require("./image/google.png")}
        />
        <View style={{ flexDirection: "row", left: "10%" }}>
          <Text style={{ marginTop: 8 }}>Want to signup with email?</Text>
          <Text style={{ color: "#FFA07A", marginTop: 8 }}>Sign Up</Text>
        </View>

        <StatusBar style="auto" />
      </View>
      <View>
      <Image
          style={{
            left: "3%",
            marginTop: 70,
          }}
          source={require("./image/india.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 300,
    height: 500,
    backgroundColor: "#FFFDF6",
    borderWidth: 1,
    borderRadius: 10,
    padding:12
  },
  first: {
    flexDirection: "column",
  },
  main: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    marginLeft: 10,
    fontSize: 40,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    marginLeft: 10,
  },
  img: {
    marginRight: 4,
    height: 50,
    width: 40,
  },
  inp: {
    marginTop: 15,
    gap: 15,
    paddingHorizontal: 4,
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 5,
    paddingHorizontal: 4,
    borderColor: "black",
    backgroundColor:"white",
    width:270,
    height:40,
  },
  button: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#121212",
    backgroundColor: "#FFA07A",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    width: 124,
    height: 39,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});


