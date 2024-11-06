import useQuestions from "../hooks/use_questions";
import Question from "./question";

const Questions = (): JSX.Element => {
  const questions = useQuestions();
  return (
    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
      {questions.map((que) => {
        return <Question key={que.id} question={que} />;
      })}
    </div>
  );
};

export default Questions;
