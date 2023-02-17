import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import useAuth from "../context/Auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    login(email, password).catch((e) => createAlert());
  };

  const createAlert = () =>
    Alert.alert(
      "Error",
      "The password is invalid or the user does not have a password",
      [{ text: "OK" }]
    );

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://cdn.beyond.partners/wp-content/uploads/2021/03/23201713/effectus.png",
        }}
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  input: {
    margin: 10,
    fontSize: 18,
    borderBottomWidth: 1.5,
    width: "70%",
    paddingVertical: 10,
    borderColor: "#bbb",
  },
  button: {
    backgroundColor: "#000",
    width: "50%",
    borderRadius: 20,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  img: {
    height: 80,
    width: 230,
    marginBottom: 20,
  },
});

export default LoginScreen;
