import { useCarContext } from "@/context/CarContext";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Admin() {
  const { addCar, cars } = useCarContext();
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [cost, setCost] = useState("")

  const add = () => {
    if (make && model && cost) {
      addCar({ make, model, costPerDay: Number(cost) })
      setMake("")
      setModel("")
      setCost("")
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Add Car</Text>
      
      <TextInput 
        value={make} 
        onChangeText={setMake} 
        placeholder="Make" 
        style={styles.input} 
      />
      <TextInput 
        value={model} 
        onChangeText={setModel} 
        placeholder="Model" 
        style={styles.input} 
      />
      <TextInput 
        value={cost} 
        onChangeText={setCost} 
        keyboardType="numeric" 
        placeholder="Cost per day" 
        style={styles.input} 
      />
      
      <Pressable onPress={add} style={styles.addButton}>
        <Text style={styles.addText}>Add Car</Text>
      </Pressable>
      
      <Text style={styles.carsTitle}>Current Cars:</Text>
      {cars.map((car: any) => (
        <View key={car.id} style={styles.carItem}>
          <Text style={styles.carName}>{car.make} {car.model}</Text>
          <Text style={styles.carPrice}>R{car.costPerDay} per day</Text>
        </View>
      ))}
      
      <Pressable onPress={() => router.push("/")} style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10
  },
  addButton: {
    backgroundColor: "#000",
    padding: 15,
    marginBottom: 30
  },
  addText: {
    color: "#fff",
    textAlign: "center"
  },
  carsTitle: {
    fontSize: 20,
    marginBottom: 15
  },
  carItem: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10
  },
  carName: {
    fontSize: 16
  },
  carPrice: {
    marginTop: 5
  },
  backButton: {
    marginTop: 20
  },
  backText: {
    textAlign: "center"
  }
});
