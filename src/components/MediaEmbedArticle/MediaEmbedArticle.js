import React from "react";
import PropTypes from "prop-types";
import { WebView } from "react-native-webview";

const MediaEmbedArticle = ({ url }) => {
  return <WebView originWhitelist={["*"]} source={{ uri: url }} />;
};

MediaEmbedArticle.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MediaEmbedArticle;
