
// This code was taken from https://github.com/kayleyseow/Personality-Quiz and modifed to work with my app.

var questionCount = 0;
var result1Score = 0; // fiction
var result2Score = 0; // young adult
var result3Score = 0; // nonfiction
var result4Score = 0; // romance
var result5Score = 0; // mystery
var result6Score = 0; // thriller
var result7Score = 0; // sci-fi/fantasy


//first question
var q1a1 = document.querySelector("#oneone");
var q1a2 = document.querySelector("#onetwo");
var q1a3 = document.querySelector("#onethree");
var q1a4 = document.querySelector("#onefour");
var q1a5 = document.querySelector("#onefive");
//second question
var q2a1 = document.querySelector("#twoone");
var q2a2 = document.querySelector("#twotwo");
var q2a3 = document.querySelector("#twothree");
var q2a4 = document.querySelector("#twofour");
//third question
var q3a1 = document.querySelector("#threeone");
var q3a2 = document.querySelector("#threetwo");
var q3a3 = document.querySelector("#threethree");
var q3a4 = document.querySelector("#threefour");
//fourth question
var q4a1 = document.querySelector("#fourone");
var q4a2 = document.querySelector("#fourtwo");
var q4a3 = document.querySelector("#fourthree");
var q4a4 = document.querySelector("#fourfour");
//fifth question
var q5a1 = document.querySelector("#fiveone");
var q5a2 = document.querySelector("#fivetwo");
var q5a3 = document.querySelector("#fivethree");
var q5a4 = document.querySelector("#fivefour");
var result = document.querySelector("#results");

q1a1.addEventListener("click", result6, result7);
q1a2.addEventListener("click", result2, result4);
q1a3.addEventListener("click", result7, result6);
q1a4.addEventListener("click", result1, result3);
q1a5.addEventListener("click", result5, result5);

q2a1.addEventListener("click", result1, result2);
q2a2.addEventListener("click", result3, result7);
q2a3.addEventListener("click", result7, result4);
q2a4.addEventListener("click", result5, result3);

q3a1.addEventListener("click", result6, result1);
q3a2.addEventListener("click", result5, result4);
q3a3.addEventListener("click", result4, result6);
q3a4.addEventListener("click", result2, result1);

q4a1.addEventListener("click", result6, result5);
q4a2.addEventListener("click", result4, result2);
q4a3.addEventListener("click", result2, result7);
q4a4.addEventListener("click", result3, result1);

q5a1.addEventListener("click", result3, result6);
q5a2.addEventListener("click", result4, result2);
q5a3.addEventListener("click", result1, result3);
q5a4.addEventListener("click", result7, result5);


function result1() {
  if (questionCount < 5) {
    result1Score++;
    questionCount++;
  }

  if (questionCount >= 5) {
    updateResult();
  }
}

function result2() {
  if (questionCount < 5) {
    result2Score++;
    questionCount++;
  }

  if (questionCount >= 5) {
    updateResult();
  }
}

function result3() {
  if (questionCount < 5) {
    result3Score++;
    questionCount++;
  }

  if (questionCount >= 5) {
    updateResult();
  }
}

function result4() {
  if (questionCount < 5) {
    result4Score++;
    questionCount++;
  }

  if (questionCount >= 5) {
    updateResult();
  }
}

function result5() {
  if (questionCount < 5) {
    result5Score++;
    questionCount++;
  }

  if (questionCount >= 5) {
    updateResult();
  }
}

function result6() {
  if (questionCount < 5) {
    result6Score++;
    questionCount++;
  }

  if (questionCount >= 5) {
    updateResult();
  }
}

function result7() {
  if (questionCount < 5) {
    result7Score++;
    questionCount++;
  }

  if (questionCount >= 5) {
    updateResult();
  }
}

let message;


function updateResult() {
  if (result1Score >= 2) {
    message = "You should try reading fiction books! Scroll down or click on the navigation bar above to see the fiction recommendations.";
  } else if (result2Score >= 2) {
     message =  "You should try reading young adult books! Scroll down or click on the navigation bar above to see the young adult recommendations.";
  } else if (result3Score >= 2) {
    message  = "You should try reading non-fiction books! Scroll down or click on the navigation bar above to see the non-fiction recommendations.";
  } else if (result4Score >= 2) {
    message = "You should try reading romance books! Scroll down or click on the navigation bar above to see the romance recommendations.";
  } else if (result5Score >= 2) {
    message = "You should try reading mystery books! Scroll down or click on the navigation bar above to see the mystery recommendations.";
  } else if (result6Score >= 2) {
    message = "You should try reading thriller books! Scroll down or click on the navigation bar above to see the thriller recommendations.";
  } else if (result7Score >= 2) {
    message = "You should try reading sci-fi or fantasy books! Scroll down or click on the navigation bar above to see the sci-fi/fantasy recommendations.";
  } else {
    message = "Hmm... Your answers were a bit conflicting. Try retaking the quiz one more time by refreshing the page!";
  }
}

