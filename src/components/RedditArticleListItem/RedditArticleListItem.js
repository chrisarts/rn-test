import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";

const RedditArticleItem = ({ article }) => {
  console.log(article);
  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: article.thumbnail,
        }}
      />
      <Text style={styles.title}>{article.title}</Text>
    </View>
  );
};

export default RedditArticleItem;
