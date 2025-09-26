import { Stack } from "expo-router";
import { CarProvider } from "@/context/CarContext";

export default function RootLayout() {
  return <CarProvider><Stack screenOptions={{ headerShown: false }} /></CarProvider>;
}
