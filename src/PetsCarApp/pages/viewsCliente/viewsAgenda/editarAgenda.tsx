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
import { InputForm, InputSelect } from "../../../components/input";
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

  const [pet, setPet] = useState<number>(0);
  const [data, setData] = useState(dataAgendamento.data);
  const [hora, setHora] = useState(dataAgendamento.hora);
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
    const agendamentoRef = doc(db, "agendamentos", idAgendamento);
    await updateDoc(agendamentoRef, {
      idPet: dataPets[pet].idPet,
      nomePet: dataPets[pet].nome,
      tipoPet: dataPets[pet].tipo,
      racaPet: dataPets[pet].raca,
      portePet: dataPets[pet].porte,
      data: data,
      hora: hora,
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
              setPet(index);
            }}
            defaultValue={dataAgendamento.nomePet}
          />
          <InputForm
            label={"Data"}
            placeholder={"Ex: 15/02/2023"}
            defaultValue={data}
            onChange={(e) => {
              setData(e);
            }}
          />
          <InputForm
            label={"Hora"}
            placeholder={"Ex: 15:00hrs"}
            defaultValue={hora}
            onChange={(e) => {
              setHora(e);
            }}
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
          />
          <InputForm
            label={"Logradouro"}
            placeholder={"Ex: Rua Donatello Paccini"}
            defaultValue={logradouroPartida}
            onChange={(e) => {
              setLogradouroPartida(e);
            }}
          />
          <InputForm
            label={"Número"}
            placeholder={"Ex: 365"}
            defaultValue={numeroPartida}
            onChange={(e) => {
              setNumeroPartida(e);
            }}
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
          />
          <InputForm
            label={"Bairro"}
            placeholder={"Ex: Centro"}
            defaultValue={bairroDestino}
            onChange={(e) => {
              setBairroDestino(e);
            }}
          />
          <InputForm
            label={"Logradouro"}
            placeholder={"Ex: Rua Alcides Terra"}
            defaultValue={logradouroDestino}
            onChange={(e) => {
              setLogradouroDestino(e);
            }}
          />
          <InputForm
            label={"Número"}
            placeholder={"Ex: 2688"}
            defaultValue={numeroDestino}
            onChange={(e) => {
              setNumeroDestino(e);
            }}
          />
        </View>
        <View style={styles.buttonSalvar}>
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
});
