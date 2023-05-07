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

const selectPortePets = ["Pequeno", "Médio", "Grande"];
const selectTipoPets = ["Cachorro", "Gato", "Pássaro", "Hamsters", "Outro"];

export function CadastroCliente() {
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
          <InputForm label='Seu Nome' placeholder='Ex. Saul Ramirez' />
          <InputForm label='E-mail' placeholder='Ex: abc@example.com' />
          <InputForm label='Senha' placeholder='••••••••••' />
          <InputForm label='Telefone' placeholder='Ex:(99) 99999-9999' />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Endereço</Text>
            <Text style={styles.subtitleCity}>Alterosa-MG</Text>
          </View>
          <InputForm label='Bairro' placeholder='Ex: Centro' />
          <InputForm label='Logradouro' placeholder='Ex: Rua Alcides Terra' />
          <InputForm label='Número' placeholder='Ex: 2688' />
        </View>
        <View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Meu Pet</Text>
          </View>
          <InputForm label='Nome' placeholder='Ex: Bob' />
          <InputSelect label='Tipo' data={selectTipoPets} />
          <InputForm label='Raça' placeholder='Ex: Pinscher' />
          <InputSelect label='Porte' data={selectPortePets} />
          <ButtonAddPet title={"Adicionar Mais"} />
        </View>
        <View style={styles.button}>
          <ButtonPrimary title='Cadastrar' />
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
