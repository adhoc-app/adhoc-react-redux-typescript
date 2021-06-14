import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Question } from "../../../app/types";

export const mockQuestions: Question[] = [
  {
    prompt: "ăn cơm",
    options: [
      { value: 0, label: "sleep" },
      { value: 1, label: "eat" },
      { value: 2, label: "write" },
      { value: 3, label: "work" },
    ],
    type: "radio",
  },
  {
    prompt: "Con mèo trèo cây cau.",
    options: [
      { value: 0, label: "The cat climbs on a tall tree." },
      { value: 1, label: "The lion climbs on a areca tree." },
      { value: 2, label: "The cat climbs on a areca tree." },
      { value: 3, label: "The lion climbs on a tall tree." },
    ],
    type: "radio",
  },
  {
    prompt: "Hôm nay ăn gì?",
    options: [{ value: 2, label: "what to eat today?" }],
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
