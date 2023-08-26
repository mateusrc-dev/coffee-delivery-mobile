import { Button, Text } from "native-base";
import { useEffect, useState } from "react";

type Props = {
  handleOnClick: (state: boolean) => void;
  text: string;
};

export function Tag({ handleOnClick, text }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    handleOnClick(isSelected);
  }, [isSelected]);

  if (isSelected) {
    return (
      <Button
        p="0"
        py={"1.5"}
        px={3}
        backgroundColor="purple.50"
        borderWidth={1}
        borderColor="purple.50"
        rounded={"full"}
        onPress={() => setIsSelected((prevState) => !prevState)}
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
        onPress={() => setIsSelected((prevState) => !prevState)}
      >
        <Text fontSize="10" color="purple.100" fontFamily={"heading"}>
          {text}
        </Text>
      </Button>
    );
  }
}
