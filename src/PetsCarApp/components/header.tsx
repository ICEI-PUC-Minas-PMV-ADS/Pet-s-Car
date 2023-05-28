import { StyleSheet, View, Text } from "react-native";

export const HeaderTitle = ({ title, subtitle }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 35,
  },
  title: {
    color: "#4060FF",
    fontSize: 32,
    fontFamily: "Raleway-700",
    paddingBottom: 19,
  },
  subtitle: {
    color: "#131313",
    fontSize: 16,
    fontFamily: "Raleway-400",
  },
});
