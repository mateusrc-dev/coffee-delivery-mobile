import { CardCar } from "@components/CardCar";
import {
  FlatList,
  HStack,
  Image,
  ScrollView,
  StatusBar,
  Text,
  VStack,
  View,
} from "native-base";
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
import { ArrowLeft, Warning } from "phosphor-react-native";
import { ButtonComponent } from "@components/Button";
import { TouchableOpacity } from "react-native";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  CoffeeStorageProps,
  deleteAllStorageCoffees,
  deleteCoffeeStorageById,
  storageGetDataCoffees,
} from "@storage/storageCoffee";

export function Cart() {
  const [coffeesInCar, setCoffeesInCar] = useState<CoffeeStorageProps[]>([]);
  const navigation = useNavigation<AppNavigationRoutesProps>();
  const [loading, setLoading] = useState<boolean>(false);

  console.log(coffeesInCar);

  async function handleOnClick(id: string) {
    setLoading(false);
    const coffeesWithoutCoffeeDeleted = await deleteCoffeeStorageById(id);
    setCoffeesInCar(coffeesWithoutCoffeeDeleted);
    setLoading(true);
  }

  function handleOnClickButton() {
    deleteAllStorageCoffees();
    navigation.navigate("finishedOrder");
  }

  function handleOnClickArrowLeft() {
    navigation.goBack();
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

  useEffect(() => {
    async function fetchCoffeesStorage() {
      setLoading(false);
      const coffeesStorage = await storageGetDataCoffees();

      setCoffeesInCar(coffeesStorage);
      setLoading(true);
    }

    fetchCoffeesStorage();
  }, []);

  return loading ? (
    <View flex="1" bg="gray.800">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View flex={1}>
        <HStack
          mt="8"
          py="7"
          alignItems="center"
          justifyContent="space-around"
          borderBottomWidth={1}
          borderBottomColor="gray.400"
        >
          <TouchableOpacity onPress={handleOnClickArrowLeft}>
            <ArrowLeft color="#272221" size="24" />
          </TouchableOpacity>
          <Text color="gray.100" fontFamily="heading_baloo" fontSize="text_md">
            Carrinho
          </Text>
          <ArrowLeft color="#FAFAFA" size="24" />
        </HStack>
        {coffeesInCar.length !== 0 && (
          <FlatList
            flex="1"
            minWidth="full"
            data={coffeesInCar}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardCar
                coffeeAmount={item.amount === undefined ? "" : item.amount}
                coffeeName={
                  item.coffeeName === undefined ? "" : item.coffeeName
                }
                handleOnClick={handleOnClick}
                price={item.price === undefined ? 1 : Number(item.price)}
                id={item.id}
              >
                <Image
                  mt="-8"
                  w="16"
                  h="16"
                  source={
                    item.coffeeImage === undefined
                      ? ""
                      : handleImage(item.coffeeImage)
                  }
                  alt="imagem do cafe"
                />
              </CardCar>
            )}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <HStack alignItems="center" space="2">
                <Warning color="#C44117" size={30} />
                <Text color="red.50" fontFamily="heading" fontSize="title_md">
                  Não há nenhum item no carrinho!
                </Text>
              </HStack>
            )}
          />
        )}
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
  ) : (
    <View>
      <Text>Carregando...</Text>
    </View>
  );
}
