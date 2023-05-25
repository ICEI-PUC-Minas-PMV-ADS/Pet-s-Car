import { TextInput, StyleSheet, View, Text } from "react-native";
import { IconDropdown, IconEmail, IconSenha } from "./icons";
import SelectDropdown from "react-native-select-dropdown";

export const InputEmail = ({ onChange }) => {
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
        onChangeText={onChange}
        inputMode='email'
      />
    </View>
  );
};

export const InputSenha = ({ onChange }) => {
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
        onChangeText={onChange}
        secureTextEntry={true}
      />
    </View>
  );
};

export const InputForm = ({
  label,
  placeholder,
  onChange,
  keyboardType,
  inputMode,
  maxLength,
}) => {
  return (
    <View style={styles.containerInputForm}>
      <View style={styles.label}>
        <Text style={styles.textLabelForm}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#CDCDCC"}
        onChangeText={onChange}
        keyboardType={keyboardType}
        inputMode={inputMode}
        maxLength={maxLength}
      />
    </View>
  );
};

export const InputSelect = ({ data, label, onChange }) => {
  return (
    <View style={styles.containerInputForm}>
      <View style={styles.label}>
        <Text style={styles.textLabelForm}>{label}</Text>
      </View>
      <SelectDropdown
        defaultButtonText='Selecionar'
        data={data}
        buttonStyle={styles.selectButton}
        buttonTextStyle={styles.selectButtonText}
        rowTextStyle={styles.selectButtonRow}
        dropdownIconPosition='right'
        dropdownStyle={styles.selectDropdown}
        renderDropdownIcon={() => <IconDropdown />}
        onSelect={onChange}
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
  selectButton: {
    marginVertical: 8,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#4060FF",
    borderRadius: 16,
    height: 56,
    textAlign: "left",
  },
  selectButtonText: {
    fontFamily: "Raleway-500",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "left",
    color: "#000000",
  },
  selectButtonRow: {
    textAlign: "left",
    fontFamily: "Raleway-500",
    fontSize: 16,
  },
  selectDropdown: {
    borderRadius: 12,
    paddingHorizontal: 20,
  },
});
