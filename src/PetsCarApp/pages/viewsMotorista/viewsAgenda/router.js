import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AvaliacaoAgendaMotorista } from "./avaliacaoAgenda";
import { DetalhesAgendaMotorista } from "./detalhesAgenda";

const Stack = createNativeStackNavigator();

export function DetalhesAgendaMotoristaNav({ route }) {
  const idAgendamento = route.params.idAgendamento;
  const idMotorista = route.params.idMotorista;

  return (
    <Stack.Navigator
      initialRouteName='DetalhesAgendaMotorista'
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
        name='DetalhesAgendaMotorista'
        options={{
          title: "Detalhes",
        }}
        component={DetalhesAgendaMotorista}
        initialParams={{
          idAgendamento: idAgendamento,
          idMotorista: idMotorista,
        }}
      />
      <Stack.Screen
        name='AvaliacaoAgendaMotorista'
        options={{
          title: "Avaliação do Cliente",
        }}
        component={AvaliacaoAgendaMotorista}
      />
    </Stack.Navigator>
  );
}
