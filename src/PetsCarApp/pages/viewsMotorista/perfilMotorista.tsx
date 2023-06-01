//João Jorges: desenvolvi a tela de perfil cliente com apoio do material das aulas de Desenvolvimento Mobile da PUC e do Thiago.
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IconPerfil } from "../../components/icons";
import {
  ButtonDeslogar,
  ButtonEditar,
  ButtonExcluirConta,
  ButtonViewAvaliacao,
} from "../../components/button";
import { useEffect, useState } from "react";
import { Motorista } from "../../interfaces/interface_motorista";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseInit";
import { deleteUser } from "firebase/auth";
import { ModalPergunta, ModalSucesso } from "../../components/modal";

export function PerfilMotorista({ navigation, route }: any) {
  const idMotorista = route.params.idMotorista;

  const [loading, setLoading] = useState(false);
  const [modalDeslogar, setModalDeslogar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [modalSucessoExcluir, setModalSucessoExcluir] = useState(false);
  const [dataMotorista, setDataMotorista] = useState<Motorista>({
    idUser: "",
    nome: "",
    email: "",
    telefone: "",
    userType: "",
  });

  useEffect(() => {
    navigation.addListener("focus", async () => {
      setLoading(true);
      const motoristaRef = await doc(db, "motoristas", idMotorista);

      await getDoc(motoristaRef).then((res: any) => {
        setLoading(false);
        setDataMotorista(res.data());
      });
    });
  }, []);

  const Deslogar = () => {
    auth.signOut().then(() => {
      navigation.navigate("WelcomePage");
    });
  };

  const ExcluirConta = () => {
    if (auth.currentUser) {
      deleteUser(auth.currentUser);
      setModalExcluir(false);
      setModalSucessoExcluir(true);
      setTimeout(() => {
        setModalSucessoExcluir(false);
        navigation.navigate("WelcomePage");
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      {loading == true ? (
        <View style={styles.loading}>
          <ActivityIndicator animating={loading} size={50} color='#4060FF' />
        </View>
      ) : (
        <ScrollView style={styles.containerScroll}>
          <View style={styles.containerTitle}>
            <View style={styles.iconTitle}>
              <IconPerfil color={"#4060FF"} />
              <Text style={styles.title}>Perfil</Text>
            </View>
            <ButtonEditar
              title={"Editar"}
              onPress={() => {
                navigation.navigate({
                  name: "EditarPerfilMotorista",
                  params: { dataMotorista: dataMotorista },
                  merge: true,
                });
              }}
            />
          </View>

          <Text style={styles.name}>{dataMotorista.nome}</Text>
          <View style={styles.itens}>
            <View>
              <Text style={styles.itemTitle}>E-mail</Text>
              <Text style={styles.itemInfo}>{dataMotorista.email}</Text>
            </View>
            <View>
              <Text style={styles.itemTitle}>Telefone</Text>
              <Text style={styles.itemInfo}>{dataMotorista.telefone}</Text>
            </View>
          </View>

          <View style={styles.buttonsFooter}>
            <ButtonViewAvaliacao
              title='Visualizar Avaliações'
              onPress={() => {
                navigation.navigate("AvaliacaoMotorista", {
                  idMotorista: idMotorista,
                });
              }}
            />
            <ButtonDeslogar
              title='Deslogar'
              onPress={() => setModalDeslogar(true)}
            />
            <ModalPergunta
              title='Deseja mesmo deslogar?'
              onPressSim={() => Deslogar()}
              onPressNao={() => setModalDeslogar(!modalDeslogar)}
              visible={modalDeslogar}
              onRequestClose={() => {
                setModalDeslogar(!modalDeslogar);
              }}
            />
            <ButtonExcluirConta
              title='Excluir Conta'
              onPress={() => setModalExcluir(true)}
            />
            <ModalPergunta
              title='Deseja mesmo excluir sua conta?'
              onPressSim={() => ExcluirConta()}
              onPressNao={() => setModalExcluir(!modalExcluir)}
              visible={modalExcluir}
              onRequestClose={() => {
                setModalExcluir(!modalExcluir);
              }}
            />
            <ModalSucesso
              title='Sucesso! Conta excluída.'
              visible={modalSucessoExcluir}
              onRequestClose={() => {
                setModalSucessoExcluir(!modalSucessoExcluir);
              }}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  containerScroll: {
    paddingHorizontal: 35,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    paddingBottom: 30,
    justifyContent: "space-between",
    paddingTop: 40,
  },
  title: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    lineHeight: 25,
  },
  containerSubtitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 25,
    paddingBottom: 5,
  },
  subtitle: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
  },
  iconTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  itens: {
    gap: 15,
  },
  itemTitle: {
    fontFamily: "Raleway-400",
    color: "#828282",
    fontSize: 14,
  },
  itemInfo: {
    fontFamily: "Raleway-400",
    color: "#131313",
    fontSize: 16,
  },
  name: {
    fontFamily: "Raleway-700",
    color: "#4060FF",
    fontSize: 20,
    paddingBottom: 10,
  },
  buttonsFooter: {
    paddingTop: 26,
    borderTopColor: "#F4F4F4",
    borderTopWidth: 1,
    marginTop: 40,
    paddingBottom: 200,
  },
});
