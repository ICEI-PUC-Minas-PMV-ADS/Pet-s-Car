//Mariano: desenvolvi a tela de recuperar senha do cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../../components/header";
import { ButtonPrimary } from "../../components/button";

export function RedefinirSenhaMotorista({ navigation }: any) {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title='E-mail enviado com sucesso!'
        subtitle='Verifique sua caixa de mensagens, você acabou de receber um e-mail para redefinir sua senha.'
      />
      <View style={styles.input}></View>
      <ButtonPrimary
        title={"Retornar ao Login"}
        onPress={() => navigation.navigate("LoginMotorista")}
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
