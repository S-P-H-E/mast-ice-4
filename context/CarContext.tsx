import { createContext, useContext, useState } from "react";

const CarContext = createContext<any>(null);

export function CarProvider({ children }: any) {
  const [cars, setCars] = useState([
    { id: "1", make: "Tesla", model: "Model 3", costPerDay: 1200, img: "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-3-long-range-rwd-132-66feb663ecf17.jpg?crop=0.704xw:0.594xh;0.143xw,0.392xh&resize=2048:*" },
    { id: "2", make: "BMW", model: "320i", costPerDay: 850, img: "https://www.shutterstock.com/image-photo/istanbul-turkey-november-17-2023-600nw-2391117181.jpg" },
  ])
  const [booking, setBooking] = useState(null)
  
  const addCar = (car: any) => {
    setCars([...cars, { 
      id: Date.now().toString(), 
      img: "https://www.guinnessworldrecords.com/world-records/images/453884-longest-custom-banana-car-header.jpg", 
      ...car 
    }])
  };

  return (
    <CarContext.Provider value={{ cars, booking, addCar, setBooking }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCarContext() {
  return useContext(CarContext);
}
