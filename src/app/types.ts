export type Option = {
  value: string | number;
  label: string;
};

export type QuestionType = "radio" | "text";

export type Question = {
  prompt: string;
  options: Option[];
  type: QuestionType;
};
