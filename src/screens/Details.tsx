import { Box, HStack, Image, ScrollView, Text, View } from "native-base";
import { Cart } from "@components/Cart";
import { ArrowLeft } from "phosphor-react-native";
import Smoke from "@assets/Smoke.png";
import Coffee from "@assets/Coffee.png";
import { Select } from "@components/Select";
import { InputNumber } from "@components/InputNumber";
import { ButtonComponent } from "@components/Button";

export function Details() {
  function handleClick1() {}

  function handleClick2() {}

  function handleClick3() {}

  function handleReturnsInputNumber() {}

  function handleOnClickInputNumber() {}

  return (
    <View bgColor="gray.800" flex={1}>
      <View h="546" px="8" bg="gray.50">
        <HStack mt="12" alignItems="center" justifyContent="space-between">
          <ArrowLeft color="#ffffff" size="24" />
          <Cart amount={3} />
        </HStack>
        <View
          bgColor="gray.100"
          py="1.5"
          px="3"
          maxW={90}
          rounded="full"
          alignItems="center"
          justifyContent="center"
          mt="38"
          mb="3"
        >
          <Text fontFamily="heading" fontSize="10" color="gray.900">
            ESPECIAL
          </Text>
        </View>
        <HStack alignItems="center" justifyContent="space-between">
          <Text color="gray.900" fontFamily="heading_baloo" fontSize="title_lg">
            Irlandês
          </Text>
          <HStack alignItems="baseline">
            <Text color="orange.100" fontFamily="body">
              R${" "}
            </Text>
            <Text
              color="orange.100"
              fontFamily="heading_baloo"
              fontSize="title_lg"
            >
              9,90
            </Text>
          </HStack>
        </HStack>
        <Text fontFamily="body" fontSize="text_md" color="gray.400" mt="5">
          Bebida a base de café, uísque irlandês, açúcar e chantilly
        </Text>
        <View alignItems="center" justifyContent="center" mt="2">
          <Image
            position="absolute"
            top="4"
            w="16"
            h="137"
            source={Smoke}
            alt="imagem da fumaça"
          />
          <Image mt="20" w="295" h="260" source={Coffee} alt="imagem do cafe" />
        </View>
      </View>
      <View px="8" flex={1}>
        <View mt="42" flex={1}>
          <Text color="gray.300" fontFamily="body" fontSize="text_sm" mb="2">
            Selecione o tamanho:
          </Text>
          <HStack
            space="2"
            maxWidth="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Select handleOnClick={handleClick1} text="114ml" />
            <Select handleOnClick={handleClick2} text="140ml" />
            <Select handleOnClick={handleClick3} text="227ml" />
          </HStack>
        </View>
        <HStack
          alignItems="center"
          justifyContent="center"
          h="62"
          space="4"
          bgColor="gray.500"
          py="8"
        >
          <InputNumber returnsCountNumber={handleReturnsInputNumber} />
          <ButtonComponent
            color="purple"
            text="ADICIONAR"
            handleOnClick={handleOnClickInputNumber}
          />
        </HStack>
      </View>
    </View>
  );
}
