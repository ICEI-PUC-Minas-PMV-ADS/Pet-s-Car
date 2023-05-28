//Jéssica: desenvolvi a tela de avaliações motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.

import { CardAvaliacao } from "../../../components/card";
import { StyleSheet, View, FlatList } from "react-native";

export function AvaliacaoMotorista() {
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
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
  {
    id: 2,
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
  {
    id: 3,
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
  {
    id: 4,
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
  {
    id: 5,
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
  {
    id: 6,
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
  {
    id: 7,
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
  {
    id: 8,
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
  {
    id: 9,
    nome: "Thiago Terra",
    avaliacao: "Foi muito atencioso e realizou uma corrida tranquila.",
  },
];
