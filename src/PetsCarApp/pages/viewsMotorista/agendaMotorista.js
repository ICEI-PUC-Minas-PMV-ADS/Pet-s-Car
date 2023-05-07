//Thiago: desenvolvi a tela de agenda com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { FlatList, StyleSheet, View } from "react-native";
import { CardAgenda } from "../../components/card";

export function AgendaMotorista({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={() => <View style={styles.containerVazio}></View>}
        style={styles.containerScroll}
        data={exemploAgendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <CardAgenda
              pet={item.pet}
              data={item.data}
              hora={item.hora}
              status={item.status}
              onPressDetalhes={() => {
                navigation.navigate("DetalhesAgendaMotoristaNav");
              }}
              styleCard={
                item.status == "Pendente"
                  ? styles.cardPendente
                  : item.status == "Aceito"
                  ? styles.cardAceito
                  : styles.cardRealizado
              }
            />
          );
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
  cardPendente: {
    borderLeftColor: "#4060FF",
    backgroundColor: "#F4F4F4",
    marginBottom: 15,
    borderRadius: 10,
    borderLeftWidth: 6,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardAceito: {
    borderLeftColor: "#A5960D",
    backgroundColor: "#F4F4F4",
    marginBottom: 15,
    borderRadius: 10,
    borderLeftWidth: 6,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardRealizado: {
    borderLeftColor: "#1AB82A",
    backgroundColor: "#F4F4F4",
    marginBottom: 15,
    borderRadius: 10,
    borderLeftWidth: 6,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const exemploAgendamentos = [
  {
    id: 1,
    pet: "Jack",
    data: "15/07/2023",
    hora: "15:00",
    status: "Pendente",
  },
  {
    id: 2,
    pet: "Bob",
    data: "20/08/2023",
    hora: "12:00",
    status: "Aceito",
  },
  {
    id: 3,
    pet: "Luke",
    data: "10/02/2023",
    hora: "18:00",
    status: "Realizada",
  },
  {
    id: 4,
    pet: "Jake",
    data: "15/07/2023",
    hora: "15:00",
    status: "Realizada",
  },
  {
    id: 5,
    pet: "Melissa",
    data: "20/08/2023",
    hora: "12:00",
    status: "Pendente",
  },
  {
    id: 6,
    pet: "Salsicha",
    data: "10/02/2023",
    hora: "18:00",
    status: "Realizada",
  },
];
