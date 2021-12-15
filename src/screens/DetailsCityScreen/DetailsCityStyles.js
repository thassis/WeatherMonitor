import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 8,
    backgroundColor: colors.white,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    alignItems: "center"
  },
  cityTitle: {
    marginLeft: 8,
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    color: colors.black,
  },
  body: {
    flex: 1,
    backgroundColor: colors.white
  },
  centerView: {
    flex: 1,
    justifyContent: "center"
  },
  currentDayView: {
    marginTop: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  currentTempText: {
    fontSize: 40,
    fontFamily: 'Roboto-Regular',
    color: colors.red,
  },
  feelsLikeTitle: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  weatherIcon: {
    width: 60,
    height: 60
  },
  descriptionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  hourlyView: {
    margin: 16,
    alignItems: "center",
  },
  blueCard: {
    paddingHorizontal: 16,
    backgroundColor: colors.secondaryBlue,
    marginTop: 16
  },
  dailyView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
    borderBottomWidth: 0.2,
    borderColor: colors.black
  },
  text: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  weatherCondition: {
    flexDirection: "row",
    alignItems: "center",
  },
  addView: {
    backgroundColor: colors.primaryBlue,
    padding: 16,
    alignItems: "center",
  },
  addButton: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Roboto-Medium"
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
  noCityTextDescription: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
    textAlign: "center",
    marginTop: 24
  },
});

export default styles;