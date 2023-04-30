import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AvaliacaoAgendaMotorista } from "./avaliacaoAgenda";
import { DetalhesAgendaMotorista } from "./detalhesAgenda";

const Stack = createNativeStackNavigator();

export function DetalhesAgendaMotoristaNav() {
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
