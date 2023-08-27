import { Center, Image, StatusBar, Text } from "native-base";
import Illustration from "@assets/Illustration.png";
import { ButtonComponent } from "@components/Button";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";

export function FinishedOrder() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleOnClickInButton() {
    navigation.navigate("home");
  }

  return (
    <Center flex={1}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        w="270"
        h="161"
        mb="10"
        source={Illustration}
        alt="imagem da moto fazendo a entrega"
      />
      <Text color="orange.100" fontFamily="heading_baloo" fontSize="title_lg">
        Uhu! Pedido confirmado
      </Text>
      <Text color="gray.100" fontSize="text_sm" fontFamily="body" mb="16">
        Agora é só aguardar que logo o café chegará até você!
      </Text>
      <ButtonComponent
        color="purple"
        text="IR PARA A HOME"
        handleOnClick={handleOnClickInButton}
      />
    </Center>
  );
}
