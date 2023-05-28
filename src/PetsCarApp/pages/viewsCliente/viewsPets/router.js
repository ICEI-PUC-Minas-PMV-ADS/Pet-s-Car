import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetalhesPetClient } from "./petsDetalhes";
import { EditarPetClient } from "./petsEditar";

const Stack = createNativeStackNavigator();

export function DetalhesPetsClienteNav({ route }) {
  const idPet = route.params.idPet;

  return (
    <Stack.Navigator
      initialRouteName='DetalhesPetClient'
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
        name='DetalhesPetClient'
        options={{
          title: "Detalhes",
        }}
        component={DetalhesPetClient}
        initialParams={{ idPet: idPet }}
      />
      <Stack.Screen
        name='EditarPetClient'
        options={{
          title: "Editar",
        }}
        component={EditarPetClient}
        initialParams={{ idPet: idPet }}
      />
    </Stack.Navigator>
  );
}
