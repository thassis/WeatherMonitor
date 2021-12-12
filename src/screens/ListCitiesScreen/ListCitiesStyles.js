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
  }
});

export default styles;