import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { IconCliente, IconMais, IconMotorista } from "./icons";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const ButtonCliente = ({ onPress, title, icon }) => {
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
    <TouchableOpacity
      onPress={onPress}
      style={stylesButtonHeaderAdd.appButtonContainer}
    >
      <Text style={stylesButtonHeaderAdd.appButtonText}>{title}</Text>
      <IconMais color={"#FFF"} />
    </TouchableOpacity>
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
