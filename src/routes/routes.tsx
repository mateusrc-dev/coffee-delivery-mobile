import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "@screens/Cart";
import { CoffeeDelivery } from "@screens/CoffeeDelivery";
import { Details } from "@screens/Details";
import { FinishedOrder } from "@screens/FinishedOrder";
import { Home } from "@screens/Home";

type Routes = {
  cart: undefined;
  details: { coffeeId: string };
  coffeeDelivery: undefined;
  finishedOrder: undefined;
  home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <Navigator>
      <Screen name="cart" component={Cart} />
      <Screen name="coffeeDelivery" component={CoffeeDelivery} />
      <Screen name="details" component={Details} />
      <Screen name="finishedOrder" component={FinishedOrder} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
