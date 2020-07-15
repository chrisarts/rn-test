import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewScreen from "../screens/New/New.screen";
import TopScreen from "../screens/Top/Top.screen";
import PopularScreen from "../screens/Popular/Popular.screen";
import HotScreen from "../screens/Hot/Hot.screen";

const Tab = createMaterialTopTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="New"
        lazy={true}
        tabBarOptions={{
          labelStyle: {
            fontFamily: "Roboto_400Regular",
            fontSize: 12
          },
          allowFontScaling: true,
        }}
      >
        <Tab.Screen
          name="New"
          component={NewScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Top"
          component={TopScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Popular"
          component={PopularScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Hot"
          component={HotScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
