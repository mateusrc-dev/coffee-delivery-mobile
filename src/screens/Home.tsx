import { InputComponent } from "@components/Input";
import {
  Box,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import Coffee from "@assets/image.png";
import { CoffeeItem } from "@components/CoffeeItem";
import CoffeeImage1 from "@assets/Coffee1.png";
import { ButtonComponent } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Select } from "@components/Select";
import { Tag } from "@components/Tag";
import { InputNumber } from "@components/InputNumber";
import { CardCar } from "@components/CardCar";

export function Home() {
  function handleClick(text: string) {
    console.log(`oie, ${text}`);
  }

  function handleSelect(state: boolean) {
    console.log(state);
  }

  function handleReturnsNumber(num: number) {
    console.log(num);
  }

  function handleClickCard() {
    console.log("cliquei");
  }

  return (
    <View flex="1" px={8} bgColor="gray.50">
      <ScrollView>
        <HStack mt="10" justifyContent="space-between" alignItems="center">
          <HStack space={2} alignItems="center">
            <MapPin weight="fill" color="#8047F8" size={20} />
            <Text fontSize="text_md" fontFamily="body" color="gray.800">
              Porto alegre, RS
            </Text>
          </HStack>
          <ShoppingCart weight="fill" color="#C47F17" size={20} />
        </HStack>
        <Text color="gray.900" fontFamily="heading_baloo" fontSize="text_lg">
          Encontre o café perfeito para qualquer hora do dia
        </Text>
        <View flex="1">
          <InputComponent />
          <Image
            source={Coffee}
            alt="sementes de cafe"
            position="absolute"
            top={42}
            right={-20}
          />
        </View>
        <View mt="120">
          <CoffeeItem
            coffeeName="Lindo"
            coffeeType="traditional"
            description="café delicia"
            mode="vertical"
            price={20.0}
          >
            <Image
              mt="-8"
              w="120"
              h="120"
              source={CoffeeImage1}
              alt="imagem do cafe"
            />
          </CoffeeItem>
          <CoffeeItem
            coffeeName="Lindo"
            coffeeType="traditional"
            description="café delicia"
            mode="horizontal"
            price={20.0}
          >
            <Image
              mt="-8"
              w="24"
              h="24"
              source={CoffeeImage1}
              alt="imagem do cafe"
            />
          </CoffeeItem>
        </View>
        <ButtonComponent
          handleOnClick={handleClick}
          color="purple"
          text="SOU LINDO DEMAIS"
        />
        <ButtonIcon handleOnClick={handleClick} svg="trash" />
        <Select handleOnClick={handleSelect} text="sou gostoso" />
        <VStack>
          <Tag handleOnClick={handleSelect} text="oiiieeee!" />
        </VStack>
        <Box bgColor="purple.100">
          <InputNumber
            returnsCountNumber={handleReturnsNumber}
            withBorder={true}
          />
        </Box>
        <CardCar
          coffeeAmount="200 ml"
          coffeeName="Café lindo"
          handleOnClick={handleClickCard}
          price={50}
        >
          <Image
            mt="-8"
            w="16"
            h="16"
            source={CoffeeImage1}
            alt="imagem do cafe"
          />
        </CardCar>
      </ScrollView>
    </View>
  );
}
