import { all } from "redux-saga/effects";
import reddit from "./reddit.saga";

export default function* rootSaga() {
  yield all([reddit()]);
}
