import { Button, Text } from "native-base";

type Props = {
  handleOnClick: (text: string) => void;
  color: "yellow" | "purple";
  text: string;
};

export function ButtonComponent({ handleOnClick, color, text }: Props) {
  if (color === "yellow") {
    return (
      <Button
        h={46}
        backgroundColor="orange.100"
        rounded={6}
        onPress={() => handleOnClick("texto no argumento")}
        _pressed={{
          backgroundColor: "orange.50",
        }}
      >
        <Text fontSize="text_sm" color="gray.900" fontFamily={"heading"}>
          {text}
        </Text>
      </Button>
    );
  } else {
    return (
      <Button
        h={46}
        backgroundColor="purple.50"
        rounded={6}
        _pressed={{
          backgroundColor: "purple.100",
        }}
        onPress={() => handleOnClick("texto no argumento")}
      >
        <Text fontSize="text_sm" color="gray.900" fontFamily={"heading"}>
          {text}
        </Text>
      </Button>
    );
  }
}
