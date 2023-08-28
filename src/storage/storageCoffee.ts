import { CoffeeProps } from "@data/dataOfCoffees";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COFFEE_STORAGE } from "./storageConfig";

export async function storageCoffeeSave(coffee: CoffeeProps) {
    const storage = await AsyncStorage.getItem(COFFEE_STORAGE);

    const coffeesStorage: CoffeeProps[] = storage ? JSON.parse(storage) : [];

    const newCoffee = JSON.stringify(coffee);

    const coffees = [...coffeesStorage, newCoffee];

    await AsyncStorage.setItem(COFFEE_STORAGE, JSON.stringify(coffees));
}

export async function storageGetDataCoffees() {
    const storage = await AsyncStorage.getItem(COFFEE_STORAGE);

    const coffees: CoffeeProps[] = storage ? JSON.parse(storage) : [];

    return coffees;
}