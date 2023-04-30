import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginMotorista } from "./loginMotorista";
import { CadastroMotorista } from "./cadastroMotorista";
import { RecuperarSenhaCliente } from "../viewsCliente/recuperarSenhaCliente";
import { RedefinirSenhaMotorista } from "./redefinirSenhaMotorista";
import { IconAgendamentos, IconPerfil } from "../../components/icons";
import { AgendaMotorista } from "./agendaMotorista";
import { PerfilMotorista } from "./perfilMotorista";
import { DetalhesAgendaMotoristaNav } from "./viewsAgenda/router";
import { LogoPetsCarMenor } from "../../components/logo";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function MotoristaRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='LoginMotorista'
        options={{ title: "" }}
        component={LoginMotorista}
      />
      <Stack.Screen
        name='CadastroMotorista'
        options={{ title: "" }}
        component={CadastroMotorista}
      />
      <Stack.Screen
        name='RecuperarSenhaMotorista'
        options={{ title: "" }}
        component={RecuperarSenhaCliente}
      />
      <Stack.Screen
        name='RedefinirSenhaMotorista'
        options={{ title: "" }}
        component={RedefinirSenhaMotorista}
      />
      <Stack.Screen
        name='MotoristaNavigation'
        options={{
          title: "",
          headerShown: false,
        }}
        component={MotoristaNavigation}
      />
    </Stack.Navigator>
  );
}

export function MotoristaNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MotoristaTabNavegation'
        options={{
          title: "",
          headerShown: false,
        }}
        component={MotoristaTabNavegation}
      />
      <Stack.Screen
        name='DetalhesAgendaMotoristaNav'
        options={{ title: "", headerShown: false }}
        component={DetalhesAgendaMotoristaNav}
      />
    </Stack.Navigator>
  );
}

export function MotoristaTabNavegation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4060FF",
        tabBarInactiveTintColor: "#828282",
        headerTitleAlign: "left",
        tabBarStyle: {
          paddingBottom: 18,
          paddingTop: 18,
          paddingHorizontal: 60,
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
        component={AgendaMotorista}
        options={{
          tabBarIcon: ({ color }) => <IconAgendamentos color={color} />,
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={PerfilMotorista}
        options={{
          tabBarIcon: ({ color }) => <IconPerfil color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
