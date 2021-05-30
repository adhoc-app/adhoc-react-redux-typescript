import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import answerReducer from "../features/quiz/answers/answerSlice";
import questionsReducer from "../features/quiz/questions/questionsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    questions: questionsReducer,
    answer: answerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
