//Jéssica: desenvolvi a tela de avaliações motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.

import { useCallback, useEffect, useState } from "react";
import { CardAvaliacao } from "../../../components/card";
import { StyleSheet, View, FlatList, RefreshControl, Text } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { AvaliacaoMotoristaModel } from "../../../interfaces/interface_avaliacaoMotorista";
import { IconAvaliacaoVazio } from "../../../components/icons";

export function AvaliacaoMotorista({ route, navigation }: any) {
  const idMotorista = route.params.idMotorista;

  const [refreshing, setRefreshing] = useState(false);

  const [avaliacaoVazia, setAvaliacaoVazia] = useState(false);
  const [dataAvaliacoes, setDataAvaliacoes] = useState<
    AvaliacaoMotoristaModel[]
  >([]);

  async function BuscarAvaliacoes() {
    const avaliacoesRef = await collection(db, "avaliacoesMotorista");
    const idAvaliacoes = await query(
      avaliacoesRef,
      where("idMotorista", "==", idMotorista)
    );

    await getDocs(idAvaliacoes).then((res) => {
      if (res.empty) {
        setAvaliacaoVazia(true);
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
      {avaliacaoVazia == true ? (
        <View style={styles.avaliacaoVazia}>
          <IconAvaliacaoVazio color='#DDDDDD' />
          <Text style={styles.textAvaliacaoVazia}>
            Lista vazia, nenhuma avaliação disponível
          </Text>
        </View>
      ) : (
        ""
      )}
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
            <CardAvaliacao nome={item.nomeCliente} avaliacao={item.avaliacao} />
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
  avaliacaoVazia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 90,
    gap: 10,
  },
  textAvaliacaoVazia: {
    fontFamily: "Raleway-600",
    color: "#DDDDDD",
    textAlign: "center",
    fontSize: 16,
  },
});
