//Mariano: desenvolvi a tela de recuperar senha do cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm } from "../../components/input";
import { ButtonPrimary } from "../../components/button";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseInit";
import { isValidEmail } from "../../utils/Validacao";

export function RecuperarSenhaCliente({ navigation }: any) {
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [email, setEmail] = useState("");

  const RedefinirSenha = async () => {
    const erros: { field: string; message: string }[] = [];

    setErrors([]);

    if (!email)
      erros.push({ field: "email", message: "Preencha o campo E-mail" });
    if (email && isValidEmail(email) == false)
      erros.push({ field: "email", message: "E-mail incorreto" });
    if (erros.length > 0) {
      return setErrors(erros);
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          navigation.navigate("RedefinirSenhaCliente");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          if (error.code == "auth/user-not-found") {
            erros.push({
              field: "errorAuth",
              message: "Usuário não encontrado.",
            });
          }
          if (erros.length > 0) {
            return setErrors(erros);
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <HeaderTitle
        title='Esqueceu sua Senha?'
        subtitle='Informe abaixo o e-mail usado no cadastro de sua conta, iremos enviar um e-mail para você poder redefinir sua senha.'
      />
      <View style={styles.input}>
        <InputForm
          label='E-mail'
          placeholder='Ex: abc@example.com'
          inputMode={"email"}
          onChange={(e: any) => {
            setEmail(e);
          }}
          mensagemError={errors.find((e) => e.field === "email")?.message}
        />
      </View>
      {errors.find((e) => e.field === "errorAuth")?.message ? (
        <View style={styles.errorForm}>
          <Text style={styles.errorTextForm}>
            {errors.find((e) => e.field === "errorAuth")?.message}
          </Text>
        </View>
      ) : (
        ""
      )}
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
