import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconPets } from "../../components/icons";
import { ButtonEditar } from "../../components/button";

export function DetalhesPetClient({ navigation }) {
  return (
    <View styles={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <View style={styles.iconTitle}>
            <IconPets color={"4060FF"} />
            <Text style={styles.title}>Pet</Text>
          </View>
          <ButtonEditar
            title={"Editar"}
            onPress={() => {
              navigation.navigate("EditarPetCliente");
            }}
          />
        </View>
        <View style={styles.itens}>
          <View>
            <Text styles={styles.itemTitle}>Nome</Text>
            <Text styles={styles.itemInfo}>Jack</Text>
          </View>
          <View>
            <Text styles={styles.itemTitle}>Tipo</Text>
            <Text styles={styles.itemInfo}>Cachorro</Text>
          </View>
          <View>
            <Text styles={styles.itemTitle}>Raça</Text>
            <Text styles={styles.itemInfo}>Pinscher</Text>
          </View>
          <View>
            <Text styles={styles.itemTitle}>Porte</Text>
            <Text styles={styles.itemInfo}>Pequeno</Text>
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
