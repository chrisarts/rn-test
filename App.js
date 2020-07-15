import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import AppLoading from "./src/components/AppLoading/AppLoading";
import Router from "./src/router/Router";
import store from "./src/redux/store";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Router />
      </SafeAreaView>
    </Provider>
  );
}
