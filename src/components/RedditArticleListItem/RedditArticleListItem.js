import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AllHtmlEntities } from "html-entities";
import styles from "./Styles";

const entities = new AllHtmlEntities();

const RedditArticleItem = ({ article, goToArticle }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToArticle(article)}
    >
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
    </TouchableOpacity>
  );
};

export default RedditArticleItem;
