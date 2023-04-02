//Mariano: Desenvolvido o a tela de login do aplicativo e a mensagem com as informações para o login
import { Text } from 'react-native';


const LoginMotorista = ()=>{
    return(
        
        <>
        <Text style={styles.title}>Login de Motorista</Text>
        <Text style={styles.subTitle}>Insira seu e-mail e senha para logar e realizar diversas corridas!</Text>
        </>
    )
}

export default LoginMotorista

const styles = StyleSheet.create({
    title:{
        color: "#4060FF",
        fontSize: "32px",
        fontWeight: "700",
    },
    subTitle:{
        color: "#131313",
        fontSize: "16px",
        fontWeight: "400",
    }
  });