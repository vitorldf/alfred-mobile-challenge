import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const HomeStyles = StyleSheet.create({
  content: {
    flexDirection: "column",
    paddingBottom: 4,
  },
  loaderContainer: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderText: {
    fontSize: 18,
  },
});
