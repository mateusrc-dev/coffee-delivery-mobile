import { HStack, Text, VStack, View } from "native-base";
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
      <View flexDirection={"row"} maxWidth={375} bgColor="gray.800">
        {children}
        <HStack flex={1}>
          <VStack>
            <Text>{coffeeName}</Text>
            <Text>{coffeeAmount}</Text>
            <HStack flex={1}>
              <InputNumber
                returnsCountNumber={handleReturns}
                withBorder={true}
              />
              <ButtonIcon handleOnClick={handleClick} svg="trash" />
            </HStack>
          </VStack>
          <Text>R$ {price}</Text>
        </HStack>
      </View>
    </Pressable>
  );
}
