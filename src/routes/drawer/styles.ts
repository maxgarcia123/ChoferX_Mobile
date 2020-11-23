import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors, fonts } from "../../screens/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    backgroundColor: colors.secudary,
    // justifyContent: 'center',
    alignItems: "center",
    alignContent: "center",
    // height: hp(20),
    height: 20,
    marginTop: 15,
  },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 10,
    color: colors.secudary,
  },
  arrow_left: {
    fontSize: 10,
    color: colors.secudary,
    marginLeft: 10,
    marginRight: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginTop: 5,
    marginLeft: 7,
  },
  user_name: {
    fontSize: 10,
    marginLeft: 10,
    fontFamily: fonts.primaryBold,
    color: colors.secudary,
    width: 100,
  },
  email: {
    fontSize: 12,
    marginLeft: 10,
    fontFamily: fonts.primaryBold,
    color: "#CDCDCD",
    width: 150,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#CDCDCD",
    width: 150,
    alignSelf: "center",
    marginTop:5,
  },
  containder_item: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    height: 10,
  },
  icon_description: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 15,
    borderWidth: 1,
    width: 15,
  },
  title_item: {
    fontFamily: fonts.secundarySemiBold,
    fontSize: 10,
    color: colors.secudary,
  },
});