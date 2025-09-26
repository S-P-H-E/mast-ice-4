import { useCarContext } from "@/context/CarContext";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Confirmation() {
  const { booking, setBooking } = useCarContext();
  
  if (!booking) {
    return (
      <View style={styles.noBookingContainer}>
        <Text>No booking yet.</Text>
        <Pressable onPress={() => router.push("/rent")} style={styles.backButton}>
          <Text>Back to rent</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Confirmed</Text>
      
      <Image source={{ uri: booking.car.img }} style={styles.carImage} />
      
      <View style={styles.bookingDetails}>
        <Text style={styles.carName}>{booking.car.make} {booking.car.model}</Text>
        <Text style={styles.days}>Days: {booking.days}</Text>
        <Text style={styles.total}>Total: R{booking.total}</Text>
      </View>
      
      <Pressable
        onPress={() => {
          setBooking(null)
          router.push("/")
        }}
        style={styles.doneButton}
      >
        <Text style={styles.doneText}>Done</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  noBookingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  backButton: {
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20
  },
  carImage: {
    width: 150,
    height: 100,
    alignSelf: "center",
    marginBottom: 20
  },
  bookingDetails: {
    borderWidth: 1,
    padding: 20,
    marginBottom: 20
  },
  carName: {
    fontSize: 18,
    marginBottom: 10
  },
  days: {
    marginBottom: 5
  },
  total: {
    fontSize: 16,
    fontWeight: "bold"
  },
  doneButton: {
    backgroundColor: "#000",
    padding: 15
  },
  doneText: {
    color: "#fff",
    textAlign: "center"
  }
});
