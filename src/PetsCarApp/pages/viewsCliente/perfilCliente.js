//João Jorges: desenvolvi a tela de perfil cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconPerfil } from "../../components/icons";
import {
  ButtonDeslogar,
  ButtonEditar,
  ButtonExcluir,
  ButtonExcluirConta,
  ButtonViewAvaliacao,
} from "../../components/button";

export function PerfilCliente({ navigation }) {
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
              navigation.navigate("EditarPerfilCliente");
            }}
          />
        </View>

        <Text style={styles.name}>Thiago Terra da Silva</Text>
        <View style={styles.itens}>
          <View>
            <Text style={styles.itemTitle}>E-mail</Text>
            <Text style={styles.itemInfo}>thiago.terra@gmail.com</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Telefone</Text>
            <Text style={styles.itemInfo}>(35) 95655-5553</Text>
          </View>
        </View>

        <View style={styles.containerSubtitle}>
          <Text style={styles.subtitle}>Endereço</Text>
        </View>

        <View style={styles.itens}>
          <View>
            <Text style={styles.itemTitle}>Cidade</Text>
            <Text style={styles.itemInfo}>Alterosa - MG</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Logradouro</Text>
            <Text style={styles.itemInfo}>Rua Donatello Paccini - 365</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>Bairro</Text>
            <Text style={styles.itemInfo}>Centro</Text>
          </View>
        </View>

        <View style={styles.buttonsFooter}>
          <ButtonViewAvaliacao
            title="Vizualizar Avaliações Recebidas"
            onPress={() => {
              navigation.navigate("AvaliacaoCliente");
            }}
          />
          <ButtonDeslogar title="Deslogar" />
          <ButtonExcluirConta title="Excluir Conta" />
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
