import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { ButtonPrimary } from "../../../components/button";

export function AvaliacaoAgendaMotorista() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <Text style={styles.motorista}>
          <Text style={styles.motoristaBold}>Motorista:</Text> Thiago Terra
        </Text>
        <Text style={styles.motorista}>O que achou do cliente e seu pet?</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={10}
          textAlignVertical='top'
          placeholder='Ex: O cliente foi muito atencioso e seu pet muito calmo.'
        />
        <ButtonPrimary title={"Concluir"} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  containerScroll: {
    paddingHorizontal: 35,
    paddingTop: 35,
  },
  motoristaBold: {
    color: "#4060FF",
    fontFamily: "Raleway-700",
  },
  motorista: {
    fontSize: 16,
    color: "#131313",
    fontFamily: "Raleway-400",
    paddingBottom: 15,
  },
  input: {
    borderWidth: 1.5,
    marginTop: 8,
    marginBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 16,
    borderColor: "#4060FF",
    fontFamily: "Raleway-400",
    fontSize: 16,
  },
});