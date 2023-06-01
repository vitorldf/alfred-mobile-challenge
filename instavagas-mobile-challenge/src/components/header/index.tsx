import { View, Text, TextInput } from "react-native";
import { HeaderStyles } from "../../styles/headerStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Colors } from "../../styles/colors";

interface headerProps {
  searchTerm: any;
  handleSearch(value: string): void;
}


export default function HeaderComponent({searchTerm, handleSearch}: headerProps) {
  return (
    <View style={HeaderStyles.headerBox}>
      <Text style={HeaderStyles.headerText}>Pharma Inc.</Text>
      <View style={HeaderStyles.headerContent}>
        <TextInput
          inputMode="search"
          keyboardType="default"
          placeholder="Nome do Cliente"
          style={HeaderStyles.headerInput}
          value={searchTerm}
          onChangeText={(text) => handleSearch(text)}
        />
        <Icon
          name="search"
          size={24}
          color={Colors.primary[400]}
          style={HeaderStyles.searchIcon}
        />
        <Feather
          name="align-center"
          size={28}
          color={Colors.primary[400]}
          style={HeaderStyles.searchIcon}
        />
      </View>
    </View>
  );
}
