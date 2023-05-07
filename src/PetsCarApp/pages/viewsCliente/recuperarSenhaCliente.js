//Mariano: desenvolvi a tela de recuperar senha do cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm } from "../../components/input";
import { ButtonPrimary } from "../../components/button";

export function RecuperarSenhaCliente({ navigation }) {
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
        />
      </View>
      <ButtonPrimary
        onPress={() => {
          navigation.navigate("RedefinirSenhaCliente");
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
