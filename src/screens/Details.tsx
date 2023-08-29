import { HStack, Image, StatusBar, Text, View, useToast } from "native-base";
import { Cart } from "@components/Cart";
import { ArrowLeft } from "phosphor-react-native";
import Smoke from "@assets/Smoke.png";
import Coffee from "@assets/Coffee.png";
import { Select } from "@components/Select";
import { InputNumber } from "@components/InputNumber";
import { ButtonComponent } from "@components/Button";
import { TouchableOpacity } from "react-native";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { CoffeeProps, dataCoffees } from "@data/dataOfCoffees";
import { useState, useEffect, useCallback } from "react";
import {
  CoffeeStorageProps,
  storageCoffeeSave,
  storageGetDataCoffees,
} from "@storage/storageCoffee";
import { Loading } from "@components/Loading";

type RoutesParamsProps = {
  coffeeId: string;
};

export function Details() {
  const [coffee, setCoffee] = useState<CoffeeProps>();
  const [amount, setAmount] = useState<string>("");
  const [amountCoffee, setAmountCoffee] = useState<number>(0);
  const route = useRoute();
  const toast = useToast();
  const [coffeesInCar, setCoffeesInCar] = useState<CoffeeStorageProps[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<AppNavigationRoutesProps>();

  const { coffeeId } = route.params as RoutesParamsProps;

  function handleClick1() {
    setAmount("114ml");
  }

  function handleClick2() {
    setAmount("140ml");
  }

  function handleClick3() {
    setAmount("227ml");
  }

  function handleReturnsInputNumber(number: number) {
    setAmountCoffee(number);
  }

  function generateRandomId() {
    const randomNumber = Math.random();
    const randomId = Math.floor(randomNumber * 1000000);
    return randomId.toString();
  }

  async function handleOnClickButton() {
    const newCoffee: CoffeeStorageProps = {
      id: generateRandomId(),
      coffeeImage: coffee?.coffeeImage,
      coffeeType: coffee?.coffeeType,
      coffeeName: coffee?.coffeeName,
      description: coffee?.description,
      price: coffee?.price,
      amount: amount,
      amountOfCoffee: amountCoffee,
    };

    storageCoffeeSave(newCoffee);

    toast.show({
      title: "Café inserido no carrinho com sucesso!",
      placement: "top",
      bgColor: "red.50",
    });

    navigation.navigate("home");
  }

  function handleOnClickArrowLeft() {
    navigation.goBack();
  }

  function handleOnClickCart() {
    navigation.navigate("cart");
  }

  useEffect(() => {
    let coffeesArray = [];
    for (var i = 0; i < dataCoffees.length; i++) {
      for (var a = 0; a < dataCoffees[i].data.length; a++) {
        coffeesArray.push(dataCoffees[i].data[a]);
      }
    }

    const coffeeSelected = coffeesArray.find(
      (coffee) => coffee.id === coffeeId
    );

    if (coffeeSelected !== undefined) {
      setCoffee(coffeeSelected);
    }
  }, [coffeeId]);

  useFocusEffect(
    useCallback(() => {
      async function fetchCoffeesStorage() {
        setLoading(true);
        try {
          const coffeesStorage = await storageGetDataCoffees();

          setCoffeesInCar(coffeesStorage);
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
    <View bgColor="gray.800" flex={1}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View h="546" px="8" bg="gray.50">
        <HStack mt="12" alignItems="center" justifyContent="space-between">
          <TouchableOpacity onPress={handleOnClickArrowLeft}>
            <ArrowLeft color="#ffffff" size="24" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOnClickCart}>
            {!loading ? (
              <Cart amount={Number(coffeesInCar?.length)} />
            ) : (
              <Loading />
            )}
          </TouchableOpacity>
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
            {coffee?.coffeeType === "traditional" && "TRADICIONAL"}
            {coffee?.coffeeType === "special" && "ESPECIAL"}
            {coffee?.coffeeType === "candy" && "DOCE"}
          </Text>
        </View>
        <HStack alignItems="center" justifyContent="space-between">
          <Text color="gray.900" fontFamily="heading_baloo" fontSize="title_lg">
            {coffee?.coffeeName}
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
              {String(coffee?.price).replace(".", ",").padEnd(4, "0")}
            </Text>
          </HStack>
        </HStack>
        <Text fontFamily="body" fontSize="text_md" color="gray.400" mt="5">
          {coffee?.description}
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
            handleOnClick={handleOnClickButton}
          />
        </HStack>
      </View>
    </View>
  );
}
