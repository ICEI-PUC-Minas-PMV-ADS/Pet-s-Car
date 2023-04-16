//Mariano: Desenvolvido o a tela de login do aplicativo e a mensagem com as informações para o login.
//Feito com o auxílio das aulas da PUC e com o conhecimento prévio em front-end do Thiago.
import { Text, StyleSheet, View } from "react-native"

export function LoginMotorista() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login de Motorista</Text>
      <Text style={styles.subTitle}>
        Insira seu e-mail e senha para logar e realizar diversas corridas!
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
  subTitle: {
    color: "#131313",
    fontSize: 16,
    fontWeight: 400,
  },
})
