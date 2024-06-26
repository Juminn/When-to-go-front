import axios from "axios";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const getNextQuestion = (
  questionIndex,
  followUpQuestionIndex,
  selectedOption,
  options
) => {
  return axios.post(`${apiUrl}/survey/nextQuestion`, {
    questionIndex: questionIndex,
    followUpQuestionIndex: followUpQuestionIndex,
    selectedOption: selectedOption,
    options: options,
  });
};

const getSurveyResult = (result) => {
  return axios.post(`${apiUrl}/survey/result`, {
    bus: result.Bus,
    subway: result.Subway,
    transfer: result.Transfer,
  });
};

export { getNextQuestion, getSurveyResult };
