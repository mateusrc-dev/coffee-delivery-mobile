import { Center, StatusBar } from "native-base";
import Logo from "@assets/Logo.svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { AppNavigationRoutesProps } from "@routes/app.routes";

export function CoffeeDelivery() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("home");
    }, 5000);
  }, []);

  return (
    <Center flex="1" bg="purple.50">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Logo />
    </Center>
  );
}
