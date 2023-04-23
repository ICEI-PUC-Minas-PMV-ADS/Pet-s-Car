import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { IconCliente, IconEditar, IconMais, IconMotorista } from "./icons";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const ButtonCliente = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={stylesButtonCliente.appButtonContainer}
    >
      <IconCliente color={"#FFFFFF"} />
      <Text style={stylesButtonCliente.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ButtonPrimary = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={stylesButtonCliente.appButtonContainer}
    >
      <Text style={stylesButtonCliente.appButtonPrimaryText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ButtonExcluir = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={stylesButtonCliente.appButtonExcluirContainer}
    >
      <Text style={stylesButtonCliente.appButtonExcluirText}>{title}</Text>
    </TouchableOpacity>
  );
};

const stylesButtonCliente = StyleSheet.create({
  appButtonContainer: {
    marginTop: 11,
    backgroundColor: "#4060FF",
    borderRadius: 16,
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  appButtonText: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 16,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Raleway-700",
  },
  appButtonPrimaryText: {
    fontSize: 16,
    lineHeight: 16,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Raleway-700",
  },
  appButtonExcluirContainer: {
    marginTop: 11,
    backgroundColor: "#FFE4E4",
    borderRadius: 16,
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  appButtonExcluirText: {
    fontSize: 16,
    lineHeight: 16,
    color: "#DA3D3D",
    alignSelf: "center",
    fontFamily: "Raleway-700",
  },
});

export const ButtonMotorista = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={stylesButtonMotorista.appButtonContainer}
    >
      <IconMotorista color={"#4060FF"} />
      <Text style={stylesButtonMotorista.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const stylesButtonMotorista = StyleSheet.create({
  appButtonContainer: {
    marginTop: 11,
    backgroundColor: "#EBEEFF",
    borderRadius: 16,
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  appButtonText: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 16,
    color: "#4060FF",
    alignSelf: "center",
    fontFamily: "Raleway-700",
  },
});

export const ButtonHeaderAdd = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={stylesButtonHeaderAdd.appButtonContainer}
      >
        <Text style={stylesButtonHeaderAdd.appButtonText}>{title}</Text>
        <IconMais color={"#FFF"} />
      </TouchableOpacity>
    </View>
  );
};

const stylesButtonHeaderAdd = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    padding: 12,
  },
  appButtonText: {
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16,
    color: "#FFFFFF",
    alignSelf: "center",
    fontFamily: "Raleway-500",
  },
});

export const ButtonHeaderEditar = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={stylesButtonHeaderEdit.appButtonContainer}
      >
        <Text style={stylesButtonHeaderEdit.appButtonText}>{title}</Text>
        <IconEditar color={"#FFF"} />
      </TouchableOpacity>
    </View>
  );
};

const stylesButtonHeaderEdit = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 15,
  },
  appButtonText: {
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16,
    color: "#FFFFFF",
    alignSelf: "center",
    fontFamily: "Raleway-500",
  },
});
