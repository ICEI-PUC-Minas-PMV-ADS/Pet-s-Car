//Jéssica: desenvolvi a tela de cadastro de motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm } from "../../components/input";
import { ButtonPrimary } from "../../components/button";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseInit";
import { doc, setDoc } from "firebase/firestore";

export function CadastroMotorista({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const EnvioForm = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then(async (userCredential) => {
        const userID = userCredential.user.uid;
        await setDoc(doc(db, "motoristas", userID), {
          idUser: userID,
          nome: nome,
          email: email,
          telefone: telefone,
          userType: "Motorista",
        });
        navigation.navigate("MotoristaNavigation", {
          idMotorista: userID,
        });
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
        <View style={styles.formContainer}>
          <InputForm
            label='Seu Nome'
            placeholder='Ex. Saul Ramirez'
            onChange={(e: any) => setNome(e)}
          />
          <InputForm
            label='E-mail'
            placeholder='Ex: abc@example.com'
            inputMode={"email"}
            onChange={(e: any) => setEmail(e)}
          />
          <InputForm
            label='Senha'
            placeholder='Ex: •••••••••••••'
            onChange={(e: any) => setSenha(e)}
          />
          <InputForm
            label='Telefone'
            placeholder='Ex: (99)99999-9999'
            inputMode={"tel"}
            onChange={(e: any) => setTelefone(e)}
          />
        </View>
        <View style={styles.buttonCadastrar}>
          <ButtonPrimary
            title={"Cadastrar"}
            onPress={() => {
              EnvioForm();
            }}
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
  formContainer: {
    paddingVertical: 45,
  },
  buttonCadastrar: {
    paddingBottom: 70,
  },
});
