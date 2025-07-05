let questions = [
    {
    "question": "Frage1",
    "answer_1": "Antwort1",
    "answer_2": "Antwort2",
    "answer_3": "Antwort3",
    "answer_4": "Antwort4",
    "right_answer": 3
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
    console.log('selected answer is ', selection);
    

}