import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const ClientCardStyles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 370,
    height: 85,
    backgroundColor: Colors.primary[400],
    
    borderRadius: 35,
    
  },
  
 imageBox: {
  paddingTop: 12,
 },

  clientImage: {
   paddingBottom:10,
    width: 75,
    height: 75,
    borderRadius: 35,
    
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

  textContent: {
    flexDirection: "row",

    fontSize: 12,
  },
});
