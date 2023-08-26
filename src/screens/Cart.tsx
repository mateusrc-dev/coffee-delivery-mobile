import { CardCar } from "@components/CardCar";
import { HStack, Image, ScrollView, Text, VStack, View } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import CoffeeImage1 from "@assets/Coffee1.png";
import { ButtonComponent } from "@components/Button";

export function Cart() {
  function handleOnClick() {}

  function handleOnClickButton() {}

  return (
    <View flex="1" bg="gray.800">
      <View flex={1}>
        <ScrollView>
          <HStack
            mt="8"
            py="7"
            alignItems="center"
            justifyContent="space-around"
            borderBottomWidth={1}
            borderBottomColor="gray.400"
          >
            <ArrowLeft color="#272221" size="24" />
            <Text
              color="gray.100"
              fontFamily="heading_baloo"
              fontSize="text_md"
            >
              Carrinho
            </Text>
            <ArrowLeft color="#FAFAFA" size="24" />
          </HStack>
          <VStack>
            <CardCar
              coffeeAmount="120ml"
              coffeeName="Delicia"
              handleOnClick={handleOnClick}
              price={20}
            >
              <Image
                mt="-8"
                w="16"
                h="16"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CardCar>
            <CardCar
              coffeeAmount="120ml"
              coffeeName="Delicia"
              handleOnClick={handleOnClick}
              price={20}
            >
              <Image
                mt="-8"
                w="16"
                h="16"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CardCar>
            <CardCar
              coffeeAmount="120ml"
              coffeeName="Delicia"
              handleOnClick={handleOnClick}
              price={20}
            >
              <Image
                mt="-8"
                w="16"
                h="16"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CardCar>
            <CardCar
              coffeeAmount="120ml"
              coffeeName="Delicia"
              handleOnClick={handleOnClick}
              price={20}
            >
              <Image
                mt="-8"
                w="16"
                h="16"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CardCar>
            <CardCar
              coffeeAmount="120ml"
              coffeeName="Delicia"
              handleOnClick={handleOnClick}
              price={20}
            >
              <Image
                mt="-8"
                w="16"
                h="16"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CardCar>
            <CardCar
              coffeeAmount="120ml"
              coffeeName="Delicia"
              handleOnClick={handleOnClick}
              price={20}
            >
              <Image
                mt="-8"
                w="16"
                h="16"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CardCar>
            <CardCar
              coffeeAmount="120ml"
              coffeeName="Delicia"
              handleOnClick={handleOnClick}
              price={20}
            >
              <Image
                mt="-8"
                w="16"
                h="16"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CardCar>
          </VStack>
        </ScrollView>
      </View>
      <View shadow={10} bgColor="gray.900" px="8" py="26">
        <HStack alignItems="center" justifyContent="space-between" mb="5">
          <Text fontSize="text_md" fontFamily="body" color="gray.100">
            Valor Total
          </Text>
          <Text fontSize="text_lg" fontFamily="heading_baloo" color="gray.100">
            R$ 9,90
          </Text>
        </HStack>
        <ButtonComponent
          color="yellow"
          text="CONFIRMAR PEDIDO"
          handleOnClick={handleOnClickButton}
        />
      </View>
    </View>
  );
}
