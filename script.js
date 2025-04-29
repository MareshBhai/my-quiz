const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submitBtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let correntQuestionIndex = 0;
let score = 0;

const quizQuestions = [
    {
        question: " 1 . who is prejent CM of AP ?",
        Options: [ "Chandra Babu", "modi", "jagan","None of Above"],
        correctAnswer: "Chandra Babu"
    },
    {
        question: " 2 . capital of telangana ?",
        Options: ["Mumbai", "vijayvada", "Hyderbad", "kurnool"],
        correctAnswer: "Hyderbad"
    },
    {
        question: " 3 . What is ' Apple ' spelling ?",
        Options: ["A P P I L  E", "All", "A P P L E", "None of Above"],
        correctAnswer: "A P P L E"
    },
    {
        question: " 4 . Who is the Bahubali second Hero ?",
        Options: ["Bahubali", "Katapa", "Kalakeya", "Balala Deva"],
        correctAnswer: "Balala Deva"
    },
];

function loadQuestion(){
    const correntQuestion = quizQuestions[correntQuestionIndex];
    questionElement.textContent = correntQuestion.question;

    optionsContainer.innerHTML = "";

    correntQuestion.Options.forEach((Options,index)=>{
        const OptionButton = document.createElement("button");
 OptionButton.textContent = Options;
        OptionButton.onclick = function(){
            selectAnswer(Options,correntQuestion.correctAnswer);

        };
        optionsContainer.appendChild(OptionButton)
    });
    
}
  
function selectAnswer(selectedOption,correctAnswer){

    if(selectedOption === correctAnswer){
        feedbackElement.textContent = "Correct" ;
        score++;
    }
    else
    {
        feedbackElement.textContent = "Incorrect answer ... corect answer is  "+ correctAnswer ;

    }
    correntQuestionIndex++;

    if (correntQuestionIndex < quizQuestions.length) {
        loadQuestion();
    }
    else
    {
        endQuiz(); 
    }
}

function endQuiz() {
    quizContainer.innerHTML = "<h2>Quiz completed</h2>";
    scoreElement.textContent = "Final score is: "+ score   +"  out of "+    quizQuestions.length;
  
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option:checked"')
    if (selectedOption) {
        selectAnswer(selectedOption.value)
    }
}

loadQuestion();