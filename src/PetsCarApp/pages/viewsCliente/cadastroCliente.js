import { View, StyleSheet } from 'react-native'
import { HeaderTitle } from '../../components/header'
import { InputForm } from '../../components/input'

export function CadastroCliente() {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Cadastro"
        subtitle="Crie uma conta para acessar todos os recursos da Pet’s Car!"
      />
      <View>
        <InputForm label="Seu Nome" placeholder="Ex. Saul Ramirez" />
        <InputForm label="E-mail" placeholder="Ex: abc@example.com" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 35
  }
})
