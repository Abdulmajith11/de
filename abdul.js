// Questions that will be asked
const Questions = [{
	q: "Which of the following is the correct syntax to print a page using JavaScript?",
	a: [{ text: "browser.print();", isCorrect: false },
	{ text: "navigator.print();", isCorrect: false },
	{ text: "window.print();", isCorrect: true },
	{ text: "document.print();", isCorrect: false }
	]

},
{
	q: "Which of the following type of variable is visible only within a function where it is defined?",
	a: [{ text: "global variable", isCorrect: false, isSelected: false },
	{ text: "None of the above", isCorrect: false },
	{ text: "Both of the above.", isCorrect: false },
	{ text: "local variable", isCorrect: true }
	]

},
{
	q: "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
	a: [{ text: "toSource()", isCorrect: false },
	{ text: "valueOf()", isCorrect: false },
	{ text: "toString()", isCorrect: true },
	{ text: "None of the above", isCorrect: false }
	]

},
{
	q: "Which of the following function of Array object calls a function for each element in the array?",
	a: [{ text: "concat()", isCorrect: false },
	{ text: "every()", isCorrect: false },
	{ text: "forEach()", isCorrect: true },
	{ text: "filter()", isCorrect: false }
	]

},
{
	q: "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
	a: [{ text: "small()", isCorrect: false },
	{ text: "sup()", isCorrect: false },
	{ text: "strike()", isCorrect: true },
	{ text: "sub() ", isCorrect: false }
	]
}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
