import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { RoutesApp } from "./app.routes";
import { Box, useTheme } from "native-base";

export function Routes() {
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[800];

  return (
    <Box flex={1} bg="gray.800">
      <NavigationContainer theme={theme}>
        <RoutesApp />
      </NavigationContainer>
    </Box>
  );
}
