import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import moment from "moment";
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
      <View style={styles.articleDescriptions}>
        <Text style={styles.date}>
          {moment(article.created * 1000).fromNow()}
        </Text>
        <Text style={styles.title}>{entities.decode(article.title)}</Text>
        <View style={styles.aboutDescription}>
          <Text style={styles.littleDescriptionText}>{article.author}</Text>
          <Text style={styles.littleDescriptionText}>
            Score: {article.score}
          </Text>
          <Text style={styles.littleDescriptionText}>
            {article.num_comments} comments
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

RedditArticleItem.propTypes = {
  article: PropTypes.shape({
    created: PropTypes.number,
    author: PropTypes.string,
    score: PropTypes.number,
    num_comments: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default RedditArticleItem;
