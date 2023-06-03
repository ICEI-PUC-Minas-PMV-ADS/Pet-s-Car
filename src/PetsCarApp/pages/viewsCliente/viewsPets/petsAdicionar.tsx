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
import { ModalSucesso } from "../../../components/modal";

const selectTipoPets = ["Cachorro", "Gato", "Pássaro", "Hamsters", "Outro"];
const selectPortePets = ["Pequeno", "Médio", "Grande"];

export function AdicionarPetClient({ route, navigation }: any) {
  const idCliente = route.params.idCliente;

  const [modalSucesso, setModalSucesso] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [nomePet, setNomePet] = useState("");
  const [tipoPet, setTipoPet] = useState("");
  const [racaPet, setRacaPet] = useState("");
  const [portePet, setPortePet] = useState("");

  const EnviarPet = async () => {
    const erros: { field: string; message: string }[] = [];

    setErrors([]);

    if (!nomePet)
      erros.push({ field: "nomePet", message: "Preencha o campo Nome" });
    if (!tipoPet)
      erros.push({ field: "tipoPet", message: "Preencha o campo Tipo" });
    if (!racaPet)
      erros.push({ field: "racaPet", message: "Preencha o campo Raça" });
    if (!portePet)
      erros.push({ field: "portePet", message: "Preencha o campo Porte" });

    if (erros.length > 0) {
      return setErrors(erros);
    } else {
      await addDoc(collection(db, "pets"), {
        idCliente: idCliente,
        nome: nomePet,
        tipo: tipoPet,
        raca: racaPet,
        porte: portePet,
      }).then(() => {
        setModalSucesso(true);
        setTimeout(() => {
          navigation.goBack();
        }, 2500);
      });
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
            label='Nome*'
            placeholder='Ex: Bob'
            onChange={(e: any) => {
              setNomePet(e);
            }}
            mensagemError={errors.find((e) => e.field === "nomePet")?.message}
          />
          <InputSelect
            label='Tipo*'
            data={selectTipoPets}
            onChange={(e: any) => {
              setTipoPet(e);
            }}
            mensagemError={errors.find((e) => e.field === "tipoPet")?.message}
          />
          <InputForm
            label='Raça*'
            placeholder='Ex:Pinscher'
            onChange={(e: any) => {
              setRacaPet(e);
            }}
            mensagemError={errors.find((e) => e.field === "racaPet")?.message}
          />
          <InputSelect
            label='Porte*'
            data={selectPortePets}
            onChange={(e: any) => {
              setPortePet(e);
            }}
            mensagemError={errors.find((e) => e.field === "portePet")?.message}
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
        <ModalSucesso
          title='Sucesso! Novo pet cadastrado.'
          visible={modalSucesso}
          onRequestClose={() => {
            setModalSucesso(!modalSucesso);
          }}
        />
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
