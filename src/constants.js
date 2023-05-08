export const jsQuizz = {
    questions: [
        {

            question:
                "______ Proporcionar una forma de pasar datos de un componente a otro. Llene el espacio en blanco",
            type: "FIB",
            correctAnswer: "props",
        },
        {

            question:
                "¿Cuál de los siguientes se usa en React.js para aumentar el rendimiento?",
            choices: [
                "Virtual DOM",
                "Original DOM",
                "Both A and B",
                "None of the above",
            ],
            type: "MCQs",
            correctAnswer: "Virtual DOM",
        },
        {
            question: "¿Qué es ReactJS?",
            choices: [
                "Server-side framework",
                "User Interface framework",
                "both a and b",
                "None of the above",
            ],
            type: "MCQs",
            correctAnswer: "User Interface framework",
        },
        {
            question:
                "Identifique el que se utiliza para pasar datos a componentes desde el exterior.",
            choices: ["Render with arguments", "setState", "PropTypes", "props"],
            type: "MCQs",
            correctAnswer: "props",
        },
        {
            question: "En que language esta escrito React.js?",
            choices: ["Python", "Java", "C#", "JavaScript"],
            type: "MCQs",
            correctAnswer: "JavaScript",
        },
        {
            question: "Que es Babel?",
            choices: [
                "JavaScript interpreter",
                "JavaScript transpiler",
                "JavaScript compiler",
                "None of the above",
            ],
            type: "MCQs",
            correctAnswer: "JavaScript compiler",
        },
    ],
};

export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
}