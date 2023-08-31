import { NativeBaseProvider } from "native-base";
import {
  Roboto_700Bold,
  Roboto_400Regular,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Loading } from "@components/Loading";
import { THEME } from "@theme/index";
import { Routes } from "@routes/index";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider theme={THEME}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
