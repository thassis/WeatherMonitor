import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    backgroundColor: colors.white,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: "row",
  },
  body: {
    flex: 1
  },
  settingIcon: {
    marginLeft: 8
  },
  centerView: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 60
  },
  noCityImg: {
    width: "100%",
    height: "30%",
  },
  noCityTextTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: colors.black,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 24
  },
  noCityTextDescription: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  flexEnd: {
    width: '100%',
    alignItems: "flex-end"
  }
});

export default styles;