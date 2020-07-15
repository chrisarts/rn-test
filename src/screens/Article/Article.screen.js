import React from "react";
import MediaEmbedArticle from "../../components/MediaEmbedArticle/MediaEmbedArticle";

const ArticleScreen = ({ route }) => {
  console.log(
    "ROUTE_PARAMS: ",
    route.params.routeParams
  );
  return (
    <MediaEmbedArticle
      url={route.params.routeParams.url}
    />
  );
};

export default ArticleScreen;
