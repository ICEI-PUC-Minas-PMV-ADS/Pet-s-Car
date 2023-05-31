//Mariano: desenvolvi a tela de detalhes do pet com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconPets } from "../../../components/icons";
import { ButtonEditar } from "../../../components/button";
import { Pet } from "../../../interfaces/interface_pets";
import { useEffect, useState } from "react";
import { db } from "../../firebaseInit";
import { doc, getDoc } from "firebase/firestore";

export function DetalhesPetClient({ navigation, route }: any) {
  const idPet = route.params.idPet;

  const [dataPet, setDataPet] = useState<Pet>({
    idCliente: "",
    nome: "",
    tipo: "",
    raca: "",
    porte: "",
  });

  useEffect(() => {
    navigation.addListener("focus", async () => {
      const petsRef = await doc(db, "pets", idPet);

      await getDoc(petsRef).then((res: any) => {
        setDataPet(res.data());
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <View style={styles.iconTitle}>
            <IconPets color={"#4060FF"} />
            <Text style={styles.title}>Pet</Text>
          </View>
          <ButtonEditar
            title={"Editar"}
            onPress={() => {
              navigation.navigate({
                name: "EditarPetClient",
                params: { dataPet: dataPet },
                merge: true,
              });
            }}
          />
        </View>
        <View style={styles.itens}>
          <View>
            <Text style={styles.itemTitle}>Nome</Text>
            <Text style={styles.itemInfo}>{dataPet.nome}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Tipo</Text>
            <Text style={styles.itemInfo}>{dataPet.tipo}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Raça</Text>
            <Text style={styles.itemInfo}>{dataPet.raca}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Porte</Text>
            <Text style={styles.itemInfo}>{dataPet.porte}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  containerScroll: {
    paddingHorizontal: 35,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    paddingBottom: 30,
    justifyContent: "space-between",
    paddingTop: 40,
  },
  title: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    lineHeight: 25,
  },
  iconTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  itens: {
    gap: 15,
  },
  itemTitle: {
    fontFamily: "Raleway-400",
    color: "#828282",
    fontSize: 14,
  },
  itemInfo: {
    fontFamily: "Raleway-400",
    color: "#131313",
    fontSize: 16,
  },
});
