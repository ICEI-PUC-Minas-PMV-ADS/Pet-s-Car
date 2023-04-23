import { TextInput, StyleSheet, View, Text } from "react-native";
import { IconEmail, IconSenha } from "./icons";

export const InputEmail = (props) => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.label}>
        <IconEmail color={"#4060FF"} />
        <Text style={styles.textLabel}>E-mail</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Ex: abc@example.com'
        placeholderTextColor={"#CDCDCC"}
        onChangeText={props.onChange}
      />
    </View>
  );
};

export const InputSenha = (props) => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.label}>
        <IconSenha color={"#4060FF"} />
        <Text style={styles.textLabel}>Senha</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='•••••••••••••'
        placeholderTextColor={"#CDCDCC"}
        onChangeText={props.onChange}
      />
    </View>
  );
};

export const InputForm = (props) => {
  return (
    <View style={styles.containerInputForm}>
      <View style={styles.label}>
        <Text style={styles.textLabelForm}>{props.label}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={"#CDCDCC"}
        onChangeText={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderWidth: 1.5,
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 16,
    borderColor: "#4060FF",
    fontFamily: "Raleway-400",
    fontSize: 16,
  },
  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textLabel: {
    paddingLeft: 10,
    fontFamily: "Raleway-400",
    fontSize: 16,
    color: "#131313",
  },
  containerInput: {
    marginVertical: 14,
  },
  textLabelForm: {
    fontFamily: "Raleway-400",
    fontSize: 16,
    color: "#131313",
  },
  containerInputForm: {
    marginVertical: 8,
  },
});
