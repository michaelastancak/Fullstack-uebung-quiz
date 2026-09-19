let questions = [];
let currentQuestionIndex = 0;
let score = 0;

  fetch("fragen.json")
    .then(response => response.json())
    .then(data => {
questions = data;
  showQuestion();
})
.catch(error => {
  console.error("JSON loading error:", error);
});

function showQuestion() {
const currentQuestion = questions[currentQuestionIndex];

document.getElementById("question").innerHTML =
  currentQuestion.frage;

  document.getElementById("question").innerHTML =
  currentQuestion.frage;

const answers = currentQuestion.antworten;

document.getElementById("answers").innerHTML = `
<li>
  <label>
    <input type="radio" name="answer" value="${answers[0]}">
    ${answers[0]}
  </label>
</li>

<li>
  <label>
    <input type="radio" name="answer" value="${answers[1]}">
    ${answers[1]}
  </label>
</li>

<li>
  <label>
    <input type="radio" name="answer" value="${answers[2]}">
    ${answers[2]}
  </label>
</li>

<li>
  <label>
    <input type="radio" name="answer" value="${answers[3]}">
    ${answers[3]}
  </label>
  </li>
`;
}

function nextQuestion() {

const selectedAnswer =
    document.querySelector(
    'input[name="answer"]:checked'
);

if (!selectedAnswer) {
  alert("Please select an answer!");
return;
}

if (
  selectedAnswer.value ===
  questions[currentQuestionIndex].korrekt
) {
  score++;
}

currentQuestionIndex++;

if (currentQuestionIndex < questions.length) {

showQuestion();

} else {
  document.getElementById("question").textContent =
    `Your score: ${score}/${questions.length}`;
  document.getElementById("answers").innerHTML = "";
  document.getElementById("nextBtn").style.display =
"none";
}
}
document
    .getElementById("nextBtn")
    .addEventListener("click", nextQuestion);

document
    .getElementById("restartBtn")
    .addEventListener("click", restartQuiz);

function restartQuiz() {

    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("nextBtn").style.display =
    "inline-block";

showQuestion();
}