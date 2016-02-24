var allQuestions = [{question: "What is the biggest city in the world?", 
choices: ["Tokyo", "Hong-Kong", "New York", "Sao Paulo"], correctAns: 0}, 
{question: "How many minutes are in a year?", choices: ["25,640", "122,640", "720,000", "525,600"], correctAns: 3}, 
{question: "What is the tallest building in the world?", choices: ["Shanghai Tower", "Burj Khalifa", "Abraj Al-Bait Clock Tower", "Ping An Finance Centre"], correctAns: 1}];
var question = document.getElementById("question");
var options = document.getElementById("options");
var curr_q = 0;
var curr_ans_code;
var children = options.children;
var score = 0;
var next = document.getElementById("next");
for (var i = 0; i < children.length; i++){
  children[i].addEventListener("click", load_question, true);
}

function load_question() {
  store_answer();
  next_question();
}

function store_answer() {
  var e = event.target;
  console.log(e.innerHTML);
  if (curr_q < allQuestions.length) {
   for (var z = 0; z < children.length; z++) {
    if (z == curr_ans_code && allQuestions[curr_q].choices[curr_ans_code] == e.innerHTML) {
      score += 10;
    }
   }
  }
  curr_q++;
  //then insert that number into allQuestions.correctAns and see if they are the same
}

function next_question() {
  var counter;
  //will complete once for each question, when the function is called
  if (curr_q < allQuestions.length) {
    var option_text;
  	//while j is less than how many children of options there are, run the following             
  	for (var j = 0; j < children.length; j++) {
  		children[j].innerHTML = allQuestions[curr_q].choices[j];
      option_text = children[j].innerHTML.indexOf(' ');
      console.log(option_text);
      counter = 0;

      while (option_text !== -1) {
        counter++
        option_text = children[j].innerHTML.indexOf(' ', option_text + 1);
      }
      
      if (counter > 2) {
        children[j].style.marginBottom = "7%";
      }
    }      
  	
    question.innerHTML = allQuestions[curr_q].question;
    curr_ans_code = allQuestions[curr_q].correctAns;
    

  } 
  else {
    question.innerHTML = "Your score is: " + score;

    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = " ";
      children[j].style.cursor = "default";
    }
  } 
}

function color_select() {
	e = event.target;
  console.log("hey");
	//need to iterate through options and set all to background none
	e.style.background = "yellow";
}

window.onload = function() {
	next_question();

}

