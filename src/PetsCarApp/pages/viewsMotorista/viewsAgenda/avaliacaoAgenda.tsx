//Thiago: desenvolvi a tela de avaliação do motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { ButtonPrimary } from "../../../components/button";
import { Agendamento } from "../../../interfaces/interface_agendamento";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { ModalSucesso } from "../../../components/modal";

export function AvaliacaoAgendaMotorista({ route, navigation }: any) {
  const dataAgendamento: Agendamento = route.params.dataAgendamento;

  const [modalSucesso, setModalSucesso] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [avaliacao, setAvaliacao] = useState("");

  const EnviarAvaliação = async () => {
    const erros: { field: string; message: string }[] = [];

    setErrors([]);

    if (!avaliacao)
      erros.push({ field: "avaliacao", message: "Preencha o campo Avaliação" });
    if (erros.length > 0) {
      return setErrors(erros);
    } else {
      await addDoc(collection(db, "avaliacoesCliente"), {
        idCliente: dataAgendamento.idCliente,
        nomeMotorista: dataAgendamento.nomeMotorista,
        avaliacao: avaliacao,
      }).then(() => {
        setModalSucesso(true);
        setTimeout(() => {
          navigation.goBack();
        }, 2500);
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <Text style={styles.cliente}>
          <Text style={styles.clienteBold}>Cliente:</Text>{" "}
          {dataAgendamento.nomeCliente}
        </Text>
        <Text style={styles.cliente}>
          <Text style={styles.clienteBold}>Pet:</Text> {dataAgendamento.nomePet}
        </Text>
        <Text style={styles.cliente}>O que achou do cliente e seu pet?</Text>
        {errors.length > 0 ? (
          <View style={styles.label}>
            <Text style={styles.errorLabelForm}>
              {errors.find((e) => e.field === "avaliacao")?.message}
            </Text>
          </View>
        ) : (
          ""
        )}
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={10}
          textAlignVertical='top'
          placeholder='Ex: O cliente foi muito atencioso e seu pet muito calmo.'
          onChangeText={(e) => {
            setAvaliacao(e);
          }}
        />
        <ButtonPrimary
          title={"Concluir"}
          onPress={() => {
            EnviarAvaliação();
          }}
        />
        <ModalSucesso
          title='Sucesso! Avaliação enviada.'
          visible={modalSucesso}
          onRequestClose={() => {
            setModalSucesso(!modalSucesso);
          }}
        />
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
    paddingTop: 35,
  },
  clienteBold: {
    color: "#4060FF",
    fontFamily: "Raleway-700",
  },
  cliente: {
    fontSize: 16,
    color: "#131313",
    fontFamily: "Raleway-400",
    paddingBottom: 15,
  },
  input: {
    borderWidth: 1.5,
    marginTop: 8,
    marginBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 16,
    borderColor: "#4060FF",
    fontFamily: "Raleway-400",
    fontSize: 16,
  },
  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  errorLabelForm: {
    fontFamily: "Raleway-400",
    fontSize: 14,
    color: "#ff4040",
  },
});
