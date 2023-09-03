import { InputComponent } from "@components/InputComponent";
import {
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  SectionList,
  StatusBar,
  Text,
  View,
} from "native-base";
import { MapPin, Warning } from "phosphor-react-native";
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
import { Dimensions, TouchableOpacity } from "react-native";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Cart } from "@components/Cart";
import { useState, useEffect, useCallback } from "react";
import { CoffeeProps, CoffeesProps, dataCoffees } from "@data/dataOfCoffees";
import { storageGetDataCoffees } from "@storage/storageCoffee";
import { Loading } from "@components/Loading";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedRef,
} from "react-native-reanimated";
import { coffeesData } from "@data/coffees";

const HStackAnimated = Animated.createAnimatedComponent(HStack);
const SCREEN_WIDTH = Dimensions.get("screen").width;

export function Home() {
  const [coffees] = useState<CoffeesProps[]>(dataCoffees);
  const [coffeesFiltered] = useState<CoffeeProps[]>(coffeesData);
  const [text, setText] = useState<string>("");
  const [coffeesFilteredTwo, setCoffeesFilteredTwo] = useState<CoffeeProps[]>(
    []
  );
  const [coffeesInCar, setCoffeesInCar] = useState<number>(0);
  const navigation = useNavigation<AppNavigationRoutesProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [tagSelected, setTagSelected] = useState<string>("TRADICIONAIS");

  const translate1 = useSharedValue(-342);
  const translate2 = useSharedValue(50);
  const translate3 = useSharedValue(SCREEN_WIDTH);
  const translate4 = useSharedValue(300);
  const opacity1 = useSharedValue(0);
  const ScrollViewRef = useAnimatedRef<Animated.ScrollView>();

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate1.value }],
    };
  });

  const animatedContainerStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate2.value }],
      opacity: opacity1.value,
    };
  });

  const animatedContainerStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translate3.value }],
    };
  });

  const animatedContainerStyle4 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate4.value }],
    };
  });

  function handleChangeTranslate() {
    translate1.value = withTiming(0, { easing: Easing.ease, duration: 1000 });
  }

  function handleChangeTranslate2() {
    translate2.value = withTiming(0, { easing: Easing.ease, duration: 1000 });
    opacity1.value = withTiming(1, { easing: Easing.ease, duration: 1000 });
  }

  function handleChangeTranslate3() {
    translate3.value = withTiming(0, { easing: Easing.ease, duration: 1000 });
  }

  function handleChangeTranslate4() {
    translate4.value = withTiming(0, { easing: Easing.ease, duration: 1000 });
  }

  function handleReturnsTag(text: string) {
    setTagSelected(text);
    if (text === "TRADICIONAIS") {
      ScrollViewRef.current?.scrollTo({ x: 0, y: 550, animated: true });
    } else if (text === "DOCES") {
      ScrollViewRef.current?.scrollTo({ x: 0, y: 1500, animated: true });
    } else if (text === "ESPECIAIS") {
      ScrollViewRef.current?.scrollTo({ x: 0, y: 2000, animated: true });
    }
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

  function returnsTextInput(text: string) {
    setText(text);
  }

  useEffect(() => {
    const newCoffeesFiltered = coffeesFiltered.filter((coffee) =>
      coffee.coffeeName.toLowerCase().includes(text)
    );

    setCoffeesFilteredTwo(newCoffeesFiltered);
  }, [text]);

  useEffect(() => {
    handleChangeTranslate();
    handleChangeTranslate2();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handleChangeTranslate3();
      handleChangeTranslate4();
    }, 1000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      async function fetchCoffeesStorage() {
        try {
          setLoading(true);
          const coffeesStorage = await storageGetDataCoffees();
          setCoffeesInCar(coffeesStorage.length);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }

      fetchCoffeesStorage();
    }, [])
  );

  return !loading ? (
    <View>
      <Animated.ScrollView
        ref={ScrollViewRef}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <Animated.View
          style={[
            animatedContainerStyle,
            { height: 342, backgroundColor: "#272221" },
          ]}
        />
        <Animated.View
          style={[
            animatedContainerStyle2,
            { position: "absolute", paddingLeft: 32 },
          ]}
        >
          <Animated.View style={[animatedContainerStyle2]}>
            <HStackAnimated
              marginTop="10"
              mb="2"
              justifyContent="space-between"
              alignItems="center"
              pt={4}
              pb={2}
            >
              <HStack space={2} alignItems="center">
                <MapPin weight="fill" color="#8047F8" size={20} />
                <Text
                  style={[
                    { fontSize: 16, fontFamily: "body", color: "#FAFAFA" },
                  ]}
                >
                  Porto alegre, RS
                </Text>
              </HStack>
              <TouchableOpacity onPress={handleOnClickCart}>
                <Cart amount={Number(coffeesInCar)} />
              </TouchableOpacity>
            </HStackAnimated>
          </Animated.View>
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
              returnsInputText={returnsTextInput}
            />
            <Image
              source={Coffee}
              alt="sementes de cafe"
              position="absolute"
              top={42}
              right={-20}
            />
          </View>
        </Animated.View>
        <View bgColor="gray.800">
          <Animated.View style={[animatedContainerStyle3]}>
            <FlatList
              mt="-16"
              minWidth="full"
              horizontal
              data={text.length === 0 ? coffeesFiltered : coffeesFilteredTwo}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleOnClickCoffeeItem(item.id)}
                  mr="8"
                >
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
              contentContainerStyle={{
                paddingVertical: 30,
                paddingHorizontal: 32,
              }}
              ListEmptyComponent={() => (
                <HStack alignItems="center" space="2">
                  <Warning color="#C44117" size={30} />
                  <Text color="red.50" fontFamily="heading" fontSize="title_md">
                    Não foi encontrado resultados!
                  </Text>
                </HStack>
              )}
            />
          </Animated.View>

          <Animated.View
            style={[animatedContainerStyle4, { backgroundColor: "#FAFAFA" }]}
          >
            <Text
              color="gray.200"
              fontFamily="Baloo2_700Bold"
              fontSize="text_md"
              mb="3"
              px="8"
            >
              Nossos cafés
            </Text>
            <HStackAnimated
              space="2"
              style={[{ paddingBottom: 12, paddingHorizontal: 32 }]}
            >
              <Tag
                returnsText={handleReturnsTag}
                text="TRADICIONAIS"
                isSelectedTag={tagSelected === "TRADICIONAIS"}
              />
              <Tag
                returnsText={handleReturnsTag}
                text="DOCES"
                isSelectedTag={tagSelected === "DOCES"}
              />
              <Tag
                returnsText={handleReturnsTag}
                text="ESPECIAIS"
                isSelectedTag={tagSelected === "ESPECIAIS"}
              />
            </HStackAnimated>

            <SectionList
              minWidth="full"
              sections={coffees}
              data={coffees}
              paddingX={8}
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
          </Animated.View>
        </View>
      </Animated.ScrollView>
    </View>
  ) : (
    <Center backgroundColor={"gray.800"} flex="1">
      <HStack space="2">
        <Text fontFamily={"heading"} color="gray.100" fontSize={"title_lg"}>
          Carregando
        </Text>
        <Loading />
      </HStack>
    </Center>
  );
}
