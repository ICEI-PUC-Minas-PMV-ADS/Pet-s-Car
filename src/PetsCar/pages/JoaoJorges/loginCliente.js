// João Jorges - Desenvolvi o ínicio da tela utilizando o material disponível na disciplina e com a ajuda do Thiago
import { StyleSheet, Text } from 'react-native';

const LoginCliente = () => { 
    return (
        <>
        <Text styles={styles.title}>Login de Cliente</Text>
        <Text styles={styles.subtitle}>Insira seu e-mail e senha e faça seu agendamento!</Text>
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