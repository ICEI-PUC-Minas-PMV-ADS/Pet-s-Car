import { StyleSheet, TouchableOpacity, Text, Image } from "react-native"

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }

export const ButtonPrimary = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={stylesButtonPrimary.appButtonContainer}
    >
      <Image source={icon} />
      <Text style={stylesButtonPrimary.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const stylesButtonPrimary = StyleSheet.create({
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
})

export const ButtonSecundary = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={stylesButtonSecundary.appButtonContainer}
    >
      <Image source={icon} />
      <Text style={stylesButtonSecundary.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const stylesButtonSecundary = StyleSheet.create({
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
})
