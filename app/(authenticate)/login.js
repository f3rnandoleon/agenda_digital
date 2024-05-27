import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CryptoJS from 'crypto-js';



const login = () => {
  const router = useRouter();
  const [carnet, setCarnet] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]); 

  useEffect(() => {
   fetchData();
  },[]);
  
  const encryptPassword = (password) => {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  };
  async function fetchData() {
    const response = await fetch("http://localhost:8080/usuarios");
    const data = await response.json();
    setUsers(data);
  }

  const handleLogin = () => {
    const hashedPassword = encryptPassword(password);
    const user = users.find(user => user.num_documento === carnet && user.clave === hashedPassword);

    if (user) {
      router.replace({
        pathname: "/(tabs)/home",
        query: { userId: user.idusuario}
      });
    } else {

      alert("Carnet o contraseña incorrectos");
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#0066b2" }}>
          AGENDA DIGITAL
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 20 }}>
            Inicia Sesion a su cuenta
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={carnet}
              onChangeText={(text) => setCarnet(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                
              }}
              placeholder="Ingrese su email"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color="gray"
            />
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                
              }}
              placeholder="Ingrese su contrasena"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
              justifyContent: "space-between",
            }}
          >
            <Text>Mantener Sesion</Text>
            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              Olvide mi Contrasena
            </Text>
          </View>

          <View style={{ marginTop: 60 }} />

          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "#6699CC",
              padding: 15,
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Iniciar Sesion
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.replace("/register")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", fontSize: 15, color: "gray" }}>
              No tiene cuenta? Registrate
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  agendaText: {
    fontSize: 25,
    marginBottom: 30,
  },
  characterContainer: {
    alignItems: 'center',
  },
  characterImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  continueButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topBorder: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 10,
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 10,
  },
});
