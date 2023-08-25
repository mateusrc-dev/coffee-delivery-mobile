import { HStack, Text, View } from "native-base";
import { ButtonIcon } from "./ButtonIcon";
import { useState, useEffect } from "react";

type Props = {
  returnsCountNumber: (num: number) => void;
  withBorder: boolean;
};

export function InputNumber({ returnsCountNumber, withBorder }: Props) {
  const [number, setNumber] = useState<number>(1);

  useEffect(() => {
    returnsCountNumber(number);
  }, [number]);

  function handleClickSum() {
    setNumber((prevState) => prevState + 1);
  }

  function handleClickSubtract() {
    setNumber((prevState) => prevState - 1);
  }

  return (
    <HStack
      maxWidth={100}
      h={"36"}
      rounded={6}
      alignItems="center"
      borderWidth={withBorder ? 1 : 0}
      borderColor="gray.500"
      space={1.5}
    >
      <View position={"absolute"} left="0">
        <ButtonIcon handleOnClick={handleClickSubtract} svg="minus" />
      </View>
      <View position={"absolute"} left="42.5">
        <Text fontFamily="body" fontSize="text_md" color="gray.50">
          {number}
        </Text>
      </View>
      <View position={"absolute"} right="0">
        <ButtonIcon handleOnClick={handleClickSum} svg="plus" />
      </View>
    </HStack>
  );
}
