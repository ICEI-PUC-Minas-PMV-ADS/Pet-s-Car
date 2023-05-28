//Mariano: desenvolvi a tela de adicionar pet com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IconPets } from "../../../components/icons";
import { InputForm, InputSelect } from "../../../components/input";
import { ButtonPrimary } from "../../../components/button";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseInit";

const selectTipoPets = ["Cachorro", "Gato", "Pássaro", "Hamsters", "Outro"];
const selectPortePets = ["Pequeno", "Médio", "Grande"];

export function AdicionarPetClient({ route, navigation }: any) {
  const idCliente = route.params.idCliente;

  const [nomePet, setNomePet] = useState("");
  const [tipoPet, setTipoPet] = useState("");
  const [racaPet, setRacaPet] = useState("");
  const [portePet, setPortePet] = useState("");

  const EnviarPet = async () => {
    try {
      await addDoc(collection(db, "pets"), {
        idCliente: idCliente,
        nome: nomePet,
        tipo: tipoPet,
        raca: racaPet,
        porte: portePet,
      }).then(() => {
        navigation.goBack();
      });
    } catch (e) {
      console.error(e);
      console.log("não deu");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <IconPets color={"#4060FF"} />
          <Text style={styles.title}>Pet</Text>
        </View>
        <View>
          <InputForm
            label='Nome'
            placeholder='Ex: Bob'
            onChange={(e: any) => {
              setNomePet(e);
            }}
          />
          <InputSelect
            label='Tipo'
            data={selectTipoPets}
            onChange={(e: any) => {
              setTipoPet(e);
            }}
          />
          <InputForm
            label='Raça'
            placeholder='Ex:Pinscher'
            onChange={(e: any) => {
              setRacaPet(e);
            }}
          />
          <InputSelect
            label='Porte'
            data={selectPortePets}
            onChange={(e: any) => {
              setPortePet(e);
            }}
          />
        </View>
        <View style={styles.buttonConcluir}>
          <ButtonPrimary
            title={"Concluir"}
            onPress={() => {
              EnviarPet();
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingVertical: 30,
  },
  title: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    lineHeight: 25,
  },
  buttonConcluir: {
    paddingTop: 30,
    paddingBottom: 60,
  },
});
