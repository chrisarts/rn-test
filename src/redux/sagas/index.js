import { all } from "redux-saga/effects";
import reddit from "./reddit.saga";
import app from "./app.saga";

export default function* rootSaga() {
  yield all([app(), reddit()]);
}
