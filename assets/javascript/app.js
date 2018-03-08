
$("#startB").append("Start");

var timer
var score = 0;
// var $question = $('.question');
// var $choices = $('.choices');
// var $answer = $('.answer');
var correct = 0;
var incorrect = 0;


//When start button is pushed, the quiz will load and the timer will start
$("#startB").click(function(load){ 
    $("#startB").hide();
    $("#quest").text("Are you an emoji master? Answer the following questions to find out?");
    setTimeout(quizTime, 1000 * 5);
    
    //TO-DO: show timer on screen
    $("#timer").text(setTimeout);


    function quizTime(){
        console.log("time is up!")
    }
//    var content = [
//        {
//            "question":"hmmmm???x1","choices":["choice 1", "choice 2", "choice 3","choice 4"],"answer" :"choice 1"
//        },

//        {
//             "question":"hmmmm???x2","choices":["choice 1", "choice 2", "choice 3","choice 4"], "answer":"choice 2"
//     },
    
//     {
//         "question":"hmmmm???x3","choices":["choice 1", "choice 2", "choice 3","choice 4"], "answer":"choice 3"
//     }

//     ]

//   console.log(content[2].);

questList = ["question 1 ", "question 2 ", "question 3 "]
answerList =  ["answer 1", "answer 2", "answer 3"]
choices1 = ["choice 1", "choice 2", "choice 3","choice 4"]
choices2 = ["choice 1", "choice 2", "choice 3","choice 4"]
choices3 = ["choice 1", "choice 2", "choice 3","choice 4"]
var questionDiv = $("<div class='question'>")
var quest1 = questList[0];
var post1=$("<p>").html(quest1 + choices1.innerHTML);

console.log(questList[1]);
console.log(answerList[1]);
console.log(choices1.innerHTML);
questionDiv.append(post1);
});

