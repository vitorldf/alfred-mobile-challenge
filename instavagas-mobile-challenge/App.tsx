import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { GlobalStyles } from "./src/styles/globalStyles";
import HomePage from "./src/screens/home";
import HeaderComponent from "./src/components/header";
import { NativeBaseProvider, Box } from "native-base";
import TabBarComponent from "./src/components/tabBar";
import { useCallback, useEffect, useState } from "react";
import { api } from "./src/services";

export default function App() {
  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView behavior="height" style={GlobalStyles.container}>
        <HomePage />
        <TabBarComponent />
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}
