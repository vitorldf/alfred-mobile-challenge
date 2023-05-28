import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { GlobalStyles } from "./src/styles/globalStyles";
import HomePage from "./src/screens/home";
import HeaderComponent from "./src/components/header";
import { NativeBaseProvider, Box } from "native-base";
import TabBarComponent from "./src/components/tabBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={GlobalStyles.container}>
        <HeaderComponent />
        <HomePage />
        <TabBarComponent/>
      </View>
    </NativeBaseProvider>
  );
}
