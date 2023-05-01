import { useState } from "react";

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState('');


    const { question, choices, correctAnswer } = questions[currentQuestion];

    const onAnwswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }


    return <div className="quiz-container">
        <>
            <span className="active-question-no">{currentQuestion + 1}</span>
            <span className="total-question">/{questions.length}</span>
            <h2>{question}</h2>
            <ul>
                {
                    choices.map((choice, index) =>
                        <li onClick={() => onAnwswerClick(choice, index)}
                            key={choice}
                            className={setAnswerIdx === index ? 'selected-answer' : null}>

                            {choice}
                        </li>)
                }
            </ul>
        </>
    </div>;
};

export default Quiz;