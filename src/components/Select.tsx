import { Button, Text } from "native-base";
import { useEffect, useState } from "react";

type Props = {
  handleOnClick: (state: boolean) => void;
  text: string;
};

export function Select({ handleOnClick, text }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    handleOnClick(isSelected);
  }, [isSelected]);

  if (isSelected) {
    return (
      <Button
        h={10}
        backgroundColor="rgba(1,  1,  1,  0)"
        borderWidth={1}
        borderColor="purple.50"
        rounded={6}
        onPress={() => setIsSelected((prevState) => !prevState)}
      >
        <Text fontSize="text_sm" color="purple.50" fontFamily={"heading"}>
          {text}
        </Text>
      </Button>
    );
  } else {
    return (
      <Button
        h={10}
        backgroundColor="gray.600"
        rounded={6}
        onPress={() => setIsSelected((prevState) => !prevState)}
      >
        <Text fontSize="text_sm" color="gray.200" fontFamily={"body"}>
          {text}
        </Text>
      </Button>
    );
  }
}
