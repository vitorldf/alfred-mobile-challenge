import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const TabBarStyles = StyleSheet.create({
  tabBarBox: {
    flex: 0.1,
    flexDirection: "row",
    width: " 100%",
    paddingBottom: 1,
    gap: 15,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.dark[900],
  },
  iconsBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
