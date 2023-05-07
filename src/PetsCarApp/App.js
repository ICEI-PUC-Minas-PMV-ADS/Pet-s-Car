//Thiago: desenvolvi as rotas com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomePage } from "./pages/welcomePage/welcomePage";
import { ClienteRouter } from "./pages/viewsCliente/router";
import { MotoristaRouter } from "./pages/viewsMotorista/router";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Raleway-400": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Italic-400": require("./assets/fonts/Raleway-Italic.ttf"),
    "Raleway-500": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-600": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-700": require("./assets/fonts/Raleway-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"WelcomePage"}
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name='WelcomePage'
          options={{ title: "" }}
          component={WelcomePage}
        />
        <Stack.Screen
          name='ClienteRouter'
          options={{ title: "", headerShown: false }}
          component={ClienteRouter}
        />
        <Stack.Screen
          name='MotoristaRouter'
          options={{ title: "", headerShown: false }}
          component={MotoristaRouter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
