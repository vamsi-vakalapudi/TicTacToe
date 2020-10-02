var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Modal script ended
// window.onload = () => {
//   document.querySelector('#myBtn').click();
// }
// Start page Edit script
let page1 = document.querySelector('.page-content-1');
let page2 = document.querySelector('.page-content-2');
let rockgame = document.querySelector('.rock-game');
let papergame = document.querySelector('.paper-game');
let scissorgame = document.querySelector('.scissor-game');
let score = document.querySelector('.score-value');
let rock = 0,
  scissor = 1,
  paper = 2;
let gameByMe=document.querySelectorAll('#myChoice');
let rockplay = document.querySelector('.rock-play');
let paperplay = document.querySelector('.paper-play');
let scissorplay = document.querySelector('.scissor-play');
let tryAgain = document.querySelector('#try-again');
let gameStatus=document.querySelector('#game-status');
let itemArr = document.querySelectorAll('#clickEvent');
let myValue;
function chooseByMe(){
  itemArr.forEach(function(elem){
    elem.addEventListener('click',function(){
      if (elem.classList.contains('choose-rock')){
        rockgame.classList.replace('d-none','d-block');
        myValue=0;
        page1.classList.replace('d-block','d-none');
        page2.classList.replace('d-none','d-block');
      } else if (elem.classList.contains('choose-scissor')){
        scissorgame.classList.replace('d-none','d-block');
        myValue=1; 
        page1.classList.replace('d-block','d-none');
        page2.classList.replace('d-none','d-block');
      } else {
        papergame.classList.replace('d-none','d-block');
        myValue=2; 
        page1.classList.replace('d-block','d-none');
        page2.classList.replace('d-none','d-block');
      }
      console.log(`myChoice - ${myValue}`); 
      statusUpdate();
    })
  })
};
function getRandom(){
  let comm= Math.floor(Math.random()*3)
  sessionStorage.setItem('comChoice',comm)
  return comm;
}

function comGame(){
  let x=getRandom();
  if (x===rock){
    rockplay.classList.replace('d-none','d-block');
  } else if (x===paper){
    paperplay.classList.replace('d-none','d-block');
  } else {
    scissorplay.classList.replace('d-none','d-block');
  }
}

let scoreValue=0;
function statusUpdate(){
if (com===rock){
    switch(myValue){
      case 0:
        gameStatus.textContent="It's Tie";
        score.textContent=scoreValue.toString();
        break;
      case 1:
        gameStatus.textContent='You Lose';
        scoreValue--;
        score.textContent=scoreValue.toString();
        break;
      case 2:
        gameStatus.textContent="You Win";
          scoreValue++;
        score.textContent=scoreValue.toString();
      }
  }else if (com===paper){
      switch(myValue){
        case 0:
          gameStatus.textContent="You Lose";
            scoreValue--;
          score.textContent=scoreValue.toString();
          break;
        case 1:
          gameStatus.textContent='You Win';
            scoreValue++;
          score.textContent=scoreValue.toString();
          break;
        case 2:
          gameStatus.textContent="It's Tie";
          score.textContent=scoreValue.toString();
      }
  }else if (com===scissor){
    switch(myValue){
      case 0:
        gameStatus.textContent="You Win";
          scoreValue++;
        score.textContent=scoreValue.toString();
        break;
      case 1:
        gameStatus.textContent="It's Tie";
        score.textContent=scoreValue.toString();
        break;
      case 2:
        gameStatus.textContent="You Lose";
          scoreValue--;
        score.textContent=scoreValue.toString();
    }
  }
  sessionStorage.setItem('score',scoreValue);
}
comGame();
let com=parseInt(sessionStorage.getItem('comChoice'));
chooseByMe();


let scoreData=parseInt(sessionStorage.getItem('score'));
tryAgain.addEventListener('click',function(e){
  window.location.reload();
})

// Adding the Mobile version of this game


