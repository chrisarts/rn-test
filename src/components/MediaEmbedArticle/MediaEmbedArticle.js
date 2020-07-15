import React from "react";
import { ScrollView } from "react-native";
import { WebView } from "react-native-webview";

const MediaEmbedArticle = ({ mediaEmbed, media, url }) => {
  return <WebView originWhitelist={["*"]} source={{ uri: url }} />;
};

export default MediaEmbedArticle;
