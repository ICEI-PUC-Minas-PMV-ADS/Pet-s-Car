//João Jorges: desenvolvi a tela de editar perfil cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconPerfil } from "../../../components/icons";
import { InputForm } from "../../../components/input";
import { ButtonPrimary } from "../../../components/button";
import { useState } from "react";
import { db } from "../../firebaseInit";
import { doc, updateDoc } from "firebase/firestore";
import { Cliente } from "../../../interfaces/interface_cliente";

export function EditarPerfilCliente({ route, navigation }: any) {
  const dataCliente: Cliente = route.params.dataCliente;

  const [nome, setNome] = useState(dataCliente.nome);
  const [email, setEmail] = useState(dataCliente.email);
  const [telefone, setTelefone] = useState(dataCliente.telefone);
  const [bairro, setBairro] = useState(dataCliente.bairro);
  const [logradouro, setLogradouro] = useState(dataCliente.logradouro);
  const [numeroResidencia, setNumeroResidencia] = useState(
    dataCliente.numeroResidencia
  );

  const AtualizarCliente = async () => {
    const clienteRef = doc(db, "clientes", dataCliente.idUser);
    await updateDoc(clienteRef, {
      nome: nome,
      email: email,
      telefone: telefone,
      logradouro: logradouro,
      bairro: bairro,
      numeroResidencia: numeroResidencia,
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((e) => console.log(e));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <IconPerfil color={"#4060FF"} />
          <Text style={styles.title}>Perfil</Text>
        </View>
        <View>
          <InputForm
            label='Nome'
            placeholder='João Silva'
            onChange={(e: string) => {
              setNome(e);
            }}
            defaultValue={nome}
          />
          <InputForm
            label='E-mail'
            placeholder='joao.silva@gmail.com'
            onChange={(e: string) => {
              setEmail(e);
            }}
            defaultValue={email}
          />
          <InputForm
            label='Telefone'
            placeholder='(35) 95655-5553'
            onChange={(e: string) => {
              setTelefone(e);
            }}
            defaultValue={telefone}
          />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Endereço</Text>
            <Text style={styles.subtitleCity}>Alterosa-MG</Text>
          </View>
          <InputForm
            label='Bairro'
            placeholder='Centro'
            onChange={(e: string) => {
              setBairro(e);
            }}
            defaultValue={bairro}
          />
          <InputForm
            label='Logradouro'
            placeholder='Rua Donatello Paccini'
            onChange={(e: string) => {
              setLogradouro(e);
            }}
            defaultValue={logradouro}
          />
          <InputForm
            label='Número'
            placeholder='365'
            onChange={(e: string) => {
              setNumeroResidencia(e);
            }}
            defaultValue={numeroResidencia}
          />
        </View>
        <View style={styles.buttonSalvar}>
          <ButtonPrimary
            title={"Salvar"}
            onPress={() => {
              AtualizarCliente();
            }}
          />
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
