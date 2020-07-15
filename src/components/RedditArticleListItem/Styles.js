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
  noImage: {
    width: 80,
    height: 80,
    backgroundColor: "#E0E0E0",
  },
  articleDescriptions: {
    flexDirection: "column",
    flex: 1,
  },
  date: {
    textAlign: "right",
    fontSize: 11,
  },
  littleDescriptionText: {
    fontSize: 11,
  },
  aboutDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 5,
  },
});
