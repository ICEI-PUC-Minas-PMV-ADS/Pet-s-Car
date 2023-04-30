import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AvaliacaoAgendaCliente } from "./avaliacaoAgenda";
import { DetalhesAgendaCliente } from "./detalhesAgenda";
import { EditarAgendaCliente } from "./editarAgenda";

const Stack = createNativeStackNavigator();

export function DetalhesAgendaClienteNav() {
  return (
    <Stack.Navigator
      initialRouteName='DetalhesAgendaCliente'
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
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name='DetalhesAgendaCliente'
        options={{
          title: "Detalhes",
        }}
        component={DetalhesAgendaCliente}
      />
      <Stack.Screen
        name='EditarAgendaCliente'
        options={{
          title: "Editar",
        }}
        component={EditarAgendaCliente}
      />
      <Stack.Screen
        name='AvaliacaoAgendaCliente'
        options={{
          title: "Avaliação do Motorista",
        }}
        component={AvaliacaoAgendaCliente}
      />
    </Stack.Navigator>
  );
}
