import { Center, Spinner } from "native-base";

export function Loading() {
  return (
    <Center flex={1} bg="purple.50">
      <Spinner color="gray.200" />
    </Center>
  );
}
