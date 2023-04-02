//Thiago: desenvolvi as primeiras informações da tela Inicial com apoio do material das aulas de Desenvolvimento Mobile da PUC.

import { Image, StyleSheet, Text } from "react-native"

const TelaInicial = () => {
  return (
    <>
      <Image source={require("assets/logo-petscar.png")} />
      <Text style={styles.subtitle}>
        <Text style={styles.spanSubtitle}>Segurança</Text> e
        <Text style={styles.spanSubtitle}> conforto</Text> para seu melhor
        amigo!
      </Text>
    </>
  )
}

export default TelaInicial

const styles = StyleSheet.create({
  subtitle: {
    color: "#131313",
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "40px",
  },
  spanSubtitle: {
    color: "#4060FF",
    fontSize: "18px",
    fontWeight: "700",
  },
})
