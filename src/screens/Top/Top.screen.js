import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../redux/actions/reddit";
import RedditArticleItem from "../../components/RedditArticleListItem/RedditArticleListItem";
import styles from "./Styles";
import ListEmpty from '../../components/ListEmpty/ListEmpty';

const TopScreen = () => {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddit);
  useEffect(() => {
    if (reddit.top.data.children.length === 0 && !reddit.isLoading) {
      dispatch(fetchArticles({ category: "top" }));
    }
  });
  console.log(reddit.top.data.children.length === 0 && !reddit.isLoading);
  const renderItem = ({ item }) => <RedditArticleItem article={item.data} />;
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
