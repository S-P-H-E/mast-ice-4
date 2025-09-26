import { useCarContext } from "@/context/CarContext";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Rent() {
  const { cars, setBooking } = useCarContext();
  const [selected, setSelected] = useState(cars[0]?.id || "")
  const [days, setDays] = useState("1")
  const car = cars.find((c: any) => c.id === selected)
  const total = car ? Number(days || "0") * car.costPerDay : 0

  const confirm = () => {
    if (!car) return;
    setBooking({ car, days: Number(days || "0"), total })
    router.push("/confirmation")
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Rent a Car</Text>
      
      {cars.map((c: any) => (
        <Pressable 
          key={c.id} 
          onPress={() => setSelected(c.id)} 
          style={[styles.carItem, c.id === selected && styles.carItemSelected]}
        >
          <View style={styles.carRow}>
            <Image source={{ uri: c.img }} style={styles.carImage} />
            <View>
              <Text style={[styles.carText, c.id === selected && styles.carTextSelected]}>
                {c.make} {c.model}
              </Text>
              <Text style={[styles.carPrice, c.id === selected && styles.carTextSelected]}>
                R{c.costPerDay}/day
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
      
      <TextInput 
        value={days} 
        onChangeText={setDays} 
        keyboardType="numeric" 
        placeholder="Days" 
        style={styles.input} 
      />
      
      <Text style={styles.total}>
        Total: R{total}
      </Text>
      
      <Pressable onPress={confirm} style={styles.bookButton}>
        <Text style={styles.bookText}>Book Now</Text>
      </Pressable>
      
      <Pressable onPress={() => router.push("/")}>
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
  carItem: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  carItemSelected: {
    backgroundColor: "#000"
  },
  carRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  carImage: {
    width: 60,
    height: 40,
    marginRight: 15
  },
  carText: {
    color: "#000",
    fontSize: 16
  },
  carPrice: {
    color: "#000"
  },
  carTextSelected: {
    color: "#fff"
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 20
  },
  total: {
    fontSize: 18,
    marginBottom: 10
  },
  bookButton: {
    backgroundColor: "#000",
    padding: 15,
    marginBottom: 20
  },
  bookText: {
    color: "#fff",
    textAlign: "center"
  },
  backText: {
    textAlign: "center"
  }
});
