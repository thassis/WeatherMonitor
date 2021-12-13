import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBlue,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    position: "absolute",
  },
  textTitle: {
    fontSize: 24,
    fontFamily: "Roboto-Medium",
    color: colors.black,
    top: 100
  },
});

export default styles;