//João Jorges: desenvolvi a tela de editar perfil cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconPerfil } from "../../../components/icons";
import { InputForm } from "../../../components/input";
import { ButtonPrimary } from "../../../components/button";
import { useState } from "react";
import { db } from "../../firebaseInit";
import { doc, updateDoc } from "firebase/firestore";
import { Cliente } from "../../../interfaces/interface_cliente";
import { isValidEmail, isValidNome } from "../../../utils/Validacao";
import { regexTelefone } from "../../../utils/Regex";
import { ModalSucesso } from "../../../components/modal";

export function EditarPerfilCliente({ route, navigation }: any) {
  const dataCliente: Cliente = route.params.dataCliente;

  const [modalSucesso, setModalSucesso] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [nome, setNome] = useState(dataCliente.nome);
  const [email, setEmail] = useState(dataCliente.email);
  const [telefone, setTelefone] = useState(dataCliente.telefone);
  const [bairro, setBairro] = useState(dataCliente.bairro);
  const [logradouro, setLogradouro] = useState(dataCliente.logradouro);
  const [numeroResidencia, setNumeroResidencia] = useState(
    dataCliente.numeroResidencia
  );

  const AtualizarCliente = async () => {
    const erros: { field: string; message: string }[] = [];

    setErrors([]);

    if (!nome)
      erros.push({ field: "nome", message: "Preencha o campo Seu Nome" });
    if (!email)
      erros.push({ field: "email", message: "Preencha o campo E-mail" });
    if (!telefone)
      erros.push({ field: "telefone", message: "Preencha o campo Telefone" });
    if (!bairro)
      erros.push({ field: "bairro", message: "Preencha o campo Bairro" });
    if (!logradouro)
      erros.push({
        field: "logradouro",
        message: "Preencha o campo Logradouro",
      });
    if (!numeroResidencia)
      erros.push({
        field: "numeroResidencia",
        message: "Preencha o campo Número",
      });
    if (nome && isValidNome(nome) == false)
      erros.push({ field: "nome", message: "Preencha com nome e sobrenome" });
    if (email && isValidEmail(email) == false)
      erros.push({ field: "email", message: "E-mail incorreto" });
    if (erros.length > 0) {
      return setErrors(erros);
    } else {
      const clienteRef = doc(db, "clientes", dataCliente.idUser);
      await updateDoc(clienteRef, {
        nome: nome,
        email: email,
        telefone: telefone,
        logradouro: logradouro,
        bairro: bairro,
        numeroResidencia: numeroResidencia,
      }).then(() => {
        setModalSucesso(true);
        setTimeout(() => {
          navigation.goBack();
        }, 2500);
      });
    }
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
            label='Nome*'
            placeholder='João Silva'
            onChange={(e: string) => {
              setNome(e);
            }}
            defaultValue={nome}
            mensagemError={errors.find((e) => e.field === "nome")?.message}
          />
          <InputForm
            label='E-mail*'
            placeholder='joao.silva@gmail.com'
            onChange={(e: string) => {
              setEmail(e);
            }}
            defaultValue={email}
            mensagemError={errors.find((e) => e.field === "email")?.message}
          />
          <InputForm
            label='Telefone*'
            placeholder='(35) 95655-5553'
            value={telefone}
            maxLength={15}
            inputMode='tel'
            onChange={(e: string) => {
              setTelefone(regexTelefone(e));
            }}
            defaultValue={telefone}
            mensagemError={errors.find((e) => e.field === "telefone")?.message}
          />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Endereço</Text>
            <Text style={styles.subtitleCity}>Alterosa-MG</Text>
          </View>
          <InputForm
            label='Bairro*'
            placeholder='Centro'
            onChange={(e: string) => {
              setBairro(e);
            }}
            defaultValue={bairro}
            mensagemError={errors.find((e) => e.field === "bairro")?.message}
          />
          <InputForm
            label='Logradouro*'
            placeholder='Rua Donatello Paccini'
            onChange={(e: string) => {
              setLogradouro(e);
            }}
            defaultValue={logradouro}
            mensagemError={
              errors.find((e) => e.field === "logradouro")?.message
            }
          />
          <InputForm
            label='Número*'
            placeholder='365'
            onChange={(e: string) => {
              setNumeroResidencia(e);
            }}
            defaultValue={numeroResidencia}
            mensagemError={errors.find((e) => e.field === "numero")?.message}
          />
        </View>
        {errors.length > 0 ? (
          <View style={styles.errorForm}>
            <Text style={styles.errorTextForm}>
              Algum campo está incorreto ou vazio.
            </Text>
          </View>
        ) : (
          ""
        )}
        <View style={styles.buttonSalvar}>
          <ButtonPrimary
            title={"Salvar"}
            onPress={() => {
              AtualizarCliente();
            }}
          />
        </View>
        <ModalSucesso
          title='Sucesso! Perfil atualizado.'
          visible={modalSucesso}
          onRequestClose={() => {
            setModalSucesso(!modalSucesso);
          }}
        />
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
