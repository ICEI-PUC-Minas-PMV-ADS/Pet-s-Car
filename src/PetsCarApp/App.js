//Thiago: desenvolvi as primeiras informações da tela Inicial com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginCliente } from "./pages/viewsCliente/loginCliente"
import { LoginMotorista } from "./pages/viewsMotorista/loginMotorista"
import { WelcomePage } from "./pages/welcomePage/welcomePage"

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    "Raleway-400": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Italic-400": require("./assets/fonts/Raleway-Italic.ttf"),
    "Raleway-500": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-600": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-700": require("./assets/fonts/Raleway-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"WelcomePage"}
        screenOptions={{ headerShadowVisible: false }}
      >
        <Stack.Screen
          name='WelcomePage'
          options={{ title: "" }}
          component={WelcomePage}
        />
        <Stack.Screen
          name='LoginCliente'
          options={{ title: "" }}
          component={LoginCliente}
        />
        <Stack.Screen
          name='LoginMotorista'
          options={{ title: "" }}
          component={LoginMotorista}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
