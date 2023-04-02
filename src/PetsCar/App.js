import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginMotorista from './pages/Mariano/loginMotorista';
import LoginCliente from './pages/JoaoJorges/loginCliente';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginMotorista/>
      <LoginCliente/>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
