import { Button } from "native-base";
import { Plus, Minus, Trash } from "phosphor-react-native";
import { useState } from "react";

type Props = {
  handleOnClick: (text: string) => void;
  svg: "plus" | "trash" | "minus";
};

export function ButtonIcon({ handleOnClick, svg }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  function handleClick() {
    setIsPressed(true);
  }

  function handleClickOut() {
    setIsPressed(false);
  }

  if (svg === "plus") {
    return (
      <Button
        h={36}
        w={36}
        backgroundColor="rgba(1,  1,  1,  0)"
        rounded={6}
        _pressed={{
          backgroundColor: "gray.600",
        }}
        onPress={() => handleOnClick("texto no argumento")}
        onPressIn={handleClick}
        onPressOut={handleClickOut}
      >
        <Plus
          color={isPressed ? "#4B2995" : "#8047F8"}
          size={20}
          weight="bold"
        />
      </Button>
    );
  } else if (svg === "trash") {
    return (
      <Button
        h={36}
        w={36}
        backgroundColor="gray.600"
        rounded={6}
        _pressed={{
          backgroundColor: "gray.500",
        }}
        onPress={() => handleOnClick("texto no argumento")}
        onPressIn={handleClick}
        onPressOut={handleClickOut}
      >
        <Trash color={isPressed ? "#4B2995" : "#8047F8"} size={20} />
      </Button>
    );
  } else {
    return (
      <Button
        h={36}
        w={36}
        backgroundColor="rgba(1, 1, 1, 0)"
        rounded={6}
        _pressed={{
          backgroundColor: "gray.600",
        }}
        onPress={() => handleOnClick("texto no argumento")}
        onPressIn={handleClick}
        onPressOut={handleClickOut}
      >
        <Minus color="#8047F8" size={20} weight="bold" />
      </Button>
    );
  }
}
