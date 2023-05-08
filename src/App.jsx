import { useEffect, useState } from "react";
import Quiz from "./Components/Quiz/Quiz";
import { jsQuizz } from "./constants";

function App() {
  const[questions, setQuestions]= useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch("https://64586ade4eb3f674df73fbb0.mockapi.io/questions");
      const questionsResponse = await response.json();
      console.log(questionsResponse);
    } catch (error) {
      console.log(error);
    }
  }



  return <Quiz questions={jsQuizz.questions} />;
}

export default App;
