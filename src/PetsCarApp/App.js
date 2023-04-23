//Thiago: desenvolvi as primeiras informações da tela Inicial com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginCliente } from "./pages/viewsCliente/loginCliente";
import { LoginMotorista } from "./pages/viewsMotorista/loginMotorista";
import { WelcomePage } from "./pages/welcomePage/welcomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AgendaCliente } from "./pages/viewsCliente/agendaCliente";
import { PerfilCliente } from "./pages/viewsCliente/perfilCliente";
import { PetsCliente } from "./pages/viewsCliente/petsCliente";
import { IconAgendamentos, IconPerfil, IconPets } from "./components/icons";
import { ButtonHeaderAdd, ButtonHeaderEditar } from "./components/button";
import { LogoPetsCarMenor } from "./components/logo";
import { CadastroCliente } from "./pages/viewsCliente/cadastroCliente";
import { AdicionarAgenda } from "./pages/viewsCliente/viewsAgenda/adicionarAgenda";
import { DetalhesAgenda } from "./pages/viewsCliente/viewsAgenda/detalhesAgenda";
import { EditarAgenda } from "./pages/viewsCliente/viewsAgenda/editarAgenda";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ClienteTabNavegation({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4060FF",
        tabBarInactiveTintColor: "#828282",
        tabBarStyle: {
          paddingBottom: 18,
          paddingTop: 18,
          paddingLeft: 40,
          paddingRight: 40,
          height: 82,
        },
        headerStyle: {
          backgroundColor: "#4060FF",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: 120,
        },
        headerTitleStyle: {
          color: "#FFFFFF",
          fontFamily: "Raleway-600",
          fontSize: 16,
          alignSelf: "center",
        },
        tabBarLabelStyle: {
          fontFamily: "Raleway-600",
          fontSize: 14,
        },
        headerLeft: () => <LogoPetsCarMenor />,
        headerLeftContainerStyle: {
          paddingTop: 10,
          paddingLeft: 22,
        },
        headerBackgroundContainerStyle: {
          backgroundColor: "#FFF",
          height: 120,
        },
      }}
    >
      <Tab.Screen
        name='Agenda'
        component={AgendaCliente}
        options={{
          tabBarIcon: ({ color }) => <IconAgendamentos color={color} />,
          headerRight: () => (
            <ButtonHeaderAdd
              title={"Adicionar"}
              onPress={() => {
                navigation.navigate("AdicionarAgendaCliente");
              }}
            />
          ),
          headerRightContainerStyle: {
            paddingRight: 22,
          },
        }}
      />
      <Tab.Screen
        name='Pets'
        component={PetsCliente}
        options={{
          tabBarIcon: ({ color }) => <IconPets color={color} />,
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={PerfilCliente}
        options={{
          tabBarIcon: ({ color }) => <IconPerfil color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function DetalhesAgendaNav({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName='DetalhesAgenda'
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4060FF",
        },
        headerTitleStyle: {
          color: "#FFFFFF",
          fontFamily: "Raleway-600",
          fontSize: 16,
        },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Stack.Screen
        name='DetalhesAgenda'
        options={{
          title: "Detalhes",
          headerRight: () => (
            <ButtonHeaderEditar
              title={"Editar"}
              onPress={() => {
                navigation.navigate("EditarAgenda");
              }}
            />
          ),
        }}
        component={DetalhesAgenda}
      />
      <Stack.Screen
        name='EditarAgenda'
        options={{
          title: "Editar",
        }}
        component={EditarAgenda}
      />
    </Stack.Navigator>
  );
}

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
          name='LoginCliente'
          options={{ title: "" }}
          component={LoginCliente}
        />
        <Stack.Screen
          name='CadastroCliente'
          options={{ title: "" }}
          component={CadastroCliente}
        />
        <Stack.Screen
          name='LoginMotorista'
          options={{ title: "" }}
          component={LoginMotorista}
        />
        <Stack.Screen
          name='ClienteTabNavegation'
          options={{ title: "", headerShown: false }}
          component={ClienteTabNavegation}
        />
        <Stack.Screen
          name='AdicionarAgendaCliente'
          options={{
            title: "Adicionar",
            headerStyle: {
              backgroundColor: "#4060FF",
            },
            headerTitleStyle: {
              color: "#FFFFFF",
              fontFamily: "Raleway-600",
              fontSize: 16,
            },
            headerTintColor: "#FFFFFF",
          }}
          component={AdicionarAgenda}
        />
        <Stack.Screen
          name='DetalhesAgendaNav'
          options={{ title: "", headerShown: false }}
          component={DetalhesAgendaNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
