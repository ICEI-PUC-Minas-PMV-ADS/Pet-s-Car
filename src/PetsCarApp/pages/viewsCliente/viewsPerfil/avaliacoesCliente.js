//João Jorges: desenvolvi a tela de avaliações cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import { CardAvaliacao } from "../../../components/card";
import { StyleSheet, View, FlatList } from "react-native";

export function AvaliacaoCliente() {
  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={() => <View style={styles.containerVazio}></View>}
        style={styles.containerScroll}
        data={avaliacoesExemplo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <CardAvaliacao nome={item.nome} avaliacao={item.avaliacao} />;
        }}
      />
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

const avaliacoesExemplo = [
  {
    id: 1,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
  {
    id: 2,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
  {
    id: 3,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
  {
    id: 4,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
  {
    id: 5,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
  {
    id: 6,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
  {
    id: 7,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
  {
    id: 8,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
  {
    id: 9,
    nome: "Marcos Ferreira",
    avaliacao:
      "Foi muito gentil e até mesmo pagou um valor a mais pela corrida.",
  },
];
