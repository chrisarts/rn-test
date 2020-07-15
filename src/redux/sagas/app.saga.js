import { takeLatest } from "redux-saga/effects";
import { StackActions } from "@react-navigation/native";
import { NAVIGATE_TO } from "../actions/app";

function* navigate({ payload }) {
  try {
    payload.navigation.dispatch(
      StackActions.push(payload.route, {
        routeParams: {
          ...(!payload.routeParams ? {} : payload.routeParams),
        },
      })
    );
  } catch (error) {
    console.log("EXECUTION_ERROR: ", error);
  }
}
export default function* app() {
  yield takeLatest(NAVIGATE_TO, navigate);
}
