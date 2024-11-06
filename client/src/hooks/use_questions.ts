import TQuestion from "../types/question";

const useQuestions = (): TQuestion[] => {
  const questions = [
    {
      id: 1,
      title: "Two Sum",
      link: "https://leetcode.com/problems/two-sum",
    },
    {
      id: 2,
      title: "Add Two Numbers",
      link: "https://leetcode.com/problems/add-two-numbers",
    },
    {
      id: 7,
      title: "Reverse Integer",
      link: "https://leetcode.com/problems/reverse-integer",
    },
  ];

  return questions;
};

export default useQuestions;
