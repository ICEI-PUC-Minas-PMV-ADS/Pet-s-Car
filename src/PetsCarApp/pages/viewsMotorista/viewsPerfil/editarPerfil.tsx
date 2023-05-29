//Jéssica: desenvolvi a tela de perfil do motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconPerfil } from "../../../components/icons";
import { InputForm } from "../../../components/input";
import { ButtonPrimary } from "../../../components/button";
import { Motorista } from "../../../interfaces/interface_motorista";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseInit";

export function EditarPerfilMotorista({ route, navigation }: any) {
  const dataMotorista: Motorista = route.params.dataMotorista;

  const [nome, setNome] = useState(dataMotorista.nome);
  const [email, setEmail] = useState(dataMotorista.email);
  const [telefone, setTelefone] = useState(dataMotorista.telefone);

  const AtualizarCliente = async () => {
    const motoristaRef = doc(db, "motoristas", dataMotorista.idUser);
    await updateDoc(motoristaRef, {
      nome: nome,
      email: email,
      telefone: telefone,
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((e) => console.log(e));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <IconPerfil color={"#4060FF"} />
          <Text style={styles.title}>Perfil</Text>
        </View>
        <View>
          <InputForm
            label='Nome'
            placeholder='José Silva'
            onChange={(e: any) => {
              setNome(e);
            }}
            defaultValue={nome}
          />
          <InputForm
            label='E-mail'
            placeholder='jose@gmail.com'
            onChange={(e: any) => {
              setEmail(e);
            }}
            defaultValue={email}
          />
          <InputForm
            label='Telefone'
            placeholder='(35) 95655-5553'
            onChange={(e: any) => {
              setTelefone(e);
            }}
            defaultValue={telefone}
          />
        </View>
        <View style={styles.buttonSalvar}>
          <ButtonPrimary title={"Salvar"} onPress={() => AtualizarCliente()} />
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
    paddingVertical: 30,
  },
  title: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    lineHeight: 25,
  },
  containerSubtitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 25,
    paddingBottom: 5,
  },
  subtitle: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
  },
  subtitleCity: {
    fontFamily: "Raleway-Italic-400",
    color: "#4060FF",
    fontSize: 16,
  },
  buttonSalvar: {
    paddingTop: 20,
    paddingBottom: 70,
  },
});
