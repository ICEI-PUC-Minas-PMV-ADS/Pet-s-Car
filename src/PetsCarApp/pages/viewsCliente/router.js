import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AgendaCliente } from "./agendaCliente";
import { PetsCliente } from "./petsCliente";
import { PerfilCliente } from "./perfilCliente";
import { LogoPetsCarMenor } from "../../components/logo";
import { IconAgendamentos, IconPerfil, IconPets } from "../../components/icons";
import { AdicionarAgendaCliente } from "./viewsAgenda/adicionarAgenda";
import { DetalhesAgendaClienteNav } from "./viewsAgenda/router";
import { LoginCliente } from "./loginCliente";
import { CadastroCliente } from "./cadastroCliente";
import { RecuperarSenhaCliente } from "./recuperarSenhaCliente";
import { RedefinirSenhaCliente } from "./redefinirSenhaCliente";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function ClienteRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
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
        name='RecuperarSenhaCliente'
        options={{ title: "" }}
        component={RecuperarSenhaCliente}
      />
      <Stack.Screen
        name='RedefinirSenhaCliente'
        options={{ title: "" }}
        component={RedefinirSenhaCliente}
      />
      <Stack.Screen
        name='ClienteNavigation'
        options={{
          title: "",
          headerShown: false,
        }}
        component={ClienteNavigation}
      />
    </Stack.Navigator>
  );
}

export function ClienteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ClienteTabNavegation'
        options={{
          title: "",
          headerShown: false,
        }}
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
          headerTitleAlign: "center",
        }}
        component={AdicionarAgendaCliente}
      />
      <Stack.Screen
        name='DetalhesAgendaClienteNav'
        options={{ title: "", headerShown: false }}
        component={DetalhesAgendaClienteNav}
      />
    </Stack.Navigator>
  );
}

export function ClienteTabNavegation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4060FF",
        tabBarInactiveTintColor: "#828282",
        headerTitleAlign: "left",
        tabBarStyle: {
          paddingBottom: 18,
          paddingTop: 18,
          paddingHorizontal: 40,
          height: 82,
          shadowColor: "#999999",
          borderTopColor: "transparent",
          position: "absolute",
          borderRadius: 120,
          margin: 15,
          elevation: 5,
        },
        headerStyle: {
          backgroundColor: "#4060FF",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        },
        headerTitleStyle: {
          color: "#FFFFFF",
          fontFamily: "Raleway-600",
          fontSize: 18,
          textAlignVertical: "center",
        },
        tabBarLabelStyle: {
          fontFamily: "Raleway-600",
          fontSize: 14,
        },
        headerLeft: () => <LogoPetsCarMenor />,
        headerLeftContainerStyle: {
          paddingLeft: 22,
          paddingTop: 10,
        },
        headerBackgroundContainerStyle: {
          backgroundColor: "#FFF",
        },
      }}
    >
      <Tab.Screen
        name='Agenda'
        component={AgendaCliente}
        options={{
          tabBarIcon: ({ color }) => <IconAgendamentos color={color} />,
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
