import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  Roboto_700Bold,
  Roboto_400Regular,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Loading } from "@components/Loading";
import { THEME } from "@theme/index";
// import { Cart } from "@screens/Cart";
// import { FinishedOrder } from "@screens/FinishedOrder";
import { Home } from "@screens/Home";
// import { Details } from "@screens/Details";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}
