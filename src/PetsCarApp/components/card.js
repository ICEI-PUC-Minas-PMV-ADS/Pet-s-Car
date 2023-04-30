import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { IconExcluir, IconLupa } from "./icons";

export const CardAgenda = ({
  styleCard,
  pet,
  data,
  hora,
  status,
  onPressDetalhes,
}) => {
  return (
    <TouchableOpacity onPress={onPressDetalhes}>
      <View style={styleCard}>
        <View>
          <View style={styles.cardText}>
            <Text style={styles.textStrong}>Pet:</Text>
            <Text style={styles.textInfo}>{pet}</Text>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.textStrong}>Data:</Text>
            <Text style={styles.textInfo}>{data}</Text>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.textStrong}>Hora:</Text>
            <Text style={styles.textInfo}>{hora}</Text>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.textStrong}>Status:</Text>
            <Text style={styles.textInfo}>{status}</Text>
          </View>
        </View>
        <View style={styles.optionsCard}>
          <View style={styles.detalhesCard}>
            <IconLupa color={"#4060FF"} />
            <Text style={styles.detalhesTextCard}>Ver detalhes</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F4F4F4",
    marginHorizontal: 18,
    marginVertical: 15,
    borderRadius: 10,
    borderLeftColor: "#4060FF",
    borderLeftWidth: 6,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 14,
    color: "#131313",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 1,
  },
  textStrong: {
    fontFamily: "Raleway-700",
    marginRight: 5,
  },
  textInfo: {
    fontFamily: "Raleway-500",
  },
  optionsCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  detalhesCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    gap: 8,
  },
  detalhesTextCard: {
    fontFamily: "Raleway-500",
    color: "#4060FF",
    fontSize: 12,
  },
});
