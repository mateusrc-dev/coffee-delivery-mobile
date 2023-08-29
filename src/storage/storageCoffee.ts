import AsyncStorage from "@react-native-async-storage/async-storage";
import { COFFEE_STORAGE } from "./storageConfig";

export type CoffeeStorageProps = {
    id: string;
    coffeeImage: string | undefined;
    coffeeType: string | undefined;
    coffeeName: string | undefined;
    description: string | undefined;
    price: number | undefined;
    amount?: string | undefined;
    amountOfCoffee?: number | undefined;
  };

export async function storageCoffeeSave(coffee: CoffeeStorageProps) {
    console.log(`storage => ${coffee.coffeeName}`)

    const storage = await AsyncStorage.getItem(COFFEE_STORAGE);

    let coffeesStorage: CoffeeStorageProps[] = storage ? JSON.parse(storage) : [];

    coffeesStorage.push(coffee);

    console.log(`storage => ${coffeesStorage[coffeesStorage.length - 1].coffeeName}`)

    await AsyncStorage.setItem(COFFEE_STORAGE, JSON.stringify(coffeesStorage));
}

export async function storageGetDataCoffees() {
    try {
        const storage = await AsyncStorage.getItem(COFFEE_STORAGE);

        const coffees: CoffeeStorageProps[] = storage ? JSON.parse(storage) : [];

        if (coffees.length > 0) {
            console.log(`storage => ${coffees[coffees.length - 1].coffeeName}`);
        } else {
            console.log("No coffee items found.");
        }

        return coffees;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function deleteAllStorageCoffees() {
    await AsyncStorage.setItem(COFFEE_STORAGE, JSON.stringify([]));
}