import { View, StyleSheet, ScrollView } from 'react-native'
import { HeaderTitle } from '../../components/header'
import { InputForm } from '../../components/input'
import { ButtonPrimary } from '../../components/button'


export function CadastroMotorista({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView> 
        <HeaderTitle
          title="Cadastro"
          subtitle="Crie uma conta para acessar todos os recursos da Pet’s Car!"
        />
        <View style={styles.formContainer}>
          <InputForm label="Seu Nome" placeholder="Ex. Saul Ramirez" />
          <InputForm label="E-mail" placeholder="Ex: abc@example.com" />
          <InputForm label="Senha" placeholder="Ex: •••••••••••••" />
          <InputForm label="Telefone" placeholder="Ex: (99)99999-9999" />
        </View>
        <View style={styles.buttonCadastrar}> 
          <ButtonPrimary 
              title={'Cadastrar'}
              onPress={() => {
                navigation.navigate('LoginMotorista')
              }}
            />
        </View>
        
      </ScrollView>

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
  formContainer: { 
    paddingVertical: 45,
        
  },
  buttonCadastrar: {
    paddingBottom: 70,
  },

})
