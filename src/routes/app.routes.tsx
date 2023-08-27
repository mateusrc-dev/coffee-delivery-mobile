import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Cart } from "@screens/Cart";
import { CoffeeDelivery } from "@screens/CoffeeDelivery";
import { Details } from "@screens/Details";
import { FinishedOrder } from "@screens/FinishedOrder";
import { Home } from "@screens/Home";

type RoutesProps = {
  cart: undefined;
  details: { coffeeId: string };
  coffeeDelivery: undefined;
  finishedOrder: undefined;
  home: undefined;
};

export type AppNavigationRoutesProps = NativeStackNavigationProp<RoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<RoutesProps>();

export function RoutesApp() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="coffeeDelivery" component={CoffeeDelivery} />
      <Screen name="home" component={Home} />
      <Screen name="details" component={Details} />
      <Screen name="cart" component={Cart} />
      <Screen name="finishedOrder" component={FinishedOrder} />
    </Navigator>
  );
}
