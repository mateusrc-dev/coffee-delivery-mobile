import { Box, HStack, Text, VStack, View } from "native-base";
import { Pressable } from "react-native";
import { InputNumber } from "./InputNumber";
import { ButtonIcon } from "./ButtonIcon";

type Props = {
  handleOnClick: (id: string) => void;
  children: JSX.Element;
  coffeeName: string;
  coffeeAmount: string;
  price: number;
};

export function CardCar({
  handleOnClick,
  children,
  coffeeName,
  coffeeAmount,
  price,
}: Props) {
  function handleReturns(number: number) {
    console.log(number);
  }

  function handleClick(text: string) {
    console.log(text);
  }

  return (
    <Pressable onPress={() => handleOnClick("id")}>
      <View
        px="8"
        py="4"
        display={"flex"}
        flexDirection={"row"}
        alignItems="center"
        bgColor="gray.800"
        borderBottomWidth={1}
        borderBottomColor="gray.400"
      >
        <Box h={0} marginRight={5}>
          {children}
        </Box>
        <HStack>
          <VStack marginRight={30}>
            <Text fontFamily={"body"} fontSize={"text_md"} color="gray.50">
              {coffeeName}
            </Text>
            <Text
              fontFamily={"body"}
              fontSize={"text_sm"}
              color="gray.300"
              mb={2}
            >
              {coffeeAmount}
            </Text>
            <HStack space={2}>
              <InputNumber
                returnsCountNumber={handleReturns}
                withBorder={true}
              />
              <ButtonIcon handleOnClick={handleClick} svg="trash" />
            </HStack>
          </VStack>
          <Text
            fontFamily={"Baloo2_700Bold"}
            fontSize={"text_md"}
            color="gray.50"
          >
            R$ {price}
          </Text>
        </HStack>
      </View>
    </Pressable>
  );
}
