import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.secondaryBlue,
    marginVertical: 16,
    borderRadius: 40,
    alignItems: "center",
    paddingHorizontal: 16
  },
  searchText: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    backgroundColor: colors.secondaryBlue,
    padding: 8,
    flex: 1
  },
  filterIcon: {
    marginLeft: 16
  },
});

export default styles;