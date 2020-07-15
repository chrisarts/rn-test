import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../redux/actions/reddit";
import { navigateTo } from "../../redux/actions/app";
import RedditArticleItem from "../../components/RedditArticleListItem/RedditArticleListItem";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import ListEmpty from "../../components/ListEmpty/ListEmpty";

const NewScreen = (props) => {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddit);
  const navigation = useNavigation();
  useEffect(() => {
    if (reddit.new.data.children.length === 0 && !reddit.isLoading) {
      dispatch(fetchArticles({ category: "new" }));
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
      data={reddit.new.data.children}
      renderItem={renderItem}
      ListEmptyComponent={
        <ListEmpty
          isLoading={reddit.isLoading}
          itemsCount={reddit.new.data.children.length}
        />
      }
    />
  );
};

export default NewScreen;
