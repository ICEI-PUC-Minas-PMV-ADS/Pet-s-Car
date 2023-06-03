import {
  TextInput,
  StyleSheet,
  View,
  Text,
  KeyboardTypeOptions,
  InputModeOptions,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import {
  IconCalendario,
  IconDropdown,
  IconEmail,
  IconHora,
  IconSenha,
} from "./icons";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

type InputDataModel = {
  mensagemError?: string;
  onPress: (event: GestureResponderEvent) => void;
  value: any;
  mode: any;
  onChange: any;
  showModal: any;
};

export const InputData = ({
  mensagemError,
  onPress,
  value,
  mode,
  onChange,
  showModal,
}: InputDataModel) => {
  return (
    <View style={styles.containerInputForm}>
      <View style={styles.label}>
        <Text style={styles.textLabelForm}>Data*</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.inputDataHora}>
        <Text style={styles.textDataHora}>{value.toLocaleDateString()}</Text>
        <IconCalendario color='#4060FF' />
        {showModal && (
          <DateTimePicker
            testID='dateTimePicker'
            value={value}
            mode={mode}
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
      {mensagemError ? (
        <View style={styles.label}>
          <Text style={styles.errorLabelForm}>{mensagemError}</Text>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export const InputHora = ({
  mensagemError,
  onPress,
  value,
  mode,
  onChange,
  showModal,
}: InputDataModel) => {
  return (
    <View style={styles.containerInputForm}>
      <View style={styles.label}>
        <Text style={styles.textLabelForm}>Hora*</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.inputDataHora}>
        <Text style={styles.textDataHora}>
          {value.toLocaleTimeString().substring(0, 5)}
        </Text>
        <IconHora color='#4060FF' />
        {showModal && (
          <DateTimePicker
            testID='dateTimePicker'
            value={value}
            mode={mode}
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
      {mensagemError ? (
        <View style={styles.label}>
          <Text style={styles.errorLabelForm}>{mensagemError}</Text>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

type InputLoginModel = {
  onChange: (text: string) => void;
  mensagemError?: string;
};

export const InputEmail = ({ onChange, mensagemError }: InputLoginModel) => {
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
      {mensagemError ? (
        <View style={styles.label}>
          <Text style={styles.errorLabelForm}>{mensagemError}</Text>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export const InputSenha = ({ onChange, mensagemError }: InputLoginModel) => {
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
      {mensagemError ? (
        <View style={styles.label}>
          <Text style={styles.errorLabelForm}>{mensagemError}</Text>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

type InputFormModel = {
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  inputMode?: InputModeOptions;
  maxLength?: number;
  defaultValue?: string;
  mensagemError?: string;
  secureTextEntry?: boolean;
  value?: string;
};

export const InputForm = ({
  label,
  placeholder,
  onChange,
  keyboardType,
  inputMode,
  maxLength,
  defaultValue,
  mensagemError,
  secureTextEntry,
  value,
}: InputFormModel) => {
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
        defaultValue={defaultValue}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {mensagemError ? (
        <View style={styles.label}>
          <Text style={styles.errorLabelForm}>{mensagemError}</Text>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

type InputSelectModel = {
  data: any;
  label?: string;
  onChange: any;
  defaultValue?: string;
  defaultValueByIndex?: number;
  mensagemError?: string;
};

export const InputSelect = ({
  data,
  label,
  onChange,
  defaultValue,
  defaultValueByIndex,
  mensagemError,
}: InputSelectModel) => {
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
        defaultValue={defaultValue}
        defaultValueByIndex={defaultValueByIndex}
      />
      {mensagemError ? (
        <View style={styles.label}>
          <Text style={styles.errorLabelForm}>{mensagemError}</Text>
        </View>
      ) : (
        ""
      )}
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
  inputDataHora: {
    height: 56,
    borderWidth: 1.5,
    marginTop: 8,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderColor: "#4060FF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textDataHora: {
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
  errorLabelForm: {
    fontFamily: "Raleway-400",
    fontSize: 14,
    color: "#ff4040",
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
