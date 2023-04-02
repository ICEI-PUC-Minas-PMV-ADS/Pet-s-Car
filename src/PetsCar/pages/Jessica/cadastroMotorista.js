// Jéssica- desenvolvi com apoio do Thiago e do material
import { StyleSheet, Text } from 'react-native';

const CadastroMotorista = () => { 
    return (
        <>
        <Text styles={styles.title}> Cadastro </Text>
        <Text styles={styles.subtitle}> Crie uma conta para acessar todos os recursos da Pet’s Car! </Text>
        </>
    ) 
}

const styles = StyleSheet.create({
    title: {
      color: '#4060FF',
      fontSize: '32px',
      fontWeight: '700', 
    },

    subtitle: {
      color: '#131313',
      fontSize: '16px',
      fontWeight: '400', 

    }
  });