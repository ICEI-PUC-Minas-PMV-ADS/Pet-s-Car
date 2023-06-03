//João Jorges: desenvolvi a tela de cadastro cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm, InputSelect } from "../../components/input";
import { ButtonPrimary } from "../../components/button";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebaseInit";
import { isValidEmail, isValidNome } from "../../utils/Validacao";
import { regexTelefone } from "../../utils/Regex";
import { ModalSucesso } from "../../components/modal";

const selectPortePets = ["Pequeno", "Médio", "Grande"];
const selectTipoPets = ["Cachorro", "Gato", "Pássaro", "Hamsters", "Outro"];

export function CadastroCliente({ navigation }: any) {
  const [modalSucesso, setModalSucesso] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numeroResidencia, setNumeroResidencia] = useState("");
  const [nomePet, setNomePet] = useState("");
  const [tipoPet, setTipoPet] = useState("");
  const [racaPet, setRacaPet] = useState("");
  const [portePet, setPortePet] = useState("");

  const EnvioForm = () => {
    const erros: { field: string; message: string }[] = [];

    setErrors([]);

    if (!nome)
      erros.push({ field: "nome", message: "Preencha o campo Seu Nome" });
    if (!email)
      erros.push({ field: "email", message: "Preencha o campo E-mail" });
    if (!senha)
      erros.push({ field: "senha", message: "Preencha o campo Senha" });
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
    if (!nomePet)
      erros.push({
        field: "nomePet",
        message: "Preencha o campo Nome",
      });
    if (!tipoPet)
      erros.push({
        field: "tipoPet",
        message: "Selecione o tipo do Pet",
      });
    if (!racaPet)
      erros.push({
        field: "racaPet",
        message: "Preencha o campo Raça",
      });
    if (!portePet)
      erros.push({
        field: "portePet",
        message: "Selecione o porte do Pet",
      });
    if (nome && isValidNome(nome) == false)
      erros.push({ field: "nome", message: "Preencha com nome e sobrenome" });
    if (email && isValidEmail(email) == false)
      erros.push({ field: "email", message: "E-mail incorreto" });

    if (erros.length > 0) {
      return setErrors(erros);
    } else {
      createUserWithEmailAndPassword(auth, email, senha)
        .then(async (userCredential) => {
          const userID = userCredential.user.uid;
          await setDoc(doc(db, "clientes", userID), {
            idUser: userID,
            nome: nome,
            email: email,
            telefone: telefone,
            logradouro: logradouro,
            bairro: bairro,
            numeroResidencia: numeroResidencia,
            userType: "Cliente",
          });
          await addDoc(collection(db, "pets"), {
            idCliente: userID,
            nome: nomePet,
            porte: portePet,
            raca: racaPet,
            tipo: tipoPet,
          });
          setModalSucesso(true);
          setTimeout(() => {
            setModalSucesso(false);
            navigation.navigate("ClienteNavigation", {
              idCliente: userID,
            });
          }, 1800);
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            erros.push({
              field: "email",
              message: "Existe um usuário com o mesmo e-mail",
            });
          }
          if (error.code == "auth/weak-password") {
            erros.push({
              field: "senha",
              message: "A senha deve ter no mínimo 6 caracteres",
            });
          }
          if (erros.length > 0) {
            return setErrors(erros);
          }
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.containerScroll}>
        <HeaderTitle
          title='Cadastro'
          subtitle='Crie uma conta para acessar todos os recursos da Pet’s Car!'
        />
        <View style={styles.initForm}>
          <InputForm
            label='Seu Nome*'
            placeholder='Ex. Saul Ramirez'
            onChange={(e) => setNome(e)}
            mensagemError={errors.find((e) => e.field === "nome")?.message}
          />
          <InputForm
            label='E-mail*'
            placeholder='Ex: abc@example.com'
            onChange={(e) => setEmail(e)}
            inputMode='email'
            mensagemError={errors.find((e) => e.field === "email")?.message}
          />
          <InputForm
            label='Senha*'
            placeholder='••••••••••'
            onChange={(e) => setSenha(e)}
            secureTextEntry={true}
            mensagemError={errors.find((e) => e.field === "senha")?.message}
          />
          <InputForm
            label='Telefone*'
            placeholder='Ex:(99) 99999-9999'
            value={telefone}
            maxLength={15}
            onChange={(e) => setTelefone(regexTelefone(e))}
            inputMode='tel'
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
            placeholder='Ex: Centro'
            onChange={(e) => setBairro(e)}
            mensagemError={errors.find((e) => e.field === "bairro")?.message}
          />
          <InputForm
            label='Logradouro*'
            placeholder='Ex: Rua Alcides Terra'
            onChange={(e) => setLogradouro(e)}
            mensagemError={
              errors.find((e) => e.field === "logradouro")?.message
            }
          />
          <InputForm
            label='Número*'
            placeholder='Ex: 2688'
            onChange={(e) => setNumeroResidencia(e)}
            keyboardType='numeric'
            mensagemError={
              errors.find((e) => e.field === "numeroResidencia")?.message
            }
          />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Meu Pet</Text>
          </View>
          <InputForm
            label='Nome*'
            placeholder='Ex: Bob'
            onChange={(e) => setNomePet(e)}
            mensagemError={errors.find((e) => e.field === "nomePet")?.message}
          />
          <InputSelect
            label='Tipo*'
            data={selectTipoPets}
            onChange={(e: any) => setTipoPet(e)}
            mensagemError={errors.find((e) => e.field === "tipoPet")?.message}
          />
          <InputForm
            label='Raça*'
            placeholder='Ex: Pinscher'
            onChange={(e) => setRacaPet(e)}
            mensagemError={errors.find((e) => e.field === "racaPet")?.message}
          />
          <InputSelect
            label='Porte*'
            data={selectPortePets}
            onChange={(e: any) => setPortePet(e)}
            mensagemError={errors.find((e) => e.field === "portePet")?.message}
          />
        </View>

        <View style={styles.button}>
          {errors.length > 0 ? (
            <View style={styles.errorForm}>
              <Text style={styles.errorTextForm}>
                Algum campo está incorreto ou vazio.
              </Text>
            </View>
          ) : (
            ""
          )}
          <ButtonPrimary title='Cadastrar' onPress={() => EnvioForm()} />
        </View>
        <ModalSucesso
          title='Sucesso! Novo usuário cadastrado.'
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
  button: {
    paddingBottom: 80,
    paddingTop: 30,
  },
  initForm: {
    paddingTop: 46,
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
