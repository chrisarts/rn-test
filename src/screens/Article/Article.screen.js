import React from "react";
import MediaEmbedArticle from "../../components/MediaEmbedArticle/MediaEmbedArticle";

const ArticleScreen = ({ route }) => {
  return <MediaEmbedArticle url={route.params.routeParams.url} />;
};

export default ArticleScreen;
