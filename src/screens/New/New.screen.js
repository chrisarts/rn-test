import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../redux/actions/reddit";
import RedditArticleItem from "../../components/RedditArticleListItem/RedditArticleListItem";
import styles from "./Styles";
import ListEmpty from '../../components/ListEmpty/ListEmpty';

const NewScreen = () => {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddit);
  useEffect(() => {
    if (reddit.new.data.children.length === 0 && !reddit.isLoading) {
      dispatch(fetchArticles({ category: "new" }));
    }
  });
  const renderItem = ({ item }) => <RedditArticleItem article={item.data} />;
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
