import { put, call, takeLatest } from "redux-saga/effects";
import { FETCH_ARTICLES } from "../reducers/reddit.reducer";
import {
  setNewArticles,
  setTopArticles,
  setPopularArticles,
  setHotArticles,
} from "../actions/reddit";
import { apiCall } from "../api";

function* getArticles({ payload }) {
  try {
    const results = yield call(
      apiCall,
      "get",
      `https://api.reddit.com/r/programming/${payload.category}.json`
    );
    switch (payload.category) {
      case "new":
        return yield put(setNewArticles(results));
      case "top":
        return yield put(setTopArticles(results));
      case "rising":
        return yield put(setPopularArticles(results));
      case "hot":
        return yield put(setHotArticles(results));
      default:
        return null;
    }
  } catch (error) {
    console.log("EXECUTION_ERROR: ", error);
  }
}
export default function* reddit() {
  yield takeLatest(FETCH_ARTICLES, getArticles);
}
