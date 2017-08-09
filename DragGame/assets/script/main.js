// Selecting various required elements for manipulation
var question = document.querySelector('#question'),
  option2 = document.getElementById("option2"),
  option1 = document.getElementById("option1"),
  option3 = document.getElementById("option3"),
  option4 = document.getElementById("option4"),
  options = document.querySelectorAll(".options img"),
  dropArea = document.querySelector("#answer"),
  submitBtn = document.querySelector("#btn-submit"),
  getOptionBox = document.querySelector('.options'),
  reloadBtn = document.getElementById("btn-reset"),
  progess = document.getElementById("progress");
// Useful variables
var answer;
var tracker = 0;
var lastAnswer;

// Running the main function
main();

// Main function declared
function main() {
  next();
  submitAnswer();
  dragPreety();
}

// Reset function for the reset button
function reset() {
  reloadBtn.addEventListener('click', function() {
    window.location.reload();
  })
}
// Function that keeps track of the total progress
function progressTracker() {
  var totalQuestion = 13;
  var value = (tracker / totalQuestion) * 100;
  progress.textContent = Math.ceil(value);
}

// Function that adds the functionality of draggable in the tags
function dragFunctionAll() {
  for (var i = 0; i < options.length; i++) {
    options[i].setAttribute('draggable', 'true');
    options[i].setAttribute('ondragstart', 'drag(event)');
  }
}

/*
submitAnswer function provides the click funcitonality to the submit button on
the game. If the submitted answer is correct, it calls the next level else display
a red background.
*/
function submitAnswer() {
  submitBtn.addEventListener("click", function() {
    if (dropArea.hasChildNodes()) {
      var droppedImg = document.querySelector('#answer img').getAttribute('src');
      var correctAnswer = answer.getAttribute('src');
      if (droppedImg === correctAnswer) {
        next();
      } else {
        dropArea.style.background = "red";
      }
    }
  })
}
/*
RelistItems relists the items dragged into the answer and puts all the options to
a starting position of the answers box.
*/
function relistItems() {
  dropArea.removeChild(lastAnswer);
  getOptionBox.appendChild(lastAnswer);
}

/*
dragPreety function calls the function enter when an elements is dragged over the answer box.
Also, it calls leave function if an element is dragged out the answer box.
*/
function dragPreety() {
  dropArea.addEventListener("dragenter", enter, false);
  dropArea.addEventListener("dragleave", leave, false);
}

/*
enter function changes the background and border of the answer box.
*/
function enter() {
  dropArea.style.background = "#03C2B1";
  dropArea.style.border = "3px dashed #0CA9CA"

}
/*
leave function reverts the background color and border style.
*/
function leave() {
  dropArea.style.background = "none";
  dropArea.style.border = "2px dashed #458D9B";
}

// Contents of first level
function first() {
  // Question to be displayed
  question.textContent = "Identify the chicken from the box and drag it to the answer box.";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/dog.jpg');
  option2.setAttribute('src', './assets/img/chicken.jpg');
  option3.setAttribute('src', './assets/img/cat.jpg')
  option4.setAttribute('src', './assets/img/cow.jpg');
  // Correct answer for this level
  answer = option2;
}

// Contents of second level
function second() {
  // Question to be displayed
  question.textContent = "Drag apple to the box";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/banana.jpg');
  option2.setAttribute('src', './assets/img/orange.jpg');
  option3.setAttribute('src', './assets/img/apple.jpg')
  option4.setAttribute('src', './assets/img/grapes.jpg');
  // Correct answer for this level
  answer = option3;
}

// Contents of third level
function third() {
  // Question to be displayed
  question.textContent = "Which of the following is a tree?";
  option1.setAttribute('src', './assets/img/bush.jpg');
  option2.setAttribute('src', './assets/img/plant.jpg');
  option3.setAttribute('src', './assets/img/tree.jpg');
  option4.setAttribute('src', './assets/img/grass.jpg');
  // Correct answer for this level
  answer = option3;
}

// Contents of fourth level
function fourth() {
  // Question to be displayed
  question.textContent = "Which of the following is a Lion?";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/tiger.jpg');
  option2.setAttribute('src', './assets/img/horse.jpg');
  option3.setAttribute('src', './assets/img/lion.jpg');
  option4.setAttribute('src', './assets/img/zebra.jpg');
  // Correct answer for this level
  answer = option3;
}

// Contents of fifth level
function fifth() {
  // Question to be displayed
  question.textContent = "Do you know which is the biggest Mammel?";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/whales.jpg');
  option2.setAttribute('src', './assets/img/dolphin.jpg');
  option3.setAttribute('src', './assets/img/giraffe.jpg');
  option4.setAttribute('src', './assets/img/elephant.JPG');
  // Correct answer for this level
  answer = option1;
}

// Contents of sixth level
function sixth() {
  // Question to be displayed
  question.textContent = "Which of the listed birds is a humming bird?";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/bird1.jpg');
  option2.setAttribute('src', './assets/img/eagle.jpg');
  option3.setAttribute('src', './assets/img/hbird.jpg');
  option4.setAttribute('src', './assets/img/parrot.jpg');
  // Correct answer for this level
  answer = option3;
}

