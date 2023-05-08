import { useState } from "react";
import { resultInitialState } from "../../constants"
import AnswerTimer from "../AnswerTimer/AnswerTimer"
import "./Quiz.scss"


const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState('');
    /* La funcion 'resultInitialState' viene del archivo "Constants.Js" */
    const [result, setResult] = useState(resultInitialState);
    const [mostrarResult, setmostrarResult] = useState(false);
    const [inputAnswer, setinputAnswer] = useState('');
    const [showAnswerTimer, setshowAnswerTimer] = useState(true);



    const { question, choices, correctAnswer, type } = questions[currentQuestion];

    const onAnwswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const OnClickNext = (finalAnswer) => {
        setAnswerIdx(null);
        setshowAnswerTimer(false);
        setResult((prev) =>
            finalAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                } : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setmostrarResult(true);
        }

        setTimeout(() => {
            setshowAnswerTimer(true);
        });
    };

    const onTryAgain = () => {
        setResult(resultInitialState);
        setmostrarResult(false);
    };

    const handleTimeUp = () => {
        setAnswer(false);
        OnClickNext(false);
    };

    const handleInputChange = (evt) => {
        setinputAnswer(evt.target.value);

        if (evt.target.value === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    const getAnswerUI = () => {
        if (type === "FIB") {
            return <input value={inputAnswer} onChange={handleInputChange} />;
        }
        return (<ul>
            {
                choices.map((choice, index) => (
                    <li
                        onClick={() => onAnwswerClick(choice, index)}
                        key={choice}
                        /* Para marcar las respuestas   */
                        className={answerIdx === index ? 'selected-answer' : null}
                    >
                        {choice}
                    </li>)
                )}
        </ul>);
    }

    return <div className="quiz-container">
        {!mostrarResult ? (<>
            {showAnswerTimer && < AnswerTimer duration={5} onTimeUp={handleTimeUp} />}
            <span className="active-question-no">{currentQuestion + 1}</span>
            <span className="total-question">/{questions.length}</span>
            <h2>{question}</h2>

            {getAnswerUI()}

            <div className="footer">
                <button onClick={() => OnClickNext(answer)} disabled={answerIdx === null && !inputAnswer}>
                    {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
            </div>
        </>) : <div className="result">
            <h3>Resultado</h3>
            <p>
                Total de Preguntas: <span>{questions.length}</span>
            </p>
            <p>
                Total de Puntos: <span>{result.score}</span>
            </p>
            <p>
                Respuestas Correctas: <span>{result.correctAnswers}</span>
            </p>
            <p>
                Respuestas incorrectas: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={onTryAgain}>Intentar de nuevo</button>
        </div>}

    </div>;
};

export default Quiz;