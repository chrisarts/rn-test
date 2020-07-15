import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight
  },
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20
  }
});
