import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ArticleScreen = ({ route }) => {
  const navigation = useNavigation();
  console.log("Route: ", route);
  return (
    <View>
      <Text>ARTICLE SCREEN...</Text>
    </View>
  );
};

export default ArticleScreen;
