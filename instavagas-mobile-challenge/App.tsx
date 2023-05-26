import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { GlobalStyles } from "./src/styles/globalStyles";

export default function App() {
  return (
    <View style={GlobalStyles.container}>
      <Text>React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}
