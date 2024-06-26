import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { IconLupa } from "./icons";

type CardAgendaModel = {
  styleCard: any;
  pet: string;
  data: string;
  hora: string;
  status: string;
  onPressDetalhes: (event: GestureResponderEvent) => void;
};

export const CardAgenda = ({
  styleCard,
  pet,
  data,
  hora,
  status,
  onPressDetalhes,
}: CardAgendaModel) => {
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

type CardPetsModel = {
  nome: string;
  raca: string;
  tipo: string;
  onPressDetalhes: (event: GestureResponderEvent) => void;
};

export const CardPets = ({
  tipo,
  raca,
  nome,
  onPressDetalhes,
}: CardPetsModel) => {
  return (
    <TouchableOpacity onPress={onPressDetalhes}>
      <View style={styles.cardPets}>
        <View>
          <Text style={styles.nomePet}>{nome}</Text>
          <View style={styles.cardText}>
            <Text style={styles.textStrong}>Tipo:</Text>
            <Text style={styles.textInfo}>{tipo}</Text>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.textStrong}>Raça:</Text>
            <Text style={styles.textInfo}>{raca}</Text>
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

type CardAvaliacaoModel = {
  nome: string;
  avaliacao: string;
};

export const CardAvaliacao = ({ nome, avaliacao }: CardAvaliacaoModel) => {
  return (
    <View style={styles.cardAvaliacao}>
      <Text style={styles.nomeAvaliacao}>{nome}</Text>
      <Text style={styles.avaliacao}>{avaliacao}</Text>
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
  cardAvaliacao: {
    width: "100%",
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  nomeAvaliacao: {
    fontFamily: "Raleway-700",
    fontSize: 20,
    color: "#4060FF",
    paddingBottom: 8,
  },
  avaliacao: {
    fontFamily: "Raleway-500",
    fontSize: 14,
    color: "#131313",
  },
  cardPets: {
    backgroundColor: "#F4F4F4",
    marginBottom: 15,
    borderRadius: 10,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nomePet: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    lineHeight: 20,
    paddingBottom: 5,
  },
});
