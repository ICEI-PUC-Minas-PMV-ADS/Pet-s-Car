//João Jorges: desenvolvi a tela de avaliações cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import { useCallback, useEffect, useState } from "react";
import { CardAvaliacao } from "../../../components/card";
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  Text,
  ActivityIndicator,
} from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { AvaliacaoClienteModel } from "../../../interfaces/interface_avaliacaoCliente";
import { IconAvaliacaoVazio } from "../../../components/icons";

export function AvaliacaoCliente({ route, navigation }: any) {
  const idCliente = route.params.idCliente;

  const [refreshing, setRefreshing] = useState(false);

  const [loading, setLoading] = useState(false);
  const [avaliacaoVazia, setAvaliacaoVazia] = useState(false);
  const [dataAvaliacoes, setDataAvaliacoes] = useState<AvaliacaoClienteModel[]>(
    []
  );

  async function BuscarAvaliacoes() {
    setLoading(true);
    const avaliacoesRef = await collection(db, "avaliacoesCliente");
    const idAvaliacoes = await query(
      avaliacoesRef,
      where("idCliente", "==", idCliente)
    );

    await getDocs(idAvaliacoes).then((res) => {
      setLoading(false);
      if (res.empty) {
        setAvaliacaoVazia(true);
      } else {
        setAvaliacaoVazia(false);
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
