//Thiago: desenvolvi a tela de detalhes da agenda do cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import { View, Text, StyleSheet, ScrollView } from "react-native";
import { IconAgendamentos } from "../../../components/icons";
import { ButtonAvaliar, ButtonEditar } from "../../../components/button";
import { db } from "../../firebaseInit";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Agendamento } from "../../../interfaces/interface_agendamento";

export function DetalhesAgendaCliente({ navigation, route }: any) {
  const idAgendamento = route.params.idAgendamento;

  const [dataAgendamento, setDataAgendamento] = useState<Agendamento>({
    idCliente: "",
    idPet: "",
    nomeCliente: "",
    nomePet: "",
    tipoPet: "",
    racaPet: "",
    portePet: "",
    data: "",
    hora: "",
    logradouroPartida: "",
    bairroPartida: "",
    numeroPartida: "",
    estabelecimentoDestino: "",
    logradouroDestino: "",
    bairroDestino: "",
    numeroDestino: "",
    status: "",
    valor: "",
    idMotorista: "",
    nomeMotorista: "",
  });

  useEffect(() => {
    navigation.addListener("focus", async () => {
      const agendamentosRef = await doc(db, "agendamentos", idAgendamento);

      await getDoc(agendamentosRef).then((res: any) => {
        setDataAgendamento(res.data());
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <View style={styles.iconTitle}>
            <IconAgendamentos color={"#4060FF"} />
            <Text style={styles.title}>Transporte</Text>
          </View>
          {dataAgendamento.status == "Pendente" ? (
            <ButtonEditar
              title={"Editar"}
              onPress={() => {
                navigation.navigate({
                  name: "EditarAgendaCliente",
                  params: { dataAgendamento: dataAgendamento },
                  merge: true,
                });
              }}
            />
          ) : dataAgendamento.status == "Realizado" ? (
            <ButtonAvaliar
              title={"Avaliar"}
              onPress={() => {
                navigation.navigate({
                  name: "AvaliacaoAgendaCliente",
                  params: { dataAgendamento: dataAgendamento },
                  merge: true,
                });
              }}
            />
          ) : (
            ""
          )}
        </View>
        <View
          style={
            dataAgendamento.status == "Pendente"
              ? styles.statusCardPendente
              : dataAgendamento.status == "Aceito"
              ? styles.statusCardAceito
              : styles.statusCardRealizado
          }
        >
          <Text
            style={
              dataAgendamento.status == "Pendente"
                ? styles.statusTitlePendente
                : dataAgendamento.status == "Aceito"
                ? styles.statusTitleAceito
                : styles.statusTitleRealizado
            }
          >
            Status:{" "}
            <Text style={styles.statusInfo}>{dataAgendamento.status}</Text>
          </Text>
        </View>
        <View style={styles.itens}>
          <View>
            <Text style={styles.itemTitle}>Pet</Text>
            <Text style={styles.itemInfo}>{dataAgendamento.nomePet}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Tipo</Text>
            <Text style={styles.itemInfo}>{dataAgendamento.tipoPet}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Raça</Text>
            <Text style={styles.itemInfo}>{dataAgendamento.racaPet}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Porte</Text>
            <Text style={styles.itemInfo}>{dataAgendamento.portePet}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Data</Text>
            <Text style={styles.itemInfo}>{dataAgendamento.data}</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Hora</Text>
            <Text style={styles.itemInfo}>{dataAgendamento.hora}</Text>
          </View>
        </View>
        <View style={styles.itens}>
          <Text style={styles.subtitle}>Endereço de Partida</Text>
          <View style={styles.itens}>
            <View>
              <Text style={styles.itemTitle}>Cidade</Text>
              <Text style={styles.itemInfo}>Alterosa - MG</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Bairro</Text>
              <Text style={styles.itemInfo}>
                {dataAgendamento.bairroPartida}
              </Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Logradouro e Número</Text>
              <Text style={styles.itemInfo}>
                {dataAgendamento.logradouroPartida} -{" "}
                {dataAgendamento.numeroPartida}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={
            dataAgendamento.status == "Pendente"
              ? styles.lastItens
              : styles.itens
          }
        >
          <Text style={styles.subtitle}>Endereço de Destino</Text>
          <View style={styles.itens}>
            <View>
              <Text style={styles.itemTitle}>Cidade</Text>
              <Text style={styles.itemInfo}>Alterosa - MG</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Estabelecimento</Text>
              <Text style={styles.itemInfo}>
                {dataAgendamento.estabelecimentoDestino}
              </Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Bairro</Text>
              <Text style={styles.itemInfo}>
                {dataAgendamento.bairroDestino}
              </Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Logradouro e Número</Text>
              <Text style={styles.itemInfo}>
                {dataAgendamento.logradouroDestino} -{" "}
                {dataAgendamento.numeroDestino}
              </Text>
            </View>
          </View>
        </View>
        {dataAgendamento.status !== "Pendente" ? (
          <View style={styles.lastItens}>
            <Text style={styles.subtitle}>Informações da Corrida</Text>
            <View style={styles.itens}>
              <View>
                <Text style={styles.itemTitle}>Valor</Text>
                <Text style={styles.itemInfo}>{dataAgendamento.valor}</Text>
              </View>
              <View>
                <Text style={styles.itemTitle}>Motorista</Text>
                <Text style={styles.itemInfo}>
                  {dataAgendamento.nomeMotorista}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          ""
        )}
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
  statusCardPendente: {
    backgroundColor: "#EBEEFF",
    borderRadius: 8,
    padding: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  statusTitlePendente: {
    fontFamily: "Raleway-500",
    fontSize: 14,
    color: "#4060FF",
    textAlign: "center",
    lineHeight: 14,
  },
  statusCardAceito: {
    backgroundColor: "#FFF7CF",
    borderRadius: 8,
    padding: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  statusTitleAceito: {
    fontFamily: "Raleway-500",
    fontSize: 14,
    color: "#A5950D",
    textAlign: "center",
    lineHeight: 14,
  },
  statusCardRealizado: {
    backgroundColor: "#CDFFD2",
    borderRadius: 8,
    padding: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  statusTitleRealizado: {
    fontFamily: "Raleway-500",
    fontSize: 14,
    color: "#1AB82A",
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
