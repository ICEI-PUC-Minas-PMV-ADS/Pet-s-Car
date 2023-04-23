//Thiago: desenvolvi a tela de edição de agenda com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import { View, Text, StyleSheet, ScrollView } from "react-native";
import { IconAgendamentos } from "../../../components/icons";
import { InputForm } from "../../../components/input";
import { ButtonExcluir, ButtonPrimary } from "../../../components/button";

export function EditarAgenda() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <IconAgendamentos color={"#4060FF"} />
          <Text style={styles.title}>Agendamento</Text>
        </View>
        <View>
          <InputForm label={"Pet"} placeholder={"Ex: Jack"} />
          <InputForm label={"Data"} placeholder={"Ex: 15/02/2023"} />
          <InputForm label={"Hora"} placeholder={"Ex: 15:00hrs"} />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Endereço de Partida</Text>
            <Text style={styles.subtitleCity}>Alterosa-MG</Text>
          </View>
          <InputForm label={"Bairro"} placeholder={"Ex: Centro"} />
          <InputForm
            label={"Logradouro"}
            placeholder={"Ex: Rua Donatello Paccini"}
          />
          <InputForm label={"Número"} placeholder={"Ex: 365"} />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Endereço de Destino</Text>
            <Text style={styles.subtitleCity}>Alterosa-MG</Text>
          </View>
          <InputForm label={"Bairro"} placeholder={"Ex: Centro"} />
          <InputForm
            label={"Logradouro"}
            placeholder={"Ex: Rua Alcides Terra"}
          />
          <InputForm label={"Número"} placeholder={"Ex: 2688"} />
        </View>
        <View style={styles.buttonSalvar}>
          <ButtonPrimary title={"Salvar"} />
          <ButtonExcluir title={"Excluir"} />
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
    fontSize: 16,
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
