import { Box, Text } from "native-base";
import { TabBarStyles } from "../../styles/tabBarStyles";
import HomeIcon from "react-native-vector-icons/AntDesign";
import FavoriteIcon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../styles/colors";

export default function TabBarComponent() {
  return (
    <Box style={TabBarStyles.tabBarBox}>
      <Box style={TabBarStyles.iconsBox}>
        <HomeIcon name="home" size={18} color={Colors.primary[400]} />
        <Text color={Colors.primary[400]}>Home</Text>
      </Box>
      <Box style={TabBarStyles.iconsBox}>
        <FavoriteIcon
          name="favorite-outline"
          size={18}
          color={Colors.primary[400]}
        />
        <Text color={Colors.primary[400]}>Favorites</Text>
      </Box>
    </Box>
  );
}
