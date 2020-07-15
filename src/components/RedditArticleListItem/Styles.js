import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 0.3,
    borderColor: "#E0E0E0",
    alignItems: "center",
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  title: {
    flex: 1,
    fontFamily: "Roboto_700Bold",
    fontSize: 15,
    marginLeft: 10,
    flexWrap: "wrap",
  },
});
