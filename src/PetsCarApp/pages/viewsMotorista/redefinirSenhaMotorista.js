import { StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm } from "../../components/input";
import { ButtonPrimary } from "../../components/button";

export function RedefinirSenhaMotorista() {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Esqueceu sua Senha?"
        subtitle="Defina a nova senha para entrar em sua conta!"
      />
      <View style={styles.input}>
        <InputForm label="Insira a nova Senha" placeholder="•••••••••••••" />
      </View>
      <ButtonPrimary title={"Confirmar"} />
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
