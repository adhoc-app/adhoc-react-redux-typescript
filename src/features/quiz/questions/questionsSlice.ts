import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Question } from "../../../app/types";

const mockQuestions: Question[] = [
  {
    prompt: "ăn cơm",
    options: [
      { value: 1, label: "sleep" },
      { value: 2, label: "write" },
      { value: 3, label: "eat" },
      { value: 4, label: "work" },
    ],
    type: "radio",
  },
  {
    prompt: "Con mèo trèo cây cau.",
    options: [
      { value: 1, label: "The cat climbs on a tall tree." },
      { value: 2, label: "The lion climbs on a areca tree." },
      { value: 3, label: "The cat climbs on a areca tree." },
      { value: 4, label: "The lion climbs on a tall tree." },
    ],
    type: "radio",
  },
  {
    prompt: "Hôm nay ăn gì?",
    type: "text",
  },
];

export interface QuestionsState {
  questions: Question[];
}

const initialState: QuestionsState = {
  questions: mockQuestions,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const selectQuestions = (state: RootState) => state.questions.questions;

export default questionsSlice.reducer;
