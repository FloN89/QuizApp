let questions = [
    {
    "question": "Wenn die Londoner von einem „black cab“ reden, dann meinen sie …",
    "answer_1": "ein Taxi",
    "answer_2": "einen Regenhut",
    "answer_3": "einen verbrannten Toast",
    "answer_4": "gebratene Blutwurst",
    "right_answer": 1
    },

     {
    "question": "Frage2",
    "answer_1": "Antwort1",
    "answer_2": "Antwort2",
    "answer_3": "Antwort3",
    "answer_4": "Antwort4",
    "right_answer": 3
    },

     {
    "question": "Frage3",
    "answer_1": "Antwort1",
    "answer_2": "Antwort2",
    "answer_3": "Antwort3",
    "answer_4": "Antwort4",
    "right_answer": 3
    },

     {
    "question": "Frage4",
    "answer_1": "Antwort1",
    "answer_2": "Antwort2",
    "answer_3": "Antwort3",
    "answer_4": "Antwort4",
    "right_answer": 3
    },

     {
    "question": "Frage5",
    "answer_1": "Antwort1",
    "answer_2": "Antwort2",
    "answer_3": "Antwort3",
    "answer_4": "Antwort4",
    "right_answer": 3
    },
     {
    "question": "Frage6",
    "answer_1": "Antwort1",
    "answer_2": "Antwort2",
    "answer_3": "Antwort3",
    "answer_4": "Antwort4",
    "right_answer": 3
    },
];

let currentQuestion = 0;

function init(){
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion()
}

function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) {
     let question = questions[currentQuestion];
     let selectedQuestionNumber = selection.slice(-1);
     
     let idOfRightAnswer = `answer_${question['right_answer']}`;

     if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
     } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
     }
    document.getElementById('next-button').disabled = false;

}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();


}

function resetAnswerButton(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

}