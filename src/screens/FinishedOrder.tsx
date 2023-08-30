import { Center, Image, StatusBar, Text } from "native-base";
import Illustration from "@assets/Illustration.png";
import { ButtonComponent } from "@components/Button";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  Easing,
  Keyframe,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import { useEffect } from "react";

const ImageAnimated = Animated.createAnimatedComponent(Image);

const SCREEN_WIDTH = Dimensions.get("screen").width;
// const SCREEN_HEIGHT = Dimensions.get("screen").height;

export function FinishedOrder() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const enteringKeyFrame = new Keyframe({
    0: {
      transform: [{ translateX: -SCREEN_WIDTH }],
    },
    80: {
      transform: [{ translateX: 50 }],
    },
    100: {
      transform: [{ translateX: 0 }],
    },
  });

  const translate1 = useSharedValue(50);
  const opacity = useSharedValue(0);
  const opacity2 = useSharedValue(0);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate1.value }],
      opacity: opacity.value,
    };
  });

  const animatedContainerStyle2 = useAnimatedStyle(() => {
    return {
      opacity: opacity2.value,
    };
  });

  function handleChangeTranslate() {
    translate1.value = withTiming(0, {
      easing: Easing.ease,
      duration: 500,
    });
    opacity.value = withTiming(1, {
      easing: Easing.ease,
      duration: 500,
    });
  }

  function handleChangeOpacity() {
    opacity2.value = withTiming(1, {
      easing: Easing.ease,
      duration: 250,
    });
  }

  function handleOnClickInButton() {
    navigation.navigate("home");
  }

  useEffect(() => {
    setTimeout(() => {
      handleChangeTranslate();
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handleChangeOpacity();
    }, 1500);
  }, []);

  return (
    <Center flex={1}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ImageAnimated
        entering={enteringKeyFrame.duration(1000)}
        w="270"
        h="161"
        mb="10"
        source={Illustration}
        alt="imagem da moto fazendo a entrega"
      />
      <Animated.View style={[animatedContainerStyle, { alignItems: "center" }]}>
        <Text color="orange.100" fontFamily="heading_baloo" fontSize="title_lg">
          Uhu! Pedido confirmado
        </Text>
        <Text color="gray.100" fontSize="text_sm" fontFamily="body" mb="16">
          Agora é só aguardar que logo o café chegará até você!
        </Text>
      </Animated.View>
      <Animated.View style={animatedContainerStyle2}>
        <ButtonComponent
          color="purple"
          text="IR PARA A HOME"
          handleOnClick={handleOnClickInButton}
        />
      </Animated.View>
    </Center>
  );
}
