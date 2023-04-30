import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
  IconAdd,
  IconAvaliacao,
  IconCliente,
  IconEditar,
  IconMais,
  IconMotorista,
} from "./icons";

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

export const ButtonAdd = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={stylesButtonAdd.buttonAdd}
    >
      <IconAdd color={"#FFF"} />
    </TouchableOpacity>
  );
};

export const ButtonEditar = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={stylesButtonEdit.appButtonContainer}
      >
        <Text style={stylesButtonEdit.appButtonText}>{title}</Text>
        <IconEditar color={"#4060FF"} />
      </TouchableOpacity>
    </View>
  );
};

export const ButtonAvaliar = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={stylesButtonEdit.appButtonContainer}
      >
        <Text style={stylesButtonEdit.appButtonText}>{title}</Text>
        <IconAvaliacao color={"#4060FF"} />
      </TouchableOpacity>
    </View>
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

const stylesButtonAdd = StyleSheet.create({
  buttonAdd: {
    position: "absolute",
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 120,
    backgroundColor: "#4060FF",
    borderRadius: 100,
  },
});

const stylesButtonEdit = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 15,
    borderColor: "#4060FF",
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 13,
  },
  appButtonText: {
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16,
    color: "#4060FF",
    alignSelf: "center",
    fontFamily: "Raleway-600",
  },
});
