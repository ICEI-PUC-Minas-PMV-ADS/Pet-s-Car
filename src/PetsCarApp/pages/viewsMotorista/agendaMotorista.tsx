//Thiago: desenvolvi a tela de agenda com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CardAgenda } from "../../components/card";
import { useCallback, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseInit";
import { IconAgendaVazia } from "../../components/icons";

export function AgendaMotorista({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [agendaVazia, setAgendaVazia] = useState(false);

  const [dataAgendamentos, setDataAgendamentos] = useState<any[]>([]);

  async function BuscarAgendamentos() {
    setLoading(true);
    await getDocs(collection(db, "agendamentos")).then((res) => {
      setLoading(false);
      if (res.empty) {
        setAgendaVazia(true);
      } else {
        const ArrayData: any = [];

        res.forEach((doc) => {
          const id = { idAgendamento: doc.id };
          const data = doc.data();
          ArrayData.push({ ...id, ...data });
        });
        setDataAgendamentos(ArrayData);
      }
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    BuscarAgendamentos();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    navigation.addListener("focus", async () => {
      BuscarAgendamentos();
    });
  }, []);

  return (
    <View style={styles.container}>
      {agendaVazia == true ? (
        <View style={styles.agendaVazia}>
          <IconAgendaVazia color='#DDDDDD' />
          <Text style={styles.textAgendaVazia}>
            Lista vazia, nenhum agendamento disponível
          </Text>
        </View>
      ) : (
        ""
      )}
      {loading == true ? (
        <View style={styles.loading}>
          <ActivityIndicator animating={loading} size={50} color='#4060FF' />
        </View>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={() => (
            <View style={styles.containerVazio}></View>
          )}
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
                  navigation.navigate({
                    name: "DetalhesAgendaMotoristaNav",
                    params: {
                      idAgendamento: item.idAgendamento,
                    },
                    merge: true,
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
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
  agendaVazia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 90,
    gap: 10,
  },
  textAgendaVazia: {
    fontFamily: "Raleway-600",
    color: "#DDDDDD",
    textAlign: "center",
    fontSize: 16,
  },
});
