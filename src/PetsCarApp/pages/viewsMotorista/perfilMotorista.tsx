//João Jorges: desenvolvi a tela de perfil cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconPerfil } from "../../components/icons";
import {
  ButtonDeslogar,
  ButtonEditar,
  ButtonExcluirConta,
  ButtonViewAvaliacao,
} from "../../components/button";

export function PerfilMotorista({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerTitle}>
          <View style={styles.iconTitle}>
            <IconPerfil color={"#4060FF"} />
            <Text style={styles.title}>Perfil</Text>
          </View>
          <ButtonEditar
            title={"Editar"}
            onPress={() => {
              navigation.navigate("EditarPerfilMotorista");
            }}
          />
        </View>

        <Text style={styles.name}>Marcos Ferreira</Text>
        <View style={styles.itens}>
          <View>
            <Text style={styles.itemTitle}>E-mail</Text>
            <Text style={styles.itemInfo}>marcos.ferreira@gmail.com</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Telefone</Text>
            <Text style={styles.itemInfo}>(35) 95655-5553</Text>
          </View>
        </View>

        <View style={styles.buttonsFooter}>
          <ButtonViewAvaliacao
            title='Visualizar Avaliações'
            onPress={() => {
              navigation.navigate("AvaliacaoMotorista");
            }}
          />
          <ButtonDeslogar title='Deslogar' />
          <ButtonExcluirConta title='Excluir Conta' />
        </View>
      </ScrollView>
    </View>
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
  containerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    paddingBottom: 30,
    justifyContent: "space-between",
    paddingTop: 40,
  },
  title: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    lineHeight: 25,
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
  iconTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  itens: {
    gap: 15,
  },
  itemTitle: {
    fontFamily: "Raleway-400",
    color: "#828282",
    fontSize: 14,
  },
  itemInfo: {
    fontFamily: "Raleway-400",
    color: "#131313",
    fontSize: 16,
  },
  name: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    paddingBottom: 10,
  },
  buttonsFooter: {
    paddingTop: 26,
    borderTopColor: "#F4F4F4",
    borderTopWidth: 1,
    marginTop: 40,
    paddingBottom: 200,
  },
});
