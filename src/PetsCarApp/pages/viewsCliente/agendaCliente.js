//Thiago: desenvolvi a tela de agenda com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { FlatList, StyleSheet, View } from "react-native";
import { CardAgenda } from "../../components/card";
import { ButtonAdd } from "../../components/button";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseInit";

export function AgendaCliente({ navigation, route }) {
  const idCliente = route.params.idCliente;

  const [dataAgendamentos, setDataAgendamentos] = useState([]);

  useEffect(() => {
    const agendamentosRef = collection(db, "agendamentos");
    const idAgendamentos = query(
      agendamentosRef,
      where("idCliente", "==", idCliente)
    );

    getDocs(idAgendamentos).then((res) => {
      if (res.empty) {
        console.log("Não tem agendamentos.");
      } else {
        const ArrayData = [];
        res.forEach((doc) => {
          const id = { idAgendamento: doc.id };
          const data = doc.data();
          ArrayData.push({ ...id, ...data });
        });
        setDataAgendamentos(ArrayData);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={() => <View style={styles.containerVazio}></View>}
        style={styles.containerScroll}
        data={dataAgendamentos}
        keyExtractor={(item) => item.idAgendamento}
        renderItem={({ item }) => {
          return (
            <CardAgenda
              pet={item.nomePet}
              data={item.data}
              hora={item.hora}
              status={item.status}
              onPressDetalhes={() => {
                navigation.navigate("DetalhesAgendaClienteNav", {
                  dataAgendamento: item,
                });
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
      <ButtonAdd
        onPress={() =>
          navigation.navigate("AdicionarAgendaCliente", {
            idCliente: idCliente,
          })
        }
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
