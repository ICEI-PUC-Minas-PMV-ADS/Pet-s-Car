//Thiago: desenvolvi as primeiras informações da tela Inicial com apoio do material das aulas de Desenvolvimento Mobile da PUC.
import { StyleSheet, View, Text } from "react-native";
import { ButtonCliente, ButtonMotorista } from "../../components/button";
import { LogoPetsCar } from "../../components/logo";

export function WelcomePage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <LogoPetsCar />
        <Text style={styles.subtitle}>
          <Text style={styles.spanSubtitle}>Segurança</Text> e
          <Text style={styles.spanSubtitle}> conforto</Text> para seu melhor
          amigo!
        </Text>
      </View>
      <View style={styles.container2}>
        <ButtonCliente
          title={"Sou Cliente"}
          onPress={() => {
            navigation.navigate("ClienteRouter");
          }}
        />
        <ButtonMotorista
          title={"Sou Motorista"}
          onPress={() => {
            navigation.navigate("MotoristaRouter");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  container1: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 35,
  },
  container2: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 35,
    paddingBottom: 100,
  },
  subtitle: {
    color: "#131313",
    fontSize: 18,
    marginTop: 40,
    fontFamily: "Raleway-400",
    textAlign: "center",
  },
  spanSubtitle: {
    color: "#4060FF",
    fontSize: 18,
    fontFamily: "Raleway-700",
  },
});
