import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import {
  Field,
  FieldArray,
  FieldAttributes,
  Form,
  Formik,
  useField,
} from "formik";
import React from "react";
import * as yup from "yup";

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  question: yup.string().required().min(2),
  answers: yup.array().of(
    yup.object({
      answer: yup.string().required(),
    })
  ),
});

const QuestionCreation = () => {
  return (
    <div>
      <Formik
        initialValues={{
          question: "",
          answers: [
            {
              type: "radio",
              answer: "",
              id: "" + Math.random(),
            },
          ],
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            console.log("submit: ", data);
          }, 500);

          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <h1>Question</h1>
              <MyTextField placeholder="question" name="question" />
            </div>
            <FieldArray name="answers">
              {(arrayHelpers) => (
                <div>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: "radio",
                        answer: "",
                        id: "" + Math.random(),
                      })
                    }
                  >
                    Add answer
                  </Button>
                  {values.answers.map((answer, index) => {
                    return (
                      <div key={answer.id}>
                        <MyTextField
                          placeholder="answer"
                          name={`answers.${index}.answer`}
                        />

                        <Field
                          name={`answers.${index}.type`}
                          type="select"
                          as={Select}
                        >
                          <MenuItem value="radio">radio</MenuItem>
                          <MenuItem value="textbox">textbox</MenuItem>
                        </Field>
                        <Button onClick={() => arrayHelpers.remove(index)}>
                          X
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>

            <div>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuestionCreation;
