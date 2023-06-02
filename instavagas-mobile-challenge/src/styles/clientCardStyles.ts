import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const ClientCardStyles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    paddingBottom: 10,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    height: 85,
    backgroundColor: Colors.primary[400],

    borderRadius: 10,
  },

  imageBox: {
    paddingTop: 12,
  },

  clientImage: {
    paddingBottom: 10,
    width: 75,
    height: 75,
    borderRadius: 35,
  },
  clientModalImage: {
    paddingBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  cardsDetails: {
    width: 280,
    height: 85,
    paddingLeft: 6,
    gap: 4,
    justifyContent: "center",
  },

  nameBox: {
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
  },

  textContent: {
    flexDirection: "row",
    fontSize: 12,
  },

  modalBox: {
    flex: 0.5,
    height: 320,
    width: 300,
    position: "absolute",
    bottom: 220,
    right: 10,
    backgroundColor: "white",
    margin: 25,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  modalTextBox: {
    paddingTop: 10,
    paddingLeft: 8,
    height: 150,
    width: 285,
    borderRadius: 20,
    backgroundColor: Colors.primary[200],
  },

  closeIconModal: {
    position: 'absolute',
    left: 115,
  }
});
