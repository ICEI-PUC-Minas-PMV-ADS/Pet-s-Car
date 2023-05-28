//Thiago: desenvolvi a tela de adição de agenda com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { IconAgendamentos } from "../../../components/icons";
import { InputForm, InputSelect } from "../../../components/input";
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

export function AdicionarAgendaCliente({ navigation, route }: any) {
  const idCliente = route.params.idCliente;

  const [pet, setPet] = useState<number>(0);
  const [nomeCliente, setNomeCliente] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [bairroPartida, setBairroPartida] = useState("");
  const [logradouroPartida, setLogradouroPartida] = useState("");
  const [numeroPartida, setNumeroPartida] = useState("");
  const [estabelecimentoDestino, setEstabelecimentoDestino] = useState("");
  const [bairroDestino, setBairroDestino] = useState("");
  const [logradouroDestino, setLogradouroDestino] = useState("");
  const [numeroDestino, setNumeroDestino] = useState("");

  const [dataPets, setDataPets] = useState<Array<any>>([]);

  useEffect(() => {
    const petsRef = collection(db, "pets");
    const idPets = query(petsRef, where("idCliente", "==", idCliente));

    getDocs(idPets).then((res) => {
      if (res.empty) {
        setDataPets([{ nome: "Nenhum pet cadastrado." }]);
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
    try {
      await addDoc(collection(db, "agendamentos"), {
        idCliente: idCliente,
        idPet: dataPets[pet].idPet,
        nomeCliente: nomeCliente,
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
        status: "Pendente",
        valor: "",
        idMotorista: "",
        nomeMotorista: "Sem motorista.",
      }).then(() => {
        navigation.goBack();
      });
    } catch (e) {
      console.error(e);
      console.log("não deu");
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
          />
          <InputForm
            label={"Data"}
            placeholder={"Ex: 15/02/2023"}
            keyboardType={"numeric"}
            onChange={(e) => {
              setData(e);
            }}
          />
          <InputForm
            label={"Hora"}
            placeholder={"Ex: 15:00hrs"}
            keyboardType={"numeric"}
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
            onChange={(e) => {
              setBairroPartida(e);
            }}
          />
          <InputForm
            label={"Logradouro"}
            placeholder={"Ex: Rua Donatello Paccini"}
            onChange={(e) => {
              setLogradouroPartida(e);
            }}
          />
          <InputForm
            label={"Número"}
            placeholder={"Ex: 365"}
            keyboardType={"numeric"}
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
            onChange={(e) => {
              setEstabelecimentoDestino(e);
            }}
          />
          <InputForm
            label={"Bairro"}
            placeholder={"Ex: Centro"}
            onChange={(e) => {
              setBairroDestino(e);
            }}
          />
          <InputForm
            label={"Logradouro"}
            placeholder={"Ex: Rua Alcides Terra"}
            onChange={(e) => {
              setLogradouroDestino(e);
            }}
          />
          <InputForm
            label={"Número"}
            placeholder={"Ex: 2688"}
            keyboardType={"numeric"}
            onChange={(e) => {
              setNumeroDestino(e);
            }}
          />
        </View>
        <View style={styles.buttonSalvar}>
          <ButtonPrimary
            title={"Concluir"}
            onPress={() => EnviarAgendamento()}
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
