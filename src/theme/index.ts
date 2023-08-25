import { extendTheme } from 'native-base';

  export const THEME = extendTheme({
    colors: {
      // Add new color
      gray: {
        50: "#272221",
        100: "#403937",
        200: "#574F4D",
        300: "#8D8686",
        400: "#D7D5D5",
        500: "#E6E5E5",
        600: "#EDEDED",
        700: "#F3F2F2",
        800: "#FAFAFA",
        900: "#FFFFFF"
      },
      orange: {
        50: "#C47F17",
        100: "#DBAC2C"
      },
      purple: {
        50: "#8047F8",
        100: "#4B2995",
        200: "#EBE5F9",
      },
      red: {
        50: "#C44117",
        100: "#E8BAAB",
        200: "#F2DFD8"
      },
    },
    fonts: {
      heading: "Roboto_700Bold",
      body: "Roboto_400Regular",
      heading_baloo: "Baloo2_700Bold",
    },
    fontSizes: {
        title_xl: 36,
        title_lg: 24,
        title_md: 20,
        title_sm: 16,
        title_xs: 14,

        text_lg: 20,
        text_md: 16,
        text_sm: 14,
        text_xs: 12,
    },
  });
