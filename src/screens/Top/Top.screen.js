import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchArticles } from "../../redux/actions/reddit";
import RedditArticleItem from "../../components/RedditArticleListItem/RedditArticleListItem";
import ListEmpty from "../../components/ListEmpty/ListEmpty";
import { navigateTo } from "../../redux/actions/app";

const TopScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const reddit = useSelector((state) => state.reddit);
  useEffect(() => {
    if (reddit.top.data.children.length === 0 && !reddit.isLoading) {
      dispatch(fetchArticles({ category: "top" }));
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
      data={reddit.top.data.children}
      renderItem={renderItem}
      ListEmptyComponent={
        <ListEmpty
          isLoading={reddit.isLoading}
          itemsCount={reddit.top.data.children.length}
        />
      }
    />
  );
};

export default TopScreen;
