import { StyleSheet } from "react-native";
import colors from "../../../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 0.1
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cityTitle: {
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    color: colors.black,
  },
  countryTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  left: {
    flex: 1
  },
  right: {
    alignItems: "center",
    justifyContent: "center",
  },
  tempText: {
    fontFamily: "Roboto-Regular",
    fontSize: 24,
    color: colors.black
  },
  weatherIcon: {
    width: 30,
    height: 30,
    marginTop: 8
  },
  weatherCondition: {
    flexDirection: "row",
    alignItems: "center",
  },
  textDescription: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: colors.black,
    marginLeft: 8
  },
  tempMin: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    color: colors.red,
    marginLeft: 4
  },
  tempMax: {
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
    color: colors.blue,
    marginLeft: 4
  },
  favoriteText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: colors.red,
    marginLeft: 4,
  },
  otherDaysText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: colors.primaryBlue,
    marginRight: 4,
    textDecorationLine: "underline"
  }
});

export default styles;