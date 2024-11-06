import TQuestion from "../types/question";

type QuestionParams = {
  question: TQuestion;
};

const Question: React.FC<QuestionParams> = ({ question }): JSX.Element => {
  return (
    <div style={{ display: "flex", gap: "7px" }}>
      <span>{question.id})</span>
      <a href={question.link} target="_blank">
        {" "}
        {question.title}
      </a>
    </div>
  );
};

export default Question;
