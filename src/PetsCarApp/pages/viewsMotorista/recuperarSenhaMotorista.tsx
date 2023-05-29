//Mariano: desenvolvi a tela de recuperar senha do cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm } from "../../components/input";
import { ButtonPrimary } from "../../components/button";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseInit";
import { useState } from "react";

export function RecuperarSenhaMotorista({ navigation }: any) {
  const [email, setEmail] = useState("");

  const RedefinirSenha = async () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle
        title='Esqueceu sua Senha?'
        subtitle='Recupere sua senha caso tenha esquecido! '
      />
      <View style={styles.input}>
        <InputForm
          label='E-mail'
          placeholder='Ex: abc@example.com'
          inputMode={"email"}
          onChange={(e: any) => setEmail(e)}
        />
      </View>
      <ButtonPrimary
        onPress={() => {
          RedefinirSenha();
        }}
        title={"Enviar"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 35,
  },
  input: {
    paddingTop: 76,
    paddingBottom: 5,
  },
});
