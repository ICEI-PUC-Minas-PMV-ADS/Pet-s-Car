//João Jorges: desenvolvi a tela de avaliações cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import { useCallback, useEffect, useState } from "react";
import { CardAvaliacao } from "../../../components/card";
import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { AvaliacaoClienteModel } from "../../../interfaces/interface_avaliacaoCliente";

export function AvaliacaoCliente({ route, navigation }: any) {
  const idCliente = route.params.idCliente;

  const [refreshing, setRefreshing] = useState(false);

  const [dataAvaliacoes, setDataAvaliacoes] = useState<AvaliacaoClienteModel[]>(
    []
  );

  async function BuscarAvaliacoes() {
    const avaliacoesRef = await collection(db, "avaliacoesCliente");
    const idAvaliacoes = await query(
      avaliacoesRef,
      where("idCliente", "==", idCliente)
    );

    await getDocs(idAvaliacoes).then((res) => {
      if (res.empty) {
        console.log("Não tem agendamentos.");
      } else {
        const ArrayData: any = [];

        res.forEach((doc) => {
          const id = { idAvaliacao: doc.id };
          const data = doc.data();
          ArrayData.push({ ...id, ...data });
        });
        setDataAvaliacoes(ArrayData);
      }
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    BuscarAvaliacoes();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    navigation.addListener("focus", () => {
      BuscarAvaliacoes();
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={() => <View style={styles.containerVazio}></View>}
        style={styles.containerScroll}
        data={dataAvaliacoes}
        keyExtractor={(item) => item.idAvaliacao}
        renderItem={({ item }) => {
          return (
            <CardAvaliacao
              nome={item.nomeMotorista}
              avaliacao={item.avaliacao}
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
});
