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
    if (number <= 1) {
      return;
    } else {
      setNumber((prevState) => prevState - 1);
    }
  }

  return (
    <HStack
      maxWidth={number >= 10 ? 104 : 95}
      h={"36"}
      rounded={6}
      alignItems="center"
      borderWidth={withBorder ? 1 : 0}
      borderColor="gray.500"
      space={1.5}
    >
      <View>
        <ButtonIcon handleOnClick={handleClickSubtract} svg="minus" />
      </View>
      <View>
        <Text fontFamily="body" fontSize="text_md" color="gray.50">
          {number}
        </Text>
      </View>
      <View>
        <ButtonIcon handleOnClick={handleClickSum} svg="plus" />
      </View>
    </HStack>
  );
}