// Contents of seventh level
function seventh() {
  // Question to be displayed
  question.textContent = "Identify the cute panda";
  option1.setAttribute('src', './assets/img/bear.jpg');
  option2.setAttribute('src', './assets/img/panda.jpg');
  option3.setAttribute('src', './assets/img/redPanda.jpg');
  option4.setAttribute('src', './assets/img/bbear.jpg');
  // Correct answer for this level
  answer = option2;
}

// Contents of eighth level
function eighth() {
  // Question to be displayed
  question.textContent = "Which of the listed animals is a rabbit?";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/mouse.jpg');
  option2.setAttribute('src', './assets/img/rabbit.jpg');
  option3.setAttribute('src', './assets/img/redPanda.jpg');
  option4.setAttribute('src', './assets/img/kitty.jpg');
  // Correct answer for this level
  answer = option2;
}

// Contents of ninth level
function ninth() {
  // Question to be displayed
  question.textContent = "Which of the following is a frog?";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/tadpole.jpg');
  option2.setAttribute('src', './assets/img/salamander.jpg');
  option3.setAttribute('src', './assets/img/frog.jpg');
  option4.setAttribute('src', './assets/img/earthworm.jpg');
  // Correct answer for this level
  answer = option3;
}

// Contents of tenth level
function tenth() {
  // Question to be displayed
  question.textContent = "Which of the following is a fox";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/squirrel.png');
  option2.setAttribute('src', './assets/img/fox.jpg');
  option3.setAttribute('src', './assets/img/dog.jpg');
  option4.setAttribute('src', './assets/img/bbear.jpg');
  // Correct answer for this level
  answer = option2;
}

// Contents of eleventh level
function eleventh() {
  // Question to be displayed
  question.textContent = "Identify a tortoise";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/caterpiller.jpg');
  option2.setAttribute('src', './assets/img/slug.jpg');
  option3.setAttribute('src', './assets/img/snail.jpg');
  option4.setAttribute('src', './assets/img/tortoise.jpg');
  // Correct answer for this level
  answer = option4;
}

// Contents of twelfth level
function twelfth() {
  // Question to be displayed
  question.textContent = "Which is the following is a rattlesnake";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/rattlesnake.jpg');
  option2.setAttribute('src', './assets/img/snake.jpg');
  option3.setAttribute('src', './assets/img/vsnake.jpg');
  option4.setAttribute('src', './assets/img/ssnake.jpg');
  // Correct answer for this level
  answer = option1;
}

// Contents of thirteenth level
function thirteenth() {
  // Question to be displayed
  question.textContent = "From the list of birds, identify owl.";
  // Image options to be displayed
  option1.setAttribute('src', './assets/img/pigeon.jpg');
  option2.setAttribute('src', './assets/img/peacock.jpg');
  option3.setAttribute('src', './assets/img/owl.jpg');
  option4.setAttribute('src', './assets/img/crow.png');
  // Correct answer for this level
  answer = option3;
}

/*
This function is called at the end of the program
*/
function complete() {
  // Select the bigBox that contans the answers and questions
  var bigBox = document.getElementsByClassName("bigBox");
  // Select the question and progress meter to hide them
  question = document.querySelectorAll('div h2');
  // Remove the contents inside of the dropArea
  dropArea.remove();
  getOptionBox.remove();
  question[0].textContent = "";
  question[1].textContent = "";
  // Change the background of the box
  bigBox[0].style.background = "#rgba(126,179,70,0.8)";
  // Congratulations message at the end
  bigBox[0].innerHTML = "<h1 style='margin: 190px; text-align:center; font-size:3rem; text-shadow:none'>Congratulations! <br/>Progress: 100%</h1>"
}

/*
next function calls the next level of the quiz
*/
function next() {
  // Calls the progress meter
  progressTracker();
  reset();
  // Icrements the tracker counter to keep track of the level
  tracker++;
  // Assigns the value of last answer
  lastAnswer = answer;
  // Adds the function of draggable on every img element
  dragFunctionAll();
  // Calls relistItems only if the tracker is not equal to 1
  if (tracker !== 1) {
    relistItems();
  }
  // Leave function resets the background and border to the original style
  leave();
  // Switch calls the corresponding level based on the value of the tracker
  switch (tracker) {
    case 1:
      first();
      break;
    case 2:
      second();
      break;
    case 3:
      third();
      break;
    case 4:
      fourth();
      break;
    case 5:
      fifth();
      break;
    case 6:
      sixth();
      break;
    case 7:
      seventh();
      break;
    case 8:
      eighth();
      break;
    case 9:
      ninth();
      break;
    case 10:
      tenth();
      break;
    case 11:
      eleventh();
      break;
    case 12:
      twelfth();
      break;
    case 13:
      thirteenth();
      break;
    default:
      complete();
  }
  
}
