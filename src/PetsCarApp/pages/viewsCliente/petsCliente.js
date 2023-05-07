//Mariano: desenvolvi a tela de pets com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { StyleSheet, View, FlatList } from "react-native";
import { CardPets } from "../../components/card";
import { ButtonAdd } from "../../components/button";

export function PetsCliente({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={() => <View style={styles.containerVazio}></View>}
        style={styles.containerScroll}
        data={petsExemplos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <CardPets
              nome={item.nome}
              tipo={item.tipo}
              raca={item.raca}
              onPressDetalhes={() => {
                navigation.navigate("DetalhesPetsClienteNav");
              }}
            />
          );
        }}
      />
      <ButtonAdd onPress={() => navigation.navigate("AdicionarPetClient")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  containerVazio: {
    height: 210,
  },
  containerScroll: {
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
});

const petsExemplos = [
  {
    id: 1,
    nome: "Jack",
    tipo: "Cachorro",
    raca: "Pinscher",
  },
  {
    id: 2,
    nome: "Jack",
    tipo: "Cachorro",
    raca: "Pinscher",
  },
  {
    id: 3,
    nome: "Jack",
    tipo: "Cachorro",
    raca: "Pinscher",
  },
];
