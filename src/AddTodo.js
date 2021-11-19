import { gql, useMutation } from "@apollo/client";
import React from "react";

const ADD_TODO = gql`

mutation AddTodo($text: String!) {
    addTodo(text: $text) {
        id
        text
    }
}
`;

export const AddTodo = () => {

  let input;

  const [addTodo, {data, loading, error}] = useMutation(ADD_TODO);

  console.info(data);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { text: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>

    </div>
  );
};
