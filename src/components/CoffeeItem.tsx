import { HStack, Heading, Text, VStack, View } from "native-base";

type Props = {
  children: JSX.Element;
  mode: "vertical" | "horizontal";
  coffeeName: string;
  description: string;
  price: number;
  coffeeType: string;
};

export function CoffeeItem({
  coffeeName,
  description,
  mode,
  price,
  coffeeType,
  children,
}: Props) {
  if (mode === "vertical") {
    return (
      <VStack
        w={208}
        h={262}
        alignItems="center"
        backgroundColor="gray.700"
        roundedTopLeft="6"
        roundedTopRight="36"
        roundedBottomRight={6}
        roundedBottomLeft={36}
        shadow={4}
      >
        {children}
        {coffeeType === "traditional" && (
          <View
            bgColor="purple.200"
            h={"5"}
            px={8}
            rounded="full"
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            <Text color="purple.50" fontFamily="heading" fontSize={10}>
              TRADICIONAL
            </Text>
          </View>
        )}
        {coffeeType === "candy" && (
          <View
            bgColor="purple.200"
            h={5}
            px={8}
            rounded="full"
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            <Text color="purple.50" fontFamily="heading" fontSize={10}>
              DOCE
            </Text>
          </View>
        )}
        {coffeeType === "special" && (
          <View
            bgColor="purple.200"
            h={5}
            px={8}
            rounded="full"
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            <Text color="purple.50" fontFamily="heading" fontSize={10}>
              ESPECIAL
            </Text>
          </View>
        )}
        <Text fontFamily={"heading_baloo"} fontSize="20" mt="3.5">
          {coffeeName}
        </Text>
        <Text fontFamily="body" color="gray.300" fontSize="text_xs" mt="0">
          {description}
        </Text>
        <HStack alignItems={"baseline"} mt="4">
          <Text fontFamily="heading" fontSize="title_sm" color="orange.50">
            R${" "}
          </Text>
          <Text
            fontFamily="heading_baloo"
            fontSize="title_lg"
            color="orange.50"
          >
            {price}
          </Text>
        </HStack>
      </VStack>
    );
  } else {
    return (
      <HStack
        w="full"
        h={120}
        alignItems="center"
        backgroundColor="gray.700"
        roundedTopLeft="6"
        roundedTopRight="36"
        roundedBottomRight={6}
        roundedBottomLeft={36}
        shadow={4}
        space={3}
      >
        {children}

        <VStack>
          <Text
            fontFamily={"heading_baloo"}
            fontSize="20"
            mt="3.5"
            flexWrap={"nowrap"}
          >
            {coffeeName}
          </Text>
          <Text
            fontFamily="body"
            maxWidth={200}
            color="gray.300"
            fontSize="text_xs"
            mt="0"
            flexWrap={"wrap"}
          >
            {description}
          </Text>
          <HStack alignItems={"baseline"} mt="2">
            <Text fontFamily="heading" fontSize="title_sm" color="orange.50">
              R${" "}
            </Text>
            <Text
              fontFamily="heading_baloo"
              fontSize="title_lg"
              color="orange.50"
            >
              {price}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    );
  }
}
