import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const [role, setRole] = useState("customer")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ICE Car Rentals</Text>
      
      <TextInput 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Email" 
        style={styles.input} 
      />
      <TextInput 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
      />
      
      <View style={styles.roleContainer}>
        <Pressable 
          onPress={() => setRole("admin")} 
          style={[styles.roleButton, role === "admin" && styles.roleButtonActive]}
        >
          <Text style={[styles.roleText, role === "admin" && styles.roleTextActive]}>ADMIN</Text>
        </Pressable>
        <Pressable 
          onPress={() => setRole("customer")} 
          style={[styles.roleButton, role === "customer" && styles.roleButtonActive]}
        >
          <Text style={[styles.roleText, role === "customer" && styles.roleTextActive]}>CUSTOMER</Text>
        </Pressable>
      </View>
      
      <Pressable 
        onPress={() => router.push(role === "admin" ? "/admin" : "/rent")} 
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  roleContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  roleButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    marginRight: 5
  },
  roleButtonActive: {
    backgroundColor: "#000"
  },
  roleText: {
    color: "#000",
    textAlign: "center"
  },
  roleTextActive: {
    color: "#fff"
  },
  loginButton: {
    backgroundColor: "#000",
    padding: 15
  },
  loginText: {
    color: "#fff",
    textAlign: "center"
  }
});
