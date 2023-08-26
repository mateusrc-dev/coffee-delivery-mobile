import { Box, Text, View } from "native-base";
import { ShoppingCart } from "phosphor-react-native";

type Props = {
  amount: number;
};

export function Cart({ amount }: Props) {
  return (
    <Box>
      {amount === 0 ? (
        <ShoppingCart weight="fill" color="#C47F17" size="20" />
      ) : (
        <ShoppingCart weight="fill" color="#8047F8" size="20" />
      )}
      {amount !== 0 && (
        <View
          position="absolute"
          top="-15"
          right="-15"
          w="5"
          h="5"
          bgColor="purple.50"
          rounded="full"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontFamily="body" fontSize="text_xs" color="gray.900">
            {amount}
          </Text>
        </View>
      )}
    </Box>
  );
}
