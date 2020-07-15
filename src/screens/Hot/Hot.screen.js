import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../redux/actions/reddit";
import RedditArticleItem from "../../components/RedditArticleListItem/RedditArticleListItem";
import styles from "./Styles";
import ListEmpty from "../../components/ListEmpty/ListEmpty";

const HotScreen = () => {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddit);
  useEffect(() => {
    if (reddit.hot.data.children.length === 0 && !reddit.isLoading) {
      dispatch(fetchArticles({ category: "hot" }));
    }
  });
  const renderItem = ({ item }) => <RedditArticleItem article={item.data} />;
  return (
    <FlatList
      data={reddit.hot.data.children}
      renderItem={renderItem}
      ListEmptyComponent={
        <ListEmpty
          isLoading={reddit.isLoading}
          itemsCount={reddit.hot.data.children.length}
        />
      }
    />
  );
};

export default HotScreen;
