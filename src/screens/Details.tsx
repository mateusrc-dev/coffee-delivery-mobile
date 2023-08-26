import { HStack, View } from "native-base";
import { Cart } from "@components/Cart";

export function Details() {
  return (
    <View flex="1" bg="gray.800">
      <HStack mt="10" px="10">
        <Cart amount={3} />
      </HStack>
    </View>
  );
}
