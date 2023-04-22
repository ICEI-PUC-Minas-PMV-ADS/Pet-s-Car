import { StyleSheet, View, Text } from "react-native";

export function AgendaCliente() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.textStrong}>Pet:</Text>
          <Text style={styles.textInfo}>Jack</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.textStrong}>Data:</Text>
          <Text style={styles.textInfo}>15/07/2023</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.textStrong}>Hora:</Text>
          <Text style={styles.textInfo}>15:00</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.textStrong}>Status:</Text>
          <Text style={styles.textInfo}>Pendente</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#F4F4F4",
    marginHorizontal: 18,
    marginVertical: 15,
    borderRadius: 10,
    borderLeftColor: "#4060FF",
    borderLeftWidth: 6,
    padding: 15,
  },
  cardText: {
    fontSize: 14,
    color: "#131313",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  textStrong: {
    fontFamily: "Raleway-700",
    marginRight: 5,
  },
  textInfo: {
    fontFamily: "Raleway-500",
  },
});
