//Jéssica: desenvolvi a tela de perfil do motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconPerfil } from "../../../components/icons";
import { InputForm } from "../../../components/input";
import { ButtonPrimary } from "../../../components/button";

export function EditarPerfilMotorista() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <IconPerfil color={"#4060FF"} />
          <Text style={styles.title}>Perfil</Text>
        </View>
        <View>
          <InputForm label='E-mail' placeholder='thiago.terra@gmail.com' />
          <InputForm label='Telefone' placeholder='(35) 95655-5553' />
          <InputForm label='Senha' placeholder='senha123' />
        </View>
        <View style={styles.buttonSalvar}>
          <ButtonPrimary title={"Salvar"} />
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
