//João Jorges: desenvolvi a tela de cadastro cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm, InputSelect } from "../../components/input";
import { ButtonAddPet, ButtonPrimary } from "../../components/button";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebaseInit";

const selectPortePets = ["Pequeno", "Médio", "Grande"];
const selectTipoPets = ["Cachorro", "Gato", "Pássaro", "Hamsters", "Outro"];

export function CadastroCliente({ navigation }) {
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
        navigation.goBack();
        //console.log("Document written with ID: ", docCliente.id);
        //console.log("Document written with ID: ", docPet.id);
        console.log(userID);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
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
            label='Seu Nome'
            placeholder='Ex. Saul Ramirez'
            onChange={(e) => setNome(e)}
          />
          <InputForm
            label='E-mail'
            placeholder='Ex: abc@example.com'
            onChange={(e) => setEmail(e)}
          />
          <InputForm
            label='Senha'
            placeholder='••••••••••'
            onChange={(e) => setSenha(e)}
          />
          <InputForm
            label='Telefone'
            placeholder='Ex:(99) 99999-9999'
            onChange={(e) => setTelefone(e)}
          />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Endereço</Text>
            <Text style={styles.subtitleCity}>Alterosa-MG</Text>
          </View>
          <InputForm
            label='Bairro'
            placeholder='Ex: Centro'
            onChange={(e) => setBairro(e)}
          />
          <InputForm
            label='Logradouro'
            placeholder='Ex: Rua Alcides Terra'
            onChange={(e) => setLogradouro(e)}
          />
          <InputForm
            label='Número'
            placeholder='Ex: 2688'
            onChange={(e) => setNumeroResidencia(e)}
          />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Meu Pet</Text>
          </View>
          <InputForm
            label='Nome'
            placeholder='Ex: Bob'
            onChange={(e) => setNomePet(e)}
          />
          <InputSelect
            label='Tipo'
            data={selectTipoPets}
            onChange={(e) => setTipoPet(e)}
          />
          <InputForm
            label='Raça'
            placeholder='Ex: Pinscher'
            onChange={(e) => setRacaPet(e)}
          />
          <InputSelect
            label='Porte'
            data={selectPortePets}
            onChange={(e) => setPortePet(e)}
          />
          <ButtonAddPet title={"Adicionar Mais"} />
        </View>
        <View style={styles.button}>
          <ButtonPrimary title='Cadastrar' onPress={() => EnvioForm()} />
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
});
