//Thiago: desenvolvi a tela de detalhes da agenda do cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import { View, Text, StyleSheet, ScrollView } from "react-native";
import { IconAgendamentos } from "../../../components/icons";
import { ButtonEditar } from "../../../components/button";

export function DetalhesAgendaCliente({ navigation, route }) {
  const infosAgendamento = route.params.infosAgendamento;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <View style={styles.iconTitle}>
            <IconAgendamentos color={"#4060FF"} />
            <Text style={styles.title}>Transporte</Text>
          </View>
          <ButtonEditar
            title={"Editar"}
            onPress={() => {
              navigation.navigate("EditarAgendaCliente");
            }}
          />
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>
            Status:{" "}
            <Text style={styles.statusInfo}>{infosAgendamento.status}</Text>
          </Text>
        </View>
        <View style={styles.itens}>
          <View>
            <Text style={styles.itemTitle}>Pet</Text>
            <Text style={styles.itemInfo}>{infosAgendamento.nomePet}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Tipo</Text>
            <Text style={styles.itemInfo}>{infosAgendamento.tipoPet}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Raça</Text>
            <Text style={styles.itemInfo}>{infosAgendamento.racaPet}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Porte</Text>
            <Text style={styles.itemInfo}>{infosAgendamento.portePet}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Data</Text>
            <Text style={styles.itemInfo}>{infosAgendamento.data}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Hora</Text>
            <Text style={styles.itemInfo}>{infosAgendamento.hora}</Text>
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
              <Text style={styles.itemInfo}>
                {infosAgendamento.bairroPartida}
              </Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Logradouro e Número</Text>
              <Text style={styles.itemInfo}>
                {infosAgendamento.logradouroPartida} -{" "}
                {infosAgendamento.numeroPartida}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.lastItens}>
          <Text style={styles.subtitle}>Endereço de Destino</Text>
          <View style={styles.itens}>
            <View>
              <Text style={styles.itemTitle}>Cidade</Text>
              <Text style={styles.itemInfo}>Alterosa - MG</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Estabelecimento</Text>
              <Text style={styles.itemInfo}>
                {infosAgendamento.estabelecimentoDestino}
              </Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Bairro</Text>
              <Text style={styles.itemInfo}>
                {infosAgendamento.bairroDestino}
              </Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Logradouro e Número</Text>
              <Text style={styles.itemInfo}>
                {infosAgendamento.logradouroDestino} -{" "}
                {infosAgendamento.numeroDestino}
              </Text>
            </View>
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
});
