//Mariano: desenvolvi a tela de pets com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  Text,
  ActivityIndicator,
} from "react-native";
import { CardPets } from "../../components/card";
import { ButtonAdd } from "../../components/button";
import { useCallback, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseInit";
import { IconPetsVazio } from "../../components/icons";

export function PetsCliente({ navigation, route }: any) {
  const idCliente = route.params.idCliente;

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [petsVazia, setPetsVazia] = useState(false);

  const [dataPets, setDataPets] = useState<any[]>([]);

  async function BuscarPets() {
    setLoading(true);
    const petsRef = await collection(db, "pets");
    const idPets = await query(petsRef, where("idCliente", "==", idCliente));

    await getDocs(idPets).then((res) => {
      setLoading(false);
      if (res.empty) {
        setPetsVazia(true);
      } else {
        setPetsVazia(false);
        const ArrayData: any = [];

        res.forEach((doc) => {
          const id = { idPet: doc.id };
          const data = doc.data();
          ArrayData.push({ ...id, ...data });
        });
        setDataPets(ArrayData);
      }
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    BuscarPets();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    navigation.addListener("focus", () => {
      BuscarPets();
    });
  }, []);

  return (
    <View style={styles.container}>
      {petsVazia == true ? (
        <View style={styles.petsVazia}>
          <IconPetsVazio color='#DDDDDD' />
          <Text style={styles.textPetsVazia}>
            Lista vazia, cadastre seu melhor amigo
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
          data={dataPets}
          keyExtractor={(item) => item.idPet}
          renderItem={({ item }) => {
            return (
              <CardPets
                nome={item.nome}
                tipo={item.tipo}
                raca={item.raca}
                onPressDetalhes={() => {
                  navigation.navigate("DetalhesPetsClienteNav", {
                    idPet: item.idPet,
                  });
                }}
              />
            );
          }}
        />
      )}

      <ButtonAdd
        onPress={() =>
          navigation.navigate("AdicionarPetClient", {
            idCliente: idCliente,
          })
        }
      />
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
  petsVazia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 90,
    gap: 10,
  },
  textPetsVazia: {
    fontFamily: "Raleway-600",
    color: "#DDDDDD",
    textAlign: "center",
    fontSize: 16,
  },
});
