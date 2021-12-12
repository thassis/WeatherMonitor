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
  cancelIcon: {
    marginLeft: 8
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginLeft: 16,
  },
  white: {
    backgroundColor: colors.white
  },
  suggestedCity: {
    marginVertical: 16,
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  suggestedText: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    marginLeft: 8
  }
});

export default styles;