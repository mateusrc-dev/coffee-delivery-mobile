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
    const storage = await AsyncStorage.getItem(COFFEE_STORAGE);

    let coffeesStorage: CoffeeStorageProps[] = storage ? JSON.parse(storage) : [];

    coffeesStorage.push(coffee);

    await AsyncStorage.setItem(COFFEE_STORAGE, JSON.stringify(coffeesStorage));

    return coffeesStorage;
}

export async function storageGetDataCoffees() {
    try {
        const storage = await AsyncStorage.getItem(COFFEE_STORAGE);

        const coffees: CoffeeStorageProps[] = storage ? JSON.parse(storage) : [];

        return coffees;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function deleteCoffeeStorageById(id: string) {
    try {
        const storage = await AsyncStorage.getItem(COFFEE_STORAGE);

        const coffees: CoffeeStorageProps[] = storage ? JSON.parse(storage) : [];

        const coffeesWithoutCoffeeDeleted = coffees.filter(coffee => coffee.id !== id)

        await AsyncStorage.setItem(COFFEE_STORAGE, JSON.stringify(coffeesWithoutCoffeeDeleted));

        return coffeesWithoutCoffeeDeleted
    } catch (error) {
        console.error("Error delete coffee:", error);
        return [];
    }
}

export async function deleteAllStorageCoffees() {
    await AsyncStorage.setItem(COFFEE_STORAGE, JSON.stringify([]));
}