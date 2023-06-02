import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeIcon from "react-native-vector-icons/AntDesign";
import FavoriteIcon from "react-native-vector-icons/MaterialIcons";
import HomePage from "../screens/home";
import FavoritesPage from "../screens/favorites";
import { Colors } from "../styles/colors";

export function Routes() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.secondary[900],
          tabBarStyle: {
            backgroundColor: Colors.dark[900],
          },
        }}
      >
        <Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <HomeIcon name="home" size={26} color={color} />
            ),
          }}
        />
        <Screen
          name="Favoritos"
          component={FavoritesPage}
          options={{
            headerTitleStyle:{
                fontSize: 28,
                fontWeight: "bold",
            },
            headerTintColor:Colors.secondary[900],
            headerStyle: {
              backgroundColor: Colors.dark[900],
            },
            tabBarIcon: ({ size, color }) => (
              <FavoriteIcon name="favorite-outline" size={26} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
