import {
  GestureResponderEvent,
  Modal,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ModalPerguntaModel = {
  visible: boolean;
  onRequestClose: (event: NativeSyntheticEvent<any>) => void;
  onPressSim: (event: GestureResponderEvent) => void;
  onPressNao: (event: GestureResponderEvent) => void;
  title: string;
};

export const ModalPergunta = ({
  visible,
  onRequestClose,
  onPressSim,
  onPressNao,
  title,
}: ModalPerguntaModel) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modelContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonSim}
              onPress={onPressSim}
            >
              <Text style={styles.buttonSimText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonNao}
              onPress={onPressNao}
            >
              <Text style={styles.buttonNaoText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#4060FF",
    borderRadius: 16,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "75%",
  },
  modalText: {
    fontFamily: "Raleway-700",
    color: "#FFF",
    fontSize: 18,
    marginBottom: 18,
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  buttonSim: {
    backgroundColor: "#2B43BE",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 16,
  },
  buttonNao: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 16,
  },
  buttonSimText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Raleway-700",
    fontSize: 16,
  },
  buttonNaoText: {
    color: "#4060FF",
    textAlign: "center",
    fontFamily: "Raleway-700",
    fontSize: 16,
  },
});
