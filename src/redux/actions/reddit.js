import {
  FETCH_ARTICLES,
  SET_NEW_ARTICLES,
  SET_TOP_ARTICLES,
  SET_POPULAR_ARTICLES,
  SET_HOT_ARTICLES,
} from "../reducers/reddit.reducer";

export const fetchArticles = (payload) => ({
  type: FETCH_ARTICLES,
  payload,
});

export const setNewArticles = (payload) => ({
  type: SET_NEW_ARTICLES,
  payload,
});

export const setTopArticles = (payload) => ({
  type: SET_TOP_ARTICLES,
  payload,
});

export const setPopularArticles = (payload) => ({
  type: SET_POPULAR_ARTICLES,
  payload,
});

export const setHotArticles = (payload) => ({
  type: SET_HOT_ARTICLES,
  payload,
});
