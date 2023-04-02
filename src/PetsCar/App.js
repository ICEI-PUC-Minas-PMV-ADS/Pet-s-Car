import { StyleSheet, View } from "react-native"
import TelaInicial from "./pages/Thiago/telaInicial"

export default function App() {
  return (
    <View style={styles.container}>
      <TelaInicial />
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
})
