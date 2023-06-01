//Thiago: desenvolvi a tela de adição de agenda com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { IconAgendamentos } from "../../../components/icons";
import {
  InputData,
  InputForm,
  InputHora,
  InputSelect,
} from "../../../components/input";
import { ButtonPrimary } from "../../../components/button";
import { useEffect, useState } from "react";
import { db } from "../../firebaseInit";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { ModalSucesso } from "../../../components/modal";

export function AdicionarAgendaCliente({ navigation, route }: any) {
  const idCliente = route.params.idCliente;

  const [modalSucesso, setModalSucesso] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [pet, setPet] = useState<number | null>(null);
  const [nomeCliente, setNomeCliente] = useState("");
  const [bairroPartida, setBairroPartida] = useState("");
  const [logradouroPartida, setLogradouroPartida] = useState("");
  const [numeroPartida, setNumeroPartida] = useState("");
  const [estabelecimentoDestino, setEstabelecimentoDestino] = useState("");
  const [bairroDestino, setBairroDestino] = useState("");
  const [logradouroDestino, setLogradouroDestino] = useState("");
  const [numeroDestino, setNumeroDestino] = useState("");
  const [dataPartida, setDataPartida] = useState(new Date());
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

  const [dataPets, setDataPets] = useState<Array<any>>([]);

  useEffect(() => {
    const petsRef = collection(db, "pets");
    const idPets = query(petsRef, where("idCliente", "==", idCliente));
    getDocs(idPets).then((res) => {
      if (res.empty) {
        setDataPets([{ nome: "Vazio" }]);
        setErrors([{ field: "pet", message: "Nenhum pet cadastrado" }]);
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

    const agendamentosRef = doc(db, "clientes", idCliente);

    getDoc(agendamentosRef).then((res: any) => {
      setNomeCliente(res.data().nome);
    });
  }, []);

  const EnviarAgendamento = async () => {
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
      await addDoc(collection(db, "agendamentos"), {
        idCliente: idCliente,
        idPet: dataPets[pet ? pet : 0].idPet,
        nomeCliente: nomeCliente,
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
        status: "Pendente",
        valor: "",
        idMotorista: "",
        nomeMotorista: "Sem motorista.",
      }).then(() => {
        setModalSucesso(true);
        setTimeout(() => {
          navigation.goBack();
        }, 2500);
      });
    }
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
            data={dataPets.map((e) => e.nome)}
            onChange={(selectedItem: any, index: number) => {
              setPet(index);
            }}
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
            keyboardType={"numeric"}
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
            keyboardType={"numeric"}
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
            title={"Concluir"}
            onPress={() => EnviarAgendamento()}
          />
        </View>
        <ModalSucesso
          title='Sucesso! Novo agendamento realizado.'
          visible={modalSucesso}
          onRequestClose={() => {
            setModalSucesso(!modalSucesso);
          }}
        />
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
