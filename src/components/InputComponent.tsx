import { Icon, Input, IInputProps, Stack } from "native-base";
import { MagnifyingGlass } from "phosphor-react-native";
import { useState } from "react";

export function InputComponent({ ...rest }: IInputProps) {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w="full"
        h={42}
        rounded={4}
        borderWidth={"0"}
        backgroundColor={"gray.100"}
        placeholderTextColor={"gray.300"}
        color="gray.500"
        fontFamily="body"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(text) => setText(text)}
        fontSize="text_sm"
        InputLeftElement={
          text.length !== 0 ? (
            <Icon
              as={
                <MagnifyingGlass color="#C47F17" weight="regular" size={18} />
              }
              ml="9.5"
            />
          ) : (
            <Icon
              as={
                <MagnifyingGlass
                  color={focus ? "#DBAC2C" : "#8D8686"}
                  weight="regular"
                  size={18}
                />
              }
              ml="9.5"
            />
          )
        }
        {...rest}
      />
    </Stack>
  );
}
