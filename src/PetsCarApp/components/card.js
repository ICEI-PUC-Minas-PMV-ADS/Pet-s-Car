import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { IconExcluir, IconLupa } from "./icons";

export const CardAgenda = (props) => {
  return (
    <View style={props.styleCard}>
      <View>
        <View style={styles.cardText}>
          <Text style={styles.textStrong}>Pet:</Text>
          <Text style={styles.textInfo}>{props.pet}</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.textStrong}>Data:</Text>
          <Text style={styles.textInfo}>{props.data}</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.textStrong}>Hora:</Text>
          <Text style={styles.textInfo}>{props.hora}</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.textStrong}>Status:</Text>
          <Text style={styles.textInfo}>{props.status}</Text>
        </View>
      </View>
      <View style={styles.optionsCard}>
        {props.status == "Pendente" ? (
          <TouchableOpacity onPress={props.onPressExcluir}>
            <IconExcluir color={"#4060FF"} />
          </TouchableOpacity>
        ) : (
          ""
        )}
        <TouchableOpacity
          style={styles.detalhesCard}
          onPress={props.onPressDetalhes}
        >
          <IconLupa color={"#4060FF"} />
          <Text style={styles.detalhesTextCard}>Ver detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
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
