//Thiago: desenvolvi a tela de detalhes da agenda do motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { IconAgendamentos } from "../../../components/icons";
import { ButtonAvaliar, ButtonPrimary } from "../../../components/button";
import { InputForm } from "../../../components/input";
import { useEffect, useState } from "react";
import { Agendamento } from "../../../interfaces/interface_agendamento";
import { db } from "../../firebaseInit";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Motorista } from "../../../interfaces/interface_motorista";
import { regexBRL } from "../../../utils/Regex";
import { ModalSucesso } from "../../../components/modal";

export function DetalhesAgendaMotorista({ navigation, route }: any) {
  const idMotorista = route.params.idMotorista;
  const idAgendamento = route.params.idAgendamento;

  const [loading, setLoading] = useState(false);
  const [modalCorridaAceita, setModalCorridaAceita] = useState(false);
  const [modalCorridaFinalizada, setModalCorridaFinalizada] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [inputValorOpen, setInputValorOpen] = useState(false);
  const [valorCorrida, setValorCorrida] = useState("");

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
    dataCompleta: "",
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

  const [dataMotorista, setDataMotorista] = useState<Motorista>({
    idUser: "",
    nome: "",
    email: "",
    telefone: "",
    userType: "",
  });

  async function BuscarAgendamento() {
    setLoading(true);
    const agendamentosRef = await doc(db, "agendamentos", idAgendamento);

    await getDoc(agendamentosRef).then((res: any) => {
      setLoading(false);
      setDataAgendamento(res.data());
    });
  }

  async function BuscarNomeMotorista() {
    const motoristaRef = await doc(db, "motoristas", idMotorista);

    await getDoc(motoristaRef).then((res: any) => {
      setDataMotorista(res.data());
    });
  }

  useEffect(() => {
    navigation.addListener("focus", async () => {
      BuscarAgendamento();
      BuscarNomeMotorista();
    });
  }, []);

  const AceitarCorrida = async () => {
    const erros: { field: string; message: string }[] = [];

    setErrors([]);

    if (!valorCorrida)
      erros.push({
        field: "valorCorrida",
        message: "Informe o valor da corrida",
      });

    if (erros.length > 0) {
      return setErrors(erros);
    } else {
      const agendamentoRef = doc(db, "agendamentos", idAgendamento);
      await updateDoc(agendamentoRef, {
        status: "Aceito",
        valor: valorCorrida,
        idMotorista: idMotorista,
        nomeMotorista: dataMotorista.nome,
      }).then(() => {
        setModalCorridaAceita(true);
        setTimeout(() => {
          setModalCorridaAceita(false);
          BuscarAgendamento();
        }, 2500);
      });
    }
  };

  const FinalizarCorrida = async () => {
    const agendamentoRef = doc(db, "agendamentos", idAgendamento);
    await updateDoc(agendamentoRef, {
      status: "Realizado",
    }).then(() => {
      setModalCorridaFinalizada(true);
      setTimeout(() => {
        setModalCorridaFinalizada(false);
        BuscarAgendamento();
      }, 2500);
    });
  };

  return (
    <View style={styles.container}>
      {loading == true ? (
        <View style={styles.loading}>
          <ActivityIndicator animating={loading} size={50} color='#4060FF' />
        </View>
      ) : (
        <ScrollView style={styles.containerScroll}>
          <View style={styles.containerTitle}>
            <View style={styles.iconTitle}>
              <IconAgendamentos color={"#4060FF"} />
              <Text style={styles.title}>Transporte</Text>
            </View>
            {dataAgendamento.status == "Realizado" ? (
              <ButtonAvaliar
                title={"Avaliar"}
                onPress={() => {
                  navigation.navigate({
                    name: "AvaliacaoAgendaMotorista",
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
              <Text style={styles.itemTitle}>Data</Text>
              <Text style={styles.itemInfo}>{dataAgendamento.data}</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Hora</Text>
              <Text style={styles.itemInfo}>{dataAgendamento.hora}</Text>
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
          <View>
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
          <View style={styles.lastItens}>
            {dataAgendamento.status !== "Pendente" ? (
              <>
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
                  {dataAgendamento.status == "Aceito" ? (
                    <View style={styles.button}>
                      <ButtonPrimary
                        title={"Finalizar Corrida"}
                        onPress={() => {
                          FinalizarCorrida();
                        }}
                      />
                      <ModalSucesso
                        title='Sucesso! Corrida finalizada.'
                        visible={modalCorridaFinalizada}
                        onRequestClose={() => {
                          setModalCorridaFinalizada(!modalCorridaFinalizada);
                        }}
                      />
                    </View>
                  ) : (
                    ""
                  )}
                </View>
              </>
            ) : inputValorOpen == false ? (
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
                  maxLength={12}
                  onChange={(e: any) => {
                    setValorCorrida(regexBRL(e));
                  }}
                  value={valorCorrida}
                  mensagemError={
                    errors.find((e) => e.field === "valorCorrida")?.message
                  }
                />
                <View style={styles.button}>
                  <ButtonPrimary
                    title={"Concluir"}
                    onPress={() => {
                      AceitarCorrida();
                    }}
                  />
                  <ModalSucesso
                    title='Sucesso! Corrida aceita.'
                    visible={modalCorridaAceita}
                    onRequestClose={() => {
                      setModalCorridaAceita(!modalCorridaAceita);
                    }}
                  />
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
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
  button: {
    paddingTop: 20,
  },
});
