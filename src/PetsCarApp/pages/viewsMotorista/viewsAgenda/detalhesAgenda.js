//Thiago: desenvolvi a tela de detalhes da agenda com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import { View, Text, StyleSheet, ScrollView } from "react-native";
import { IconAgendamentos } from "../../../components/icons";
import { ButtonAvaliar, ButtonPrimary } from "../../../components/button";
import { InputForm } from "../../../components/input";
import { useState } from "react";

export function DetalhesAgendaMotorista({ navigation }) {
  const [inputValorOpen, setInputValorOpen] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <View style={styles.iconTitle}>
            <IconAgendamentos color={"#4060FF"} />
            <Text style={styles.title}>Transporte</Text>
          </View>
          <ButtonAvaliar
            title={"Avaliar"}
            onPress={() => {
              navigation.navigate("AvaliacaoAgendaMotorista");
            }}
          />
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>
            Status: <Text style={styles.statusInfo}>Pendente</Text>
          </Text>
        </View>
        <View style={styles.itens}>
          <View>
            <Text style={styles.itemTitle}>Pet</Text>
            <Text style={styles.itemInfo}>Jack</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Data</Text>
            <Text style={styles.itemInfo}>15/07/2023</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Hora</Text>
            <Text style={styles.itemInfo}>15:00</Text>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>Endereço de Partida</Text>
          <View style={styles.itens}>
            <View>
              <Text style={styles.itemTitle}>Cidade</Text>
              <Text style={styles.itemInfo}>Alterosa - MG</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Bairro</Text>
              <Text style={styles.itemInfo}>Centro</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Logradouro e Número</Text>
              <Text style={styles.itemInfo}>Rua Donatello Paccini - 365</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>Endereço de Destino</Text>
          <View style={styles.itens}>
            <View>
              <Text style={styles.itemTitle}>Cidade</Text>
              <Text style={styles.itemInfo}>Alterosa - MG</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Bairro</Text>
              <Text style={styles.itemInfo}>Jardim Silveira</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Logradouro e Número</Text>
              <Text style={styles.itemInfo}>Rua Tiradentes - 532</Text>
            </View>
          </View>
        </View>
        <View style={styles.lastItens}>
          {inputValorOpen == false ? (
            <View style={styles.button}>
              <ButtonPrimary
                title={"Aceitar Corrida"}
                onPress={() => setInputValorOpen(true)}
              />
            </View>
          ) : (
            <>
              <Text style={styles.subtitle}>Informações da Corrida</Text>
              <InputForm
                label={"Valor"}
                placeholder={"R$ 0,00"}
                keyboardType={"numeric"}
              />
              <View style={styles.button}>
                <ButtonPrimary title={"Concluir"} />
              </View>
            </>
          )}
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
    justifyContent: "space-between",
  },
  iconTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  title: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    lineHeight: 25,
    paddingBottom: 5,
  },
  subtitle: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 16,
    paddingTop: 25,
    paddingBottom: 5,
  },
  statusCard: {
    backgroundColor: "#EBEEFF",
    borderRadius: 8,
    padding: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  statusTitle: {
    fontFamily: "Raleway-500",
    fontSize: 14,
    color: "#4060FF",
    textAlign: "center",
    lineHeight: 14,
  },
  statusInfo: {
    fontFamily: "Raleway-700",
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
  lastItens: {
    paddingBottom: 70,
  },
  button: {
    paddingTop: 20,
  },
});
