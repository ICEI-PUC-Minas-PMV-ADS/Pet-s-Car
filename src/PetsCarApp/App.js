//Thiago: desenvolvi as primeiras informações da tela Inicial com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import { StyleSheet, View, Text, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} />
      <Text style={styles.subtitle}>
        <Text style={styles.spanSubtitle}>Segurança</Text> e
        <Text style={styles.spanSubtitle}> conforto</Text> para seu melhor
        amigo!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    color: "#131313",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 40,
  },
  spanSubtitle: {
    color: "#4060FF",
    fontSize: 18,
    fontWeight: 700,
  },
})
