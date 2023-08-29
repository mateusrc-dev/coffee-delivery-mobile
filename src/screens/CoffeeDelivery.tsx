import { Center, HStack, StatusBar } from "native-base";
import Logo1 from "@assets/Vector.svg";
import Logo2 from "@assets/Type.svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { AppNavigationRoutesProps } from "@routes/app.routes";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import { Canvas, Circle, BlurMask } from "@shopify/react-native-skia";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export function CoffeeDelivery() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const translate1 = useSharedValue(SCREEN_WIDTH / 6.62);
  const translate2 = useSharedValue(SCREEN_WIDTH / 7);
  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translate1.value }],
      opacity: opacity1.value,
    };
  });

  const animatedContainerStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translate2.value }],
      opacity: opacity2.value,
    };
  });

  const animatedContainerStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  function handleOpacity() {
    opacity1.value = withTiming(1, { easing: Easing.ease, duration: 500 });
  }

  function handleScale() {
    scale.value = withTiming(10, { easing: Easing.ease, duration: 500 });
  }

  function handleChangeTranslate1() {
    translate1.value = withTiming(0, { easing: Easing.ease, duration: 500 });
  }

  function handleChangeTranslate2() {
    translate2.value = withTiming(0, { easing: Easing.ease, duration: 500 });
    opacity2.value = withTiming(1, { easing: Easing.ease, duration: 500 });
  }

  useEffect(() => {
    setTimeout(() => {
      handleChangeTranslate2();
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handleChangeTranslate1();
    }, 2000);
  }, []);

  useEffect(() => {
    handleOpacity();
    handleScale();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("home");
    }, 5000);
  }, []);

  return (
    <Center flex="1" bg="purple.50">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Animated.View
        style={[
          animatedContainerStyle3,
          {
            backgroundColor: "rgba(1, 1, 1, 0.5)",
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            position: "absolute",
          },
        ]}
      >
        <Canvas
          style={{
            flex: 1,
            top: SCREEN_HEIGHT / 2.25,
            left: SCREEN_WIDTH / 2.64,
          }}
        >
          <Circle r={50} cx={50} cy={50} color="#8047F8">
            <BlurMask blur={0} style={"inner"} />
          </Circle>
        </Canvas>
      </Animated.View>

      <HStack alignItems="center" space="4">
        <Animated.View style={animatedContainerStyle}>
          <Logo1 />
        </Animated.View>
        <Animated.View style={animatedContainerStyle2}>
          <Logo2 />
        </Animated.View>
      </HStack>
    </Center>
  );
}
