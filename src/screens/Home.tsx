import { InputComponent } from "@components/InputComponent";
import {
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
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import { coffeesData } from "@data/coffees";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const HStackAnimated = Animated.createAnimatedComponent(HStack);
const SCREEN_WIDTH = Dimensions.get("screen").width;
// const SCREEN_HEIGHT = Dimensions.get("screen").height;

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
  // const [scrollYValue, setScrollYValue] = useState<number>(0);

  console.log(tagSelected);

  const translate1 = useSharedValue(-342);
  const translate2 = useSharedValue(50);
  const translate3 = useSharedValue(SCREEN_WIDTH);
  const translate4 = useSharedValue(300);
  const opacity1 = useSharedValue(0);
  const scrollY = useSharedValue(0);
  const containerPosition = useSharedValue(0);

  const onPan = Gesture.Pan()
    .onUpdate((event) => {
      console.log(event.translationY);
      const moveUp = event.translationY < 0 && event.translationY > -500;
      if (moveUp) {
        containerPosition.value = event.translationY;
      }
      const moveDown = event.translationY > -500 && event.translationY < 0;
      if (moveDown) {
        containerPosition.value = event.translationY;
      }
    })
    .onEnd((event) => {
      if (event.translationY > -400) {
        containerPosition.value = withTiming(-500);
      }
      if (event.translationY > -200) {
        containerPosition.value = withTiming(0);
      }
    });

  const dragStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: containerPosition.value }],
    };
  });

  const backgroundAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        containerPosition.value,
        [0, -500],
        ["#272221", "#FAFAFA"]
      ),
      color: interpolateColor(
        containerPosition.value,
        [0, -500],
        ["#FAFAFA", "#272221"]
      ),
    };
  });

  const borderAnimation = useAnimatedStyle(() => {
    return {
      borderBottomWidth: 1,
      borderBottomColor: interpolateColor(
        containerPosition.value,
        [0, -500],
        ["transparent", "#D7D5D5"]
      ),
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      console.log(event);
      scrollY.value = event.contentOffset.y;
    },
  });

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

  return (
    <View>
      <Animated.View
        style={[animatedContainerStyle2, backgroundAnimation, borderAnimation]}
      >
        <HStack
          mt="10"
          mb="2"
          justifyContent="space-between"
          alignItems="center"
          // borderBottomWidth={1}
          // borderBottomColor={"gray.50"}
          pb={2}
          px={8}
        >
          <HStack space={2} alignItems="center">
            <MapPin weight="fill" color="#8047F8" size={20} />
            <Animated.Text
              style={[
                backgroundAnimation,
                { fontSize: 16, fontFamily: "body" },
              ]}
            >
              Porto alegre, RS
            </Animated.Text>
          </HStack>
          <TouchableOpacity onPress={handleOnClickCart}>
            {loading ? <Loading /> : <Cart amount={Number(coffeesInCar)} />}
          </TouchableOpacity>
        </HStack>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        scrollEnabled={false}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <Animated.View
          style={[
            animatedContainerStyle,
            backgroundAnimation,
            dragStyles,
            { height: 242 },
          ]}
        />
        <Animated.View
          style={[
            animatedContainerStyle2,
            dragStyles,
            { position: "absolute", paddingLeft: 32 },
          ]}
        >
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
          <Animated.View style={[animatedContainerStyle3, dragStyles]}>
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
          <GestureDetector gesture={onPan}>
            <Animated.View
              style={[
                animatedContainerStyle4,
                dragStyles,
                { backgroundColor: "#FAFAFA", paddingHorizontal: 32 },
              ]}
            >
              <Text
                color="gray.200"
                fontFamily="Baloo2_700Bold"
                fontSize="text_md"
                mb="3"
              >
                Nossos cafés
              </Text>
              <HStackAnimated
                space="2"
                style={[borderAnimation, { paddingBottom: 12 }]}
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
          </GestureDetector>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
