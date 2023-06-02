import { SafeAreaView, Text, View } from "react-native";
import { GlobalStyles } from "../../styles/globalStyles";
import { FavoritesStyles } from "../../styles/favoritesStyles";

export default function FavoritesPage() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={FavoritesStyles.favoritesBox}>
      <Text style={FavoritesStyles.favoritesText}>Seus Clientes Favoritos:</Text>

      </View>
    </SafeAreaView>


  )
}
