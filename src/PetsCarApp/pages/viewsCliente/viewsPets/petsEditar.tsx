//Mariano: desenvolvi a tela de editar pet com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { IconPets } from "../../../components/icons";
import { InputForm, InputSelect } from "../../../components/input";
import { ButtonExcluir, ButtonPrimary } from "../../../components/button";
import { SetStateAction, useState } from "react";
import { Pet } from "../../../interfaces/interface_pets";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { ModalPergunta, ModalSucesso } from "../../../components/modal";

const selectTipoPets = ["Cachorro", "Gato", "Pássaro", "Hamsters", "Outro"];
const selectPortePets = ["Pequeno", "Médio", "Grande"];

export function EditarPetClient({ route, navigation }: any) {
  const idPet = route.params.idPet;
  const dataPet: Pet = route.params.dataPet;

  const [modalSucessoExcluir, setModalSucessoExcluir] = useState(false);
  const [modalSucesso, setModalSucesso] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [nomePet, setNomePet] = useState(dataPet.nome);
  const [tipoPet, setTipoPet] = useState(dataPet.tipo);
  const [racaPet, setRacaPet] = useState(dataPet.raca);
  const [portePet, setPortePet] = useState(dataPet.porte);

  const AtualizarPet = async () => {
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
      const agendamentoRef = doc(db, "pets", idPet);
      await updateDoc(agendamentoRef, {
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

  const ExcluirPet = async () => {
    await deleteDoc(doc(db, "pets", idPet)).then(() => {
      setModalExcluir(false);
      setModalSucessoExcluir(true);
      setTimeout(() => {
        navigation.navigate("ClienteTabNavegation");
      }, 2500);
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <IconPets color={"#4060FF"} />
          <Text style={styles.title}>Pet</Text>
        </View>
        <View>
          <InputForm
            label='Nome'
            placeholder='Ex: Bob'
            onChange={(e: SetStateAction<string>) => {
              setNomePet(e);
            }}
            defaultValue={nomePet}
            mensagemError={errors.find((e) => e.field === "nomePet")?.message}
          />
          <InputSelect
            label='Tipo'
            data={selectTipoPets}
            onChange={(e: SetStateAction<string>) => {
              setTipoPet(e);
            }}
            defaultValueByIndex={
              tipoPet == "Cachorro"
                ? 0
                : tipoPet == "Gato"
                ? 1
                : tipoPet == "Pássaro"
                ? 2
                : tipoPet == "Hamsters"
                ? 3
                : 4
            }
            mensagemError={errors.find((e) => e.field === "tipoPet")?.message}
          />
          <InputForm
            label='Raça'
            placeholder='Ex:Pinscher'
            onChange={(e: SetStateAction<string>) => {
              setRacaPet(e);
            }}
            defaultValue={racaPet}
            mensagemError={errors.find((e) => e.field === "racaPet")?.message}
          />
          <InputSelect
            label='Porte'
            data={selectPortePets}
            onChange={(e: SetStateAction<string>) => {
              setPortePet(e);
            }}
            defaultValueByIndex={
              portePet == "Pequeno" ? 0 : portePet == "Médio" ? 1 : 2
            }
            mensagemError={errors.find((e) => e.field === "portePet")?.message}
          />
        </View>
        <View style={styles.buttonConcluir}>
          <ButtonPrimary
            title={"Salvar"}
            onPress={() => {
              AtualizarPet();
            }}
          />
          <ModalSucesso
            title='Sucesso! Pet atualizado.'
            visible={modalSucesso}
            onRequestClose={() => {
              setModalSucesso(!modalSucesso);
            }}
          />
          <ButtonExcluir
            title={"Excluir"}
            onPress={() => {
              setModalExcluir(true);
            }}
          />
          <ModalPergunta
            title='Deseja mesmo excluir o Pet?'
            onPressSim={() => ExcluirPet()}
            onPressNao={() => setModalExcluir(!modalExcluir)}
            visible={modalExcluir}
            onRequestClose={() => {
              setModalExcluir(!modalExcluir);
            }}
          />
          <ModalSucesso
            title='Sucesso! Pet excluído.'
            visible={modalSucessoExcluir}
            onRequestClose={() => {
              setModalSucessoExcluir(!modalSucessoExcluir);
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
