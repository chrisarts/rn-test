import React from "react";
import { View, Text, Image } from "react-native";
import { AllHtmlEntities } from "html-entities";
import styles from "./Styles";

const entities = new AllHtmlEntities();

const RedditArticleItem = ({ article }) => {
  return (
    <View style={styles.container}>
      {!article.thumbnail || article.thumbnail === "" ? (
        <View style={styles.noImage} />
      ) : (
        <Image
          style={styles.thumbnail}
          source={{
            uri: article.thumbnail,
          }}
        />
      )}
      <Text style={styles.title}>{entities.decode(article.title)}</Text>
    </View>
  );
};

export default RedditArticleItem;
