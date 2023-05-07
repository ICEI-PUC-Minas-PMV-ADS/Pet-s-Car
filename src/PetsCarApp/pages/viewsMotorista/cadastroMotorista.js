//Jéssica: desenvolvi a tela de cadastro de motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm } from "../../components/input";
import { ButtonPrimary } from "../../components/button";

export function CadastroMotorista({ navigation }) {
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
          <InputForm label='Seu Nome' placeholder='Ex. Saul Ramirez' />
          <InputForm
            label='E-mail'
            placeholder='Ex: abc@example.com'
            inputMode={"email"}
          />
          <InputForm label='Senha' placeholder='Ex: •••••••••••••' />
          <InputForm
            label='Telefone'
            placeholder='Ex: (99)99999-9999'
            inputMode={"tel"}
          />
        </View>
        <View style={styles.buttonCadastrar}>
          <ButtonPrimary
            title={"Cadastrar"}
            onPress={() => {
              navigation.navigate("LoginMotorista");
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
