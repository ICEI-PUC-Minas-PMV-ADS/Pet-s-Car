import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './pages/Mariano/welcomePage';
import LoginCliente from './pages/JoaoJorges/loginCliente';


export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage/>
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
