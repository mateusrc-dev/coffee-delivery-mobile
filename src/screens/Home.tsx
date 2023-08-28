import { InputComponent } from "@components/InputComponent";
import {
  HStack,
  Image,
  Pressable,
  ScrollView,
  SectionList,
  StatusBar,
  Text,
  VStack,
  View,
} from "native-base";
import { MapPin } from "phosphor-react-native";
import Coffee from "@assets/image.png";
import { CoffeeItem } from "@components/CoffeeItem";
import CoffeeImage1 from "@assets/Coffee1.png";
import CoffeeImage2 from "@assets/Coffee2.png";
import CoffeeImage3 from "@assets/Coffee3.png";
import CoffeeImage4 from "@assets/Coffee4.png";
import CoffeeImage5 from "@assets/Coffee5.png";
import CoffeeImage6 from "@assets/Coffee6.png";
import CoffeeImage7 from "@assets/Coffee7.png";
import CoffeeImage8 from "@assets/Coffee8.png";
import CoffeeImage9 from "@assets/Coffee9.png";
import CoffeeImage10 from "@assets/Coffee10.png";
import CoffeeImage11 from "@assets/Coffee11.png";
import CoffeeImage12 from "@assets/Coffee12.png";
import { Tag } from "@components/Tag";
import { TouchableOpacity } from "react-native";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import { Cart } from "@components/Cart";
import { useState } from "react";
import { CoffeesProps, dataCoffees } from "@data/dataOfCoffees";

export function Home() {
  const [coffees] = useState<CoffeesProps[]>(dataCoffees);
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleTagClick() {
    console.log("oie");
  }

  function handleOnClickCart() {
    navigation.navigate("cart");
  }

  function handleOnClickCoffeeItem(id: string) {
    navigation.navigate("details", { coffeeId: id });
  }

  function handleImage(image: string) {
    if (image === "CoffeeImage1") {
      return CoffeeImage1;
    }

    if (image === "CoffeeImage2") {
      return CoffeeImage2;
    }

    if (image === "CoffeeImage3") {
      return CoffeeImage3;
    }

    if (image === "CoffeeImage4") {
      return CoffeeImage4;
    }
    if (image === "CoffeeImage5") {
      return CoffeeImage5;
    }

    if (image === "CoffeeImage6") {
      return CoffeeImage6;
    }

    if (image === "CoffeeImage7") {
      return CoffeeImage7;
    }

    if (image === "CoffeeImage8") {
      return CoffeeImage8;
    }
    if (image === "CoffeeImage9") {
      return CoffeeImage9;
    }

    if (image === "CoffeeImage10") {
      return CoffeeImage10;
    }

    if (image === "CoffeeImage11") {
      return CoffeeImage11;
    }

    if (image === "CoffeeImage12") {
      return CoffeeImage12;
    }
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
          <TouchableOpacity onPress={handleOnClickCart}>
            <Cart amount={0} />
          </TouchableOpacity>
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
        <SectionList
          mt="-10"
          minWidth="full"
          horizontal
          sections={coffees}
          data={coffees}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleOnClickCoffeeItem(item.id)} mr="8">
              <CoffeeItem
                coffeeName={item.coffeeName}
                coffeeType={item.coffeeType}
                description={item.description}
                mode="vertical"
                price={item.price}
              >
                <Image
                  mt="-8"
                  w="120"
                  h="120"
                  source={handleImage(item.coffeeImage)}
                  alt="imagem do cafe"
                />
              </CoffeeItem>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 32 }}
        />

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

          <SectionList
            minWidth="full"
            sections={coffees}
            data={coffees}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleOnClickCoffeeItem(item.id)}
                mb="8"
              >
                <CoffeeItem
                  coffeeName={item.coffeeName}
                  coffeeType={item.coffeeType}
                  description={item.description}
                  mode="horizontal"
                  price={item.price}
                >
                  <Image
                    mt="-8"
                    w="120"
                    h="120"
                    source={handleImage(item.coffeeImage)}
                    alt="imagem do cafe"
                  />
                </CoffeeItem>
              </Pressable>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                color="gray.300"
                fontFamily="Baloo2_700Bold"
                fontSize="text_sm"
                mb="8"
                mt="8"
              >
                {title}
              </Text>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
