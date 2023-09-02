import { Button, Text } from "native-base";
import { useState } from "react";

type Props = {
  returnsText: (text: string) => void;
  text: string;
  isSelectedTag: boolean;
};

export function Tag({ text, returnsText, isSelectedTag }: Props) {
  function handleOnClickButton() {
    returnsText(text);
  }

  if (isSelectedTag) {
    return (
      <Button
        p="0"
        py={"1.5"}
        px={3}
        backgroundColor="purple.50"
        borderWidth={1}
        borderColor="purple.50"
        rounded={"full"}
        onPress={handleOnClickButton}
      >
        <Text fontSize="10" color="gray.900" fontFamily={"heading"}>
          {text}
        </Text>
      </Button>
    );
  } else {
    return (
      <Button
        p="0"
        py={1.5}
        px={3}
        backgroundColor="rgba(1, 1, 1, 0)"
        borderWidth={1}
        borderColor="purple.50"
        rounded={"full"}
        onPress={handleOnClickButton}
      >
        <Text fontSize="10" color="purple.100" fontFamily={"heading"}>
          {text}
        </Text>
      </Button>
    );
  }
}
