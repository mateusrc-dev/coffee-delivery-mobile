import { Icon, Input, Stack } from "native-base";
import { MagnifyingGlass } from "phosphor-react-native";

export function InputComponent() {
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
        fontSize="text_sm"
        InputLeftElement={
          <Icon
            as={<MagnifyingGlass color="#8D8686" weight="regular" size={18} />}
            ml="9.5"
          />
        }
        placeholder="Pesquisar"
      />
    </Stack>
  );
}
