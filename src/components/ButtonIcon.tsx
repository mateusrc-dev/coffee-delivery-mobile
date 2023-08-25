import { Button, Pressable, Text } from "native-base";
import { Plus, Trash } from "phosphor-react-native";

type Props = {
  handleOnClick: (text: string) => void;
  svg: "plus" | "trash";
  svgColor: "purple_dark" | "purple";
  backgroundColor: "transparent" | "gray_600" | "gray_500";
};

export function ButtonIcon({
  handleOnClick,
  backgroundColor,
  svgColor,
  svg,
}: Props) {
  if (backgroundColor === "gray_500") {
    return (
      <Button
        h={36}
        w={36}
        backgroundColor="gray.500"
        rounded={6}
        onPress={() => handleOnClick("texto no argumento")}
      >
        {svg === "plus" ? (
          <Plus
            color={svgColor === "purple" ? "#8047F8" : "#4B2995"}
            size={20}
          />
        ) : (
          <Trash
            color={svgColor === "purple" ? "#8047F8" : "#4B2995"}
            size={20}
          />
        )}
      </Button>
    );
  } else if (backgroundColor === "gray_600") {
    return (
      <Button
        h={36}
        w={36}
        backgroundColor="gray.600"
        rounded={6}
        onPress={() => handleOnClick("texto no argumento")}
      >
        {svg === "plus" ? (
          <Plus
            color={svgColor === "purple" ? "#8047F8" : "#4B2995"}
            size={20}
          />
        ) : (
          <Trash
            color={svgColor === "purple" ? "#8047F8" : "#4B2995"}
            size={20}
          />
        )}
      </Button>
    );
  } else {
    return (
      <Pressable onPress={() => handleOnClick("texto no argumento")}>
        {svg === "plus" ? (
          <Plus
            color={svgColor === "purple" ? "#8047F8" : "#4B2995"}
            size={20}
          />
        ) : (
          <Trash
            color={svgColor === "purple" ? "#8047F8" : "#4B2995"}
            size={20}
          />
        )}
      </Pressable>
    );
  }
}
