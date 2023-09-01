import { Box, HStack, Text, VStack, View } from "native-base";
import { InputNumber } from "./InputNumber";
import { ButtonIcon } from "./ButtonIcon";

type Props = {
  handleOnClick: (id: string, index: number) => void;
  children: JSX.Element;
  coffeeName: string;
  coffeeAmount: string;
  amountOfCoffee: number;
  price: number;
  id: string;
  index: number;
};

export function CardCar({
  handleOnClick,
  children,
  coffeeName,
  coffeeAmount,
  amountOfCoffee,
  price,
  id,
  index,
}: Props) {
  function handleReturns(number: number) {
    console.log(number);
  }

  return (
    <View>
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
                amount={Number(amountOfCoffee)}
              />
              <ButtonIcon
                handleOnClick={() => handleOnClick(id, index)}
                svg="trash"
              />
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
    </View>
  );
}
