// João Jorges - Desenvolvi o ínicio da tela utilizando o material disponível na disciplina e com a ajuda do Thiago
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InputEmail, InputSenha } from '../../components/input'
import { ButtonPrimary } from '../../components/button'
import { HeaderTitle } from '../../components/header'

export function LoginCliente({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Login de Cliente"
        subtitle="Insira seu e-mail e senha e faça seu agendamento!"
      />
      <View style={styles.formLogin}>
        <InputEmail />
        <InputSenha />
        <TouchableOpacity style={styles.esqueceuSenha}>
          <Text style={styles.botaoSenha}>Esqueceu a Senha?</Text>
        </TouchableOpacity>
        <ButtonPrimary
          title={'Login'}
          onPress={() => {
            navigation.navigate('ClienteTabNavegation')
          }}
        />
      </View>
      <View style={styles.containerCadastrar}>
        <Text style={styles.textNaoConta}>Não tem uma conta?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CadastroCliente')
          }}
        >
          <Text style={styles.botaoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
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
  },
  formLogin: {
    paddingTop: 70,
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
    paddingBottom: 50
  },
  botaoSenha: {
    fontFamily: 'Raleway-500',
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#4060FF',
    width: '100%'
  },
  esqueceuSenha: {
    display: 'flex',
    marginBottom: 28
  },
  containerCadastrar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 28
  },
  botaoCadastrar: {
    fontFamily: 'Raleway-700',
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#4060FF',
    paddingLeft: 6
  },
  textNaoConta: {
    fontFamily: 'Raleway-400',
    fontSize: 16
  }
})
