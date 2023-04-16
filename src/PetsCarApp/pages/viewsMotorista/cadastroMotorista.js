// Jéssica- desenvolvi com apoio do Thiago e do material
import { StyleSheet, Text, View } from "react-native"

const CadastroMotorista = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Cadastro </Text>
      <Text style={styles.subtitle}>
        {" "}
        Crie uma conta para acessar todos os recursos da Pet’s Car!{" "}
      </Text>
    </View>
  )
}

export default CadastroMotorista

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  title: {
    color: "#4060FF",
    fontSize: 32,
    fontWeight: 700,
  },

  subtitle: {
    color: "#131313",
    fontSize: 16,
    fontWeight: 400,
  },
})
