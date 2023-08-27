import { InputComponent } from "@components/InputComponent";
import {
  Box,
  HStack,
  Image,
  ScrollView,
  StatusBar,
  Text,
  VStack,
  View,
} from "native-base";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import Coffee from "@assets/image.png";
import { CoffeeItem } from "@components/CoffeeItem";
import CoffeeImage1 from "@assets/Coffee1.png";
import { Tag } from "@components/Tag";

export function Home() {
  function handleTagClick() {
    console.log("oie");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View bgColor="gray.50" px={8} h={342}>
        <HStack
          mt="10"
          mb="12"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack space={2} alignItems="center">
            <MapPin weight="fill" color="#8047F8" size={20} />
            <Text fontSize="text_md" fontFamily="body" color="gray.800">
              Porto alegre, RS
            </Text>
          </HStack>
          <ShoppingCart weight="fill" color="#C47F17" size={20} />
        </HStack>
        <Text
          color="gray.900"
          fontFamily="heading_baloo"
          fontSize="text_lg"
          mb="4"
        >
          Encontre o café perfeito para qualquer hora do dia
        </Text>
        <View flex="1">
          <InputComponent
            keyboardType="default"
            placeholder="Pesquisar"
            autoCapitalize="none"
          />
          <Image
            source={Coffee}
            alt="sementes de cafe"
            position="absolute"
            top={42}
            right={-20}
          />
        </View>
      </View>
      <View bgColor="gray.800">
        <ScrollView horizontal mt="-16" showsHorizontalScrollIndicator={false}>
          <HStack space={8} p="8">
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
          </HStack>
        </ScrollView>
        <View bgColor="gray.800" px="8">
          <Text
            color="gray.200"
            fontFamily="Baloo2_700Bold"
            fontSize="text_md"
            mb="3"
          >
            Nossos cafés
          </Text>
          <HStack mb="8" space="2">
            <Tag handleOnClick={handleTagClick} text="TRADICIONAIS" />
            <Tag handleOnClick={handleTagClick} text="DOCES" />
            <Tag handleOnClick={handleTagClick} text="ESPECIAIS" />
          </HStack>

          <Text
            color="gray.300"
            fontFamily="Baloo2_700Bold"
            fontSize="text_sm"
            mb="8"
          >
            Tradicionais
          </Text>
          <VStack mb="12" space="8">
            <CoffeeItem
              coffeeName="Lindo"
              coffeeType="traditional"
              description="café delicia"
              mode="horizontal"
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
                w="120"
                h="120"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CoffeeItem>
          </VStack>
          <Text
            color="gray.300"
            fontFamily="Baloo2_700Bold"
            fontSize="text_sm"
            mb="8"
          >
            Doces
          </Text>
          <VStack mb="12" space="8">
            <CoffeeItem
              coffeeName="Lindo"
              coffeeType="traditional"
              description="café delicia"
              mode="horizontal"
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
                w="120"
                h="120"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CoffeeItem>
          </VStack>
          <Text
            color="gray.300"
            fontFamily="Baloo2_700Bold"
            fontSize="text_sm"
            mb="8"
          >
            Especiais
          </Text>
          <VStack mb="12" space="8">
            <CoffeeItem
              coffeeName="Lindo"
              coffeeType="traditional"
              description="café delicia"
              mode="horizontal"
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
                w="120"
                h="120"
                source={CoffeeImage1}
                alt="imagem do cafe"
              />
            </CoffeeItem>
          </VStack>
        </View>
      </View>
    </ScrollView>
  );
}
