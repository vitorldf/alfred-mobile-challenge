import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const HeaderStyles = StyleSheet.create({
  headerBox: {
    flex: 0.2,
    width: " 100%",
    paddingTop: 50,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark[900],
  },
  headerText: {
    fontSize: 44,
    fontWeight: "bold",
    color: Colors.secondary[900],
  },
  headerInput: {
    width: 250,
    borderColor: Colors.background,
    borderRadius: 8,
    paddingHorizontal: 4,
    backgroundColor: Colors.primary[400],
    color: Colors.secondary[900],
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,

  },
  searchIcon: {
    paddingLeft: 4,
    marginRight: 2,
  },
});
