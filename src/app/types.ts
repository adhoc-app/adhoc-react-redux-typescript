export type Option = {
  value: string | number;
  label: string;
};

export type QuestionType = "radio" | "text" | "other";

export type Question = {
  prompt: string;
  options?: Option[];
  type: QuestionType;
};

export type Answer = {
  promptId: number;
  answerId: number;
};
