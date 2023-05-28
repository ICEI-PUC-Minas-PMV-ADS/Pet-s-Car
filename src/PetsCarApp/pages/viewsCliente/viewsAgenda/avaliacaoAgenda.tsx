//Thiago: desenvolvi a tela de avaliação do cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { ButtonPrimary } from "../../../components/button";
import { Agendamento } from "../../../interfaces/interface_agendamento";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { useState } from "react";

export function AvaliacaoAgendaCliente({ route, navigation }: any) {
  const dataAgendamento: Agendamento = route.params.dataAgendamento;

  const [avaliacao, setAvaliacao] = useState("");

  const EnviarAvaliação = async () => {
    await addDoc(collection(db, "avaliacoesMotorista"), {
      idMotorista: dataAgendamento.idMotorista,
      nomeCliente: dataAgendamento.nomeCliente,
      avaliacao: avaliacao,
    }).then(() => {
      navigation.goBack();
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <Text style={styles.motorista}>
          <Text style={styles.motoristaBold}>Motorista:</Text> Marcos Ferreira
        </Text>
        <Text style={styles.motorista}>
          O que achou do motorista e a corrida?
        </Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={10}
          textAlignVertical='top'
          placeholder='Ex: O motorista foi muito atencioso.'
          onChangeText={(e: any) => {
            setAvaliacao(e);
          }}
        />
        <ButtonPrimary
          title={"Concluir"}
          onPress={() => {
            EnviarAvaliação();
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
  motoristaBold: {
    color: "#4060FF",
    fontFamily: "Raleway-700",
  },
  motorista: {
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
});
