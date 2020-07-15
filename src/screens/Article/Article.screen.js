import React from "react";
import PropTypes from "prop-types";
import MediaEmbedArticle from "../../components/MediaEmbedArticle/MediaEmbedArticle";

const ArticleScreen = ({ route }) => {
  return <MediaEmbedArticle url={route.params.routeParams.url} />;
};

ArticleScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      routeParams: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ArticleScreen;
