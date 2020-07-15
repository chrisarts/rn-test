import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchArticles } from "../../redux/actions/reddit";
import RedditArticleItem from "../../components/RedditArticleListItem/RedditArticleListItem";
import ListEmpty from "../../components/ListEmpty/ListEmpty";
import { navigateTo } from "../../redux/actions/app";

const PopularScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const reddit = useSelector((state) => state.reddit);
  useEffect(() => {
    if (reddit.popular.data.children.length === 0 && !reddit.isLoading) {
      dispatch(fetchArticles({ category: "rising" }));
    }
  });
  const goToArticle = (article) =>
    dispatch(
      navigateTo({ route: "Article", navigation, routeParams: article })
    );
  const renderItem = ({ item }) => (
    <RedditArticleItem
      article={item.data}
      goToArticle={(article) => goToArticle(article)}
    />
  );
  return (
    <FlatList
      data={reddit.popular.data.children}
      renderItem={renderItem}
      ListEmptyComponent={
        <ListEmpty
          isLoading={reddit.isLoading}
          itemsCount={reddit.popular.data.children.length}
        />
      }
    />
  );
};

export default PopularScreen;
