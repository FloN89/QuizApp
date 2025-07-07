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
    "question": "Wie viele Einwohner hat London?",
    "answer_1": "ca. 3,1 Millionen",
    "answer_2": "ca. 5,7 Millionen",
    "answer_3": "ca. 7,8 Millionen",
    "answer_4": "ca. 10,4 Millionen",
    "right_answer": 3
    },

     {
    "question": "Welcher Serienmörder trieb sein Unwesen in London?",
    "answer_1": "The Gentleman Killer",
    "answer_2": "The Candy Man",
    "answer_3": "Green River Killer",
    "answer_4": "Jack the Ripper",
    "right_answer": 4
    },

     {
    "question": "In welchem Jahr wurde die Tower Bridge in London eröffnet?",
    "answer_1": "1906",
    "answer_2": "1894",
    "answer_3": "1736",
    "answer_4": "1655",
    "right_answer": 2
    },

     {
    "question": "Welcher bekannte Fluss fließt durch London?",
    "answer_1": "Themse",
    "answer_2": "Seine",
    "answer_3": "Spree",
    "answer_4": "Tiber",
    "right_answer": 1
    },
     {
    "question": "Welchen Ort findet man nicht in London?",
    "answer_1": "Trafalgar Square",
    "answer_2": "Downing Street",
    "answer_3": "Times Square",
    "answer_4": "Piccadilly Circus",
    "right_answer": 3
    },
];

let currentQuestion = 0;

function init(){
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion()
}

function showQuestion(){

    if(currentQuestion >= questions.length) {

    } else {

    }
    let question = questions[currentQuestion];


    document.getElementById('question-number').innerHTML = currentQuestion +1;
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
