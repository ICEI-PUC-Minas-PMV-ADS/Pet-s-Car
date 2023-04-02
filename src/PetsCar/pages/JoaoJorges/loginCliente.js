// João Jorges - Desenvolvi o ínicio da tela utilizando o material disponível na disciplina e com a ajuda do Thiago
import { StyleSheet, Text } from 'react-native';

const LoginCliente = () => { 
    return (
        <>
        <Text style={styles.title}>Login de Cliente</Text>
        <Text style={styles.subtitle}>Insira seu e-mail e senha e faça seu agendamento!</Text>
        </>
    ) 
}

export default LoginCliente

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