let submit = document.querySelector("#submit");

submit.onclick = () => {
    results.innerText = message;
}


// this is my code

let button = document.querySelector('#button');
let form = document.querySelector('#form');

form.style.display = 'none';

button.onclick = () => {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
};
   

let descriptions = document.querySelectorAll('.description');
let covers = document.querySelectorAll('.carousel-item');

function hideAll() {
    descriptions.forEach(function(el) {
      el.style.display = 'none';
    });
  }

  hideAll();

  covers.forEach(function(el) {
    el.onclick = (e) => {

      hideAll();

      switch (e.target.getAttribute('id')) {
        case 'heavenimg':
          document.querySelector('#heaven').style.display = 'block';
          break;
        case 'ladyimg':
          document.querySelector('#lady').style.display ='block';
          break;
        case 'divineimg':
            document.querySelector('#divine').style.display = 'block';
            break;
          case 'vanessaimg':
            document.querySelector('#vanessa').style.display = 'block';
            break;
          case 'klaraimg':
            document.querySelector('#klara').style.display = 'block';
            break;
          case 'mungoimg':
            document.querySelector('#mungo').style.display = 'block';
            break;
          case 'telegraphimg':
            document.querySelector('#telegraph').style.display = 'block';
            break;
          case 'legendimg':
            document.querySelector('#legend').style.display = 'block';
            break;
          case 'rageimg':
            document.querySelector('#rage').style.display = 'block';
            break;
          case 'spadesimg':
            document.querySelector('#spades').style.display = 'block';
            break;
          case 'livingimg':
            document.querySelector('#living').style.display = 'block';
            break;
          case 'hmartimg':
            document.querySelector('#hmart').style.display = 'block';
            break;
          case 'earthimg':
            document.querySelector('#earth').style.display = 'block';
            break;
          case 'anthropoceneimg':
            document.querySelector('#anthropocene').style.display = 'block';
            break;
          case 'cultishimg':
            document.querySelector('#cultish').style.display = 'block';
            break;
          case 'whisperimg':
            document.querySelector('#whisper').style.display = 'block';
            break;
          case 'witchesimg':
            document.querySelector('#witches').style.display = 'block';
            break;
          case 'titaniumimg':
            document.querySelector('#titanium').style.display = 'block';
            break;
          case 'seastarsimg':
            document.querySelector('#seastars').style.display = 'block';
            break;
          case 'kaikeyiimg':
            document.querySelector('#kaikeyi').style.display = 'block';
            break;
          case 'coldimg':
            document.querySelector('#cold').style.display = 'block';
            break;
          case 'comedyimg':
            document.querySelector('#comedy').style.display = 'block';
            break;
          case 'sevenimg':
            document.querySelector('#seven').style.display = 'block';
            break;
          case 'delilahimg':
            document.querySelector('#delilah').style.display = 'block';
            break;
          case 'charmimg':
            document.querySelector('#charm').style.display = 'block';
            break;
          case 'violinimg':
            document.querySelector('#violin').style.display = 'block';
            break;
          case 'slowfireimg':
            document.querySelector('#slowfire').style.display = 'block';
            break;
          case 'winterimg':
            document.querySelector('#winter').style.display = 'block';
            break;
          case 'fortuneimg':
            document.querySelector('#fortune').style.display = 'block';
            break;
          case 'veraimg':
            document.querySelector('#vera').style.display = 'block';
            break;
          case 'onlyoneimg':
            document.querySelector('#onlyone').style.display = 'block';
            break;
          case 'viceimg':
            document.querySelector('#vice').style.display = 'block';
            break;
          case 'executionimg':
            document.querySelector('#execution').style.display = 'block';
            break;
          case 'sugarimg':
            document.querySelector('#sugar').style.display = 'block';
            break;
          case 'razorimg':
            document.querySelector('#razor').style.display = 'block';
            break;
            
      }
    }
  });


    


  