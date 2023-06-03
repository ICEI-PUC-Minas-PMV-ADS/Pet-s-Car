//Jéssica: desenvolvi a tela de cadastro de motorista com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import { HeaderTitle } from "../../components/header";
import { InputForm } from "../../components/input";
import { ButtonPrimary } from "../../components/button";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseInit";
import { doc, setDoc } from "firebase/firestore";
import { regexTelefone } from "../../utils/Regex";
import { isValidEmail, isValidNome } from "../../utils/Validacao";
import { ModalSucesso } from "../../components/modal";

export function CadastroMotorista({ navigation }: any) {
  const [modalSucesso, setModalSucesso] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");

  const EnvioForm = () => {
    const erros: { field: string; message: string }[] = [];

    setErrors([]);

    if (!nome)
      erros.push({ field: "nome", message: "Preencha o campo Seu Nome" });
    if (!email)
      erros.push({ field: "email", message: "Preencha o campo E-mail" });
    if (!senha)
      erros.push({ field: "senha", message: "Preencha o campo Senha" });
    if (!telefone)
      erros.push({ field: "telefone", message: "Preencha o campo Telefone" });
    if (nome && isValidNome(nome) == false)
      erros.push({ field: "nome", message: "Preencha com nome e sobrenome" });
    if (email && isValidEmail(email) == false)
      erros.push({ field: "email", message: "E-mail incorreto" });

    if (erros.length > 0) {
      return setErrors(erros);
    } else {
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
          setModalSucesso(true);
          setTimeout(() => {
            setModalSucesso(false);
            navigation.navigate("MotoristaNavigation", {
              idMotorista: userID,
            });
          }, 1800);
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            erros.push({
              field: "email",
              message: "Existe um usuário com o mesmo e-mail",
            });
          }
          if (error.code == "auth/weak-password") {
            erros.push({
              field: "senha",
              message: "A senha deve ter no mínimo 6 caracteres",
            });
          }
          if (erros.length > 0) {
            return setErrors(erros);
          }
        });
    }
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
            label='Seu Nome*'
            placeholder='Ex. Saul Ramirez'
            onChange={(e: any) => setNome(e)}
            mensagemError={errors.find((e) => e.field === "nome")?.message}
          />
          <InputForm
            label='E-mail*'
            placeholder='Ex: abc@example.com'
            inputMode={"email"}
            onChange={(e: any) => setEmail(e)}
            mensagemError={errors.find((e) => e.field === "email")?.message}
          />
          <InputForm
            label='Senha*'
            placeholder='Ex: •••••••••••••'
            onChange={(e: any) => setSenha(e)}
            mensagemError={errors.find((e) => e.field === "senha")?.message}
            secureTextEntry={true}
          />
          <InputForm
            label='Telefone*'
            placeholder='Ex: (99)99999-9999'
            value={telefone}
            maxLength={15}
            onChange={(e) => setTelefone(regexTelefone(e))}
            inputMode='tel'
            mensagemError={errors.find((e) => e.field === "telefone")?.message}
          />
        </View>
        <View style={styles.buttonCadastrar}>
          {errors.length > 0 ? (
            <View style={styles.errorForm}>
              <Text style={styles.errorTextForm}>
                Algum campo está incorreto ou vazio.
              </Text>
            </View>
          ) : (
            ""
          )}
          <ButtonPrimary
            title={"Cadastrar"}
            onPress={() => {
              EnvioForm();
            }}
          />
        </View>
        <ModalSucesso
          title='Sucesso! Novo usuário cadastrado.'
          visible={modalSucesso}
          onRequestClose={() => {
            setModalSucesso(!modalSucesso);
          }}
        />
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
