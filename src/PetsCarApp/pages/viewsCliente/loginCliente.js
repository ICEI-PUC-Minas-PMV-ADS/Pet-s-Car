// João Jorges - Desenvolvi o ínicio da tela utilizando o material disponível na disciplina e com a ajuda do Thiago
import { StyleSheet, Text, View } from "react-native"

export function LoginCliente() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login de Cliente</Text>
      <Text style={styles.subtitle}>
        Insira seu e-mail e senha e faça seu agendamento!
      </Text>
    </View>
  )
}

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
