const quiz = [
    {
        question: "What is the keyword used to define a constant in JavaScript?",
        ans1text: "const",
        ans2text: "let",
        ans3text: "var",
        ans4text: "static",
        correctAnswer: "const"
    },
    {
        question: "What method is used to add an element at the end of an array in JavaScript?",
        ans1text: "push",
        ans2text: "pop",
        ans3text: "shift",
        ans4text: "unshift",
        correctAnswer: "push"
    },
    {
        question: "What is the most used programming language in 2024?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript"
    },
    {
        question: "Which programming language is known for its use in web development?",
        ans1text: "Ruby",
        ans2text: "Python",
        ans3text: "JavaScript",
        ans4text: "C++"
    },
    {
        question: "What is the primary language for Android development?",
        ans1text: "Swift",
        ans2text: "Kotlin",
        ans3text: "Java",
        ans4text: "C#"
    },
    {
        question: "Which language is primarily used for iOS development?",
        ans1text: "Objective-C",
        ans2text: "Kotlin",
        ans3text: "Swift",
        ans4text: "Python"
    },
    {
        question: "What programming language is often associated with data analysis?",
        ans1text: "R",
        ans2text: "Java",
        ans3text: "C",
        ans4text: "PHP"
    },
    {
        question: "What language is best known for its use in machine learning?",
        ans1text: "Python",
        ans2text: "C++",
        ans3text: "Java",
        ans4text: "Scala"
    },
    {
        question: "Which programming language is popular for systems programming?",
        ans1text: "Rust",
        ans2text: "C",
        ans3text: "Go",
        ans4text: "Ruby"
    },
    {
        question: "What is the most used markup language?",
        ans1text: "HTML",
        ans2text: "XML",
        ans3text: "Markdown",
        ans4text: "YAML"
    },
    {
        question: "Which language is known for its simplicity and readability?",
        ans1text: "Python",
        ans2text: "C",
        ans3text: "Java",
        ans4text: "Perl"
    },
    {
        question: "What is the most used programming language in backend development?",
        ans1text: "JavaScript",
        ans2text: "PHP",
        ans3text: "Ruby",
        ans4text: "Python"
    },
   
];

const Question = document.querySelector("#quizQuestion");
const optionA = document.getElementById("text-topnA");
const optionB = document.getElementById("text-topnB");
const optionC = document.getElementById("text-topnC");
const optionD = document.getElementById("text-topnD");
const submit = document.getElementById("submit");
const gameCon = document.getElementById("game-con"); // Corrected to match the HTML element ID

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const current = quiz[currentQuestion];
    Question.textContent = current.question;
    optionA.textContent = current.ans1text;
    optionB.textContent = current.ans2text;
    optionC.textContent = current.ans3text;
    optionD.textContent = current.ans4text;
}

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if (!checkedAns) {
        alert("Please select an option.");
    } else {
        const selectedAnswer = checkedAns.nextElementSibling.textContent;
        const correctAnswer = quiz[currentQuestion].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            score++;
            gameCon.style.backgroundColor = "#5CB338"; 
        } else {
            gameCon.style.backgroundColor = "#FB4141"; 
        }

        currentQuestion++;

        setTimeout(() => { 
            if (currentQuestion < quiz.length) {
                loadQuestion();
                checkedAns.checked = false;
                gameCon.style.backgroundColor = ""; 
            } else {
                alert(`Quiz completed! Your score is ${score} out of ${quiz.length}`);
                location.reload(); 
            }
        }, 500);  
    }
});

loadQuestion();
