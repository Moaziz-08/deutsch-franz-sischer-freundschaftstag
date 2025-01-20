
  // Quiz functionality
  const quizContainer = document.getElementById("quiz")
  const resultsContainer = document.getElementById("results")
  const submitButton = document.getElementById("submit")

  const myQuestions = [
    {
      question: "Welche Stadt ist die Hauptstadt von Frankreich?",
      answers: {
        a: "Berlin",
        b: "Paris",
        c: "London",
        d: "Rom",
      },
      correctAnswer: "b",
    },
    {
      question: "Welcher Fluss fließt durch Berlin?",
      answers: {
        a: "Rhein",
        b: "Donau",
        c: "Spree",
        d: "Elbe",
      },
      correctAnswer: "c",
    },
    {
      question: "In welchem Jahr wurde der Élysée-Vertrag unterzeichnet?",
      answers: {
        a: "1945",
        b: "1955",
        c: "1963",
        d: "1989",
      },
      correctAnswer: "c",
    },
    {
      question: "Welches Symbol repräsentiert Frankreich?",
      answers: {
        a: "Adler",
        b: "Hahn",
        c: "Löwe",
        d: "Bär",
      },
      correctAnswer: "b",
    },
    {
      question: "Wie heißt das längste deutsche Wort?",
      answers: {
        a: "Donaudampfschifffahrtsgesellschaftskapitän",
        b: "Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz",
        c: "Kraftfahrzeug-Haftpflichtversicherung",
        d: "Bundesausbildungsförderungsgesetz",
      },
      correctAnswer: "b",
    },
  ]

  function buildQuiz() {
    const output = []

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = []

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label class="quiz-option">
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} : ${currentQuestion.answers[letter]}
          </label>`,
        )
      }

      output.push(
        `<div class="quiz-question">
          <p>${currentQuestion.question}</p>
          <div class="quiz-options">${answers.join("")}</div>
        </div>`,
      )
    })

    quizContainer.innerHTML = output.join("")
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".quiz-options")
    let numCorrect = 0

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber]
      const selector = `input[name=question${questionNumber}]:checked`
      const userAnswer = (answerContainer.querySelector(selector) || {}).value

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++
        answerContainers[questionNumber].style.color = "lightgreen"
      } else {
        answerContainers[questionNumber].style.color = "red"
      }
    })

    resultsContainer.innerHTML = `${translations[currentLang]["correct-answers"]}: ${numCorrect} ${translations[currentLang]["out-of"]} ${myQuestions.length}`
  }

  if (quizContainer && submitButton) {
    buildQuiz()
    submitButton.addEventListener("click", showResults)
  }


