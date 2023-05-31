//Thiago: desenvolvi a tela de edição de agenda com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { IconAgendamentos } from "../../../components/icons";
import {
  InputData,
  InputForm,
  InputHora,
  InputSelect,
} from "../../../components/input";
import { ButtonExcluir, ButtonPrimary } from "../../../components/button";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseInit";
import { Agendamento } from "../../../interfaces/interface_agendamento";

export function EditarAgendaCliente({ route, navigation }: any) {
  const idAgendamento = route.params.idAgendamento;
  const dataAgendamento: Agendamento = route.params.dataAgendamento;

  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [pet, setPet] = useState<number | null>(null);
  const [nomePet, setNomePet] = useState(dataAgendamento.nomePet);
  const [bairroPartida, setBairroPartida] = useState(
    dataAgendamento.bairroPartida
  );
  const [logradouroPartida, setLogradouroPartida] = useState(
    dataAgendamento.logradouroPartida
  );
  const [numeroPartida, setNumeroPartida] = useState(
    dataAgendamento.numeroPartida
  );
  const [estabelecimentoDestino, setEstabelecimentoDestino] = useState(
    dataAgendamento.estabelecimentoDestino
  );
  const [bairroDestino, setBairroDestino] = useState(
    dataAgendamento.bairroDestino
  );
  const [logradouroDestino, setLogradouroDestino] = useState(
    dataAgendamento.logradouroDestino
  );
  const [numeroDestino, setNumeroDestino] = useState(
    dataAgendamento.numeroDestino
  );
  const [dataPartida, setDataPartida] = useState(
    new Date(dataAgendamento.dataCompleta.toString())
  );
  const [modeData, setModeData] = useState<any>("date");
  const [showData, setShowData] = useState(false);

  const onChangeData = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowData(false);
    setDataPartida(currentDate);
  };

  const showModeData = (currentMode: any) => {
    if (Platform.OS === "android") {
      setShowData(true);
    }
    if (Platform.OS === "ios") {
      setShowData(true);
    }
    setModeData(currentMode);
  };

  const showDatapicker = () => {
    showModeData("date");
  };

  const showHoraPicker = () => {
    showModeData("time");
  };

  const [dataPets, setDataPets] = useState<any>([]);

  useEffect(() => {
    const petsRef = collection(db, "pets");
    const idPets = query(
      petsRef,
      where("idCliente", "==", dataAgendamento.idCliente)
    );

    getDocs(idPets).then((res) => {
      if (res.empty) {
        setDataPets("Nenhum pet cadastrado.");
        console.log("Não tem pets.");
      } else {
        const ArrayData: any = [];
        res.forEach((doc) => {
          const idPet = { idPet: doc.id };
          const data = doc.data();
          ArrayData.push({ ...idPet, ...data });
        });
        setDataPets(ArrayData);
      }
    });
  }, []);

  const AtualizarAgendamento = async () => {
    const erros: { field: string; message: string }[] = [];

    setErrors([]);

    if (pet == null) erros.push({ field: "pet", message: "Selecione o Pet" });
    if (!dataPartida.toLocaleDateString())
      erros.push({ field: "data", message: "Preencha o campo Data" });
    if (!dataPartida.toLocaleTimeString().substring(0, 5))
      erros.push({ field: "hora", message: "Preencha o campo Hora" });
    if (!bairroPartida)
      erros.push({
        field: "bairroPartida",
        message: "Preencha o campo Bairro",
      });
    if (!logradouroPartida)
      erros.push({
        field: "logradouroPartida",
        message: "Preencha o campo Logradouro",
      });
    if (!numeroPartida)
      erros.push({
        field: "numeroPartida",
        message: "Preencha o campo Número",
      });
    if (!estabelecimentoDestino)
      erros.push({
        field: "estabelecimentoDestino",
        message: "Preencha o campo Estabelecimento",
      });
    if (!bairroDestino)
      erros.push({
        field: "bairroDestino",
        message: "Preencha o campo Bairro",
      });
    if (!logradouroDestino)
      erros.push({
        field: "logradouroDestino",
        message: "Preencha o campo Logradouro",
      });
    if (!numeroDestino)
      erros.push({
        field: "numeroDestino",
        message: "Preencha o campo Número",
      });

    if (erros.length > 0) {
      return setErrors(erros);
    } else {
      const agendamentoRef = doc(db, "agendamentos", idAgendamento);
      await updateDoc(agendamentoRef, {
        idPet: dataPets[pet ? pet : 0].idPet,
        nomePet: dataPets[pet ? pet : 0].nome,
        tipoPet: dataPets[pet ? pet : 0].tipo,
        racaPet: dataPets[pet ? pet : 0].raca,
        portePet: dataPets[pet ? pet : 0].porte,
        data: dataPartida.toLocaleDateString(),
        hora: dataPartida.toLocaleTimeString().substring(0, 5),
        dataCompleta: dataPartida.toISOString(),
        logradouroPartida: logradouroPartida,
        bairroPartida: bairroPartida,
        numeroPartida: numeroPartida,
        estabelecimentoDestino: estabelecimentoDestino,
        logradouroDestino: logradouroDestino,
        bairroDestino: bairroDestino,
        numeroDestino: numeroDestino,
      })
        .then(() => {
          navigation.goBack();
        })
        .catch((e) => console.log(e));
    }
  };

  const ExcluirAgendamento = async () => {
    await deleteDoc(doc(db, "agendamentos", idAgendamento));
    navigation.navigate("ClienteTabNavegation");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <IconAgendamentos color={"#4060FF"} />
          <Text style={styles.title}>Transporte</Text>
        </View>
        <View>
          <InputSelect
            label='Pet'
            data={dataPets.map((e: { nome: any }) => e.nome)}
            onChange={(selectedItem: any, index: number) => {
              setNomePet(selectedItem);
              setPet(index);
            }}
            defaultValue={nomePet}
            mensagemError={errors.find((e) => e.field === "pet")?.message}
          />
          <InputData
            onChange={onChangeData}
            value={dataPartida}
            onPress={showDatapicker}
            showModal={showData}
            mode={modeData}
            mensagemError={errors.find((e) => e.field === "data")?.message}
          />
          <InputHora
            onChange={onChangeData}
            value={dataPartida}
            onPress={showHoraPicker}
            showModal={showData}
            mode={modeData}
            mensagemError={errors.find((e) => e.field === "hora")?.message}
          />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Endereço de Partida</Text>
            <Text style={styles.subtitleCity}>Alterosa-MG</Text>
          </View>
          <InputForm
            label={"Bairro"}
            placeholder={"Ex: Centro"}
            defaultValue={bairroPartida}
            onChange={(e) => {
              setBairroPartida(e);
            }}
            mensagemError={
              errors.find((e) => e.field === "bairroPartida")?.message
            }
          />
          <InputForm
            label={"Logradouro"}
            placeholder={"Ex: Rua Donatello Paccini"}
            defaultValue={logradouroPartida}
            onChange={(e) => {
              setLogradouroPartida(e);
            }}
            mensagemError={
              errors.find((e) => e.field === "logradouroPartida")?.message
            }
          />
          <InputForm
            label={"Número"}
            placeholder={"Ex: 365"}
            defaultValue={numeroPartida}
            onChange={(e) => {
              setNumeroPartida(e);
            }}
            mensagemError={
              errors.find((e) => e.field === "numeroPartida")?.message
            }
          />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Endereço de Destino</Text>
            <Text style={styles.subtitleCity}>Alterosa-MG</Text>
          </View>
          <InputForm
            label={"Estabelecimento"}
            placeholder={"Ex: PetShop Feliz"}
            defaultValue={estabelecimentoDestino}
            onChange={(e) => {
              setEstabelecimentoDestino(e);
            }}
            mensagemError={
              errors.find((e) => e.field === "estabelecimentoDestino")?.message
            }
          />
          <InputForm
            label={"Bairro"}
            placeholder={"Ex: Centro"}
            defaultValue={bairroDestino}
            onChange={(e) => {
              setBairroDestino(e);
            }}
            mensagemError={
              errors.find((e) => e.field === "bairroDestino")?.message
            }
          />
          <InputForm
            label={"Logradouro"}
            placeholder={"Ex: Rua Alcides Terra"}
            defaultValue={logradouroDestino}
            onChange={(e) => {
              setLogradouroDestino(e);
            }}
            mensagemError={
              errors.find((e) => e.field === "logradouroDestino")?.message
            }
          />
          <InputForm
            label={"Número"}
            placeholder={"Ex: 2688"}
            defaultValue={numeroDestino}
            onChange={(e) => {
              setNumeroDestino(e);
            }}
            mensagemError={
              errors.find((e) => e.field === "numeroDestino")?.message
            }
          />
        </View>
        <View style={styles.buttonSalvar}>
          {errors.length > 0 ? (
            <View style={styles.errorForm}>
              <Text style={styles.errorTextForm}>
                Algum campo está incorreto ou vazio.
              </Text>
            </View>
          ) : (
            ""
          )}
          <ButtonPrimary
            title={"Salvar"}
            onPress={() => AtualizarAgendamento()}
          />
          <ButtonExcluir
            title={"Excluir"}
            onPress={() => ExcluirAgendamento()}
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
  errorForm: {
    backgroundColor: "#ffd4d4",
    borderRadius: 8,
    padding: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  errorTextForm: {
    fontFamily: "Raleway-500",
    fontSize: 14,
    color: "#ff4040",
    textAlign: "center",
    lineHeight: 14,
  },
});
