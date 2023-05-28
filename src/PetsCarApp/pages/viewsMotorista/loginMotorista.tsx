// João Jorges - Desenvolvi o ínicio da tela utilizando o material disponível na disciplina e com a ajuda do Thiago
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { InputEmail, InputSenha } from "../../components/input";
import { ButtonPrimary } from "../../components/button";
import { HeaderTitle } from "../../components/header";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseInit";

export function LoginMotorista({ navigation }: any) {
  const [emailInput, setEmailInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");

  const formLogin = async () => {
    signInWithEmailAndPassword(auth, emailInput, senhaInput)
      .then(async (userCredential) => {
        // Signed in
        const userID = userCredential.user.uid;
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigation.navigate("MotoristaNavigation", {
          screen: "MotoristaTabNavegation",
          params: { idMotorista: uid },
        });
      } else {
        navigation.navigate("MotoristaRouter");
      }
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <HeaderTitle
        title='Login de Motorista'
        subtitle='Insira seu e-mail e senha para logar e realizar diversas corridas!'
      />
      <View style={styles.formLogin}>
        <InputEmail onChange={(e: string) => setEmailInput(e)} />
        <InputSenha onChange={(e: string) => setSenhaInput(e)} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RecuperarSenhaMotorista");
          }}
          style={styles.esqueceuSenha}
        >
          <Text style={styles.botaoSenha}>Esqueceu a Senha?</Text>
        </TouchableOpacity>
        <ButtonPrimary
          title={"Login"}
          onPress={() => {
            formLogin();
          }}
        />
      </View>
      <View style={styles.containerCadastrar}>
        <Text style={styles.textNaoConta}>Não tem uma conta?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CadastroMotorista");
          }}
        >
          <Text style={styles.botaoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 35,
    justifyContent: "space-evenly",
  },
  formLogin: {
    paddingTop: 50,
    borderBottomColor: "#F4F4F4",
    borderBottomWidth: 1,
    paddingBottom: 50,
  },
  botaoSenha: {
    fontFamily: "Raleway-500",
    fontSize: 12,
    textDecorationLine: "underline",
    color: "#4060FF",
    width: "100%",
  },
  esqueceuSenha: {
    display: "flex",
    marginBottom: 28,
  },
  containerCadastrar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  botaoCadastrar: {
    fontFamily: "Raleway-700",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#4060FF",
    paddingLeft: 6,
  },
  textNaoConta: {
    fontFamily: "Raleway-400",
    fontSize: 16,
  },
});
