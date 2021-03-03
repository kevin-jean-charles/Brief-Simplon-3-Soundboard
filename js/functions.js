
//DEclatration des sound
const btn1 = document.getElementById("btn__sound-1");
const btn2 = document.getElementById("btn__sound-2");
const btn3 = document.getElementById("btn__sound-3");
const btn4 = document.getElementById("btn__sound-4");
const btn5 = document.getElementById("btn__sound-5");
const btn6 = document.getElementById("btn__sound-6");
const btn7 = document.getElementById("btn__sound-7");
const btn8 = document.getElementById("btn__sound-8");
const btn9 = document.getElementById("btn__sound-9");


//Declaration des audios
const audio1 = document.getElementById("audio-1");
const audio2 = document.getElementById("audio-2");
const audio3 = document.getElementById("audio-3");
const audio4 = document.getElementById("audio-4");
const audio5 = document.getElementById("audio-5");
const audio6 = document.getElementById("audio-6");
const audio7 = document.getElementById("audio-7");
const audio8 = document.getElementById("audio-8");
const audio9 = document.getElementById("audio-9");

//Tab des boutons
const tabBtn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

//tab des sons
const tabAudi = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9];

//tab de code des touche du clavier
const tabKey = [65, 90, 69, 82, 89, 85, 73, 79, 80];
/////////////////////////////////////////


//Fonction qui demare tout !!!!!!
function startPlaying() {  
  window.addEventListener("keydown", testKey);
}

//fonction qui test les touches
function testKey (key){
  for (let index = 0; index <= tabKey.length; index++){
    if(key.keyCode == tabKey[index]){
      playAudio(index);
      bgChange(index);
    }
  }
}

//function qui joue
function playAudio(index) {
  stopPlay(index);
  tabAudi[index].play();
}

//fonction qui stop la musique
function stopPlay() {
  tabAudi.forEach((audio) =>{
    audio.pause();
    audio.currentTime = 0;
  });
}
//fonction qui change la couleur
function bgChange(index) {

  tabBtn[index].classList.add("sound-active");
  stopColor();
}
//fonction qui arrete la couleur 
function stopColor() {
  setTimeout(() =>{tabBtn[0].classList.remove("sound-active")}, 5000);
  setTimeout(() =>{tabBtn[1].classList.remove("sound-active")}, 5000);
  setTimeout(() =>{tabBtn[2].classList.remove("sound-active")}, 1000);
  setTimeout(() =>{tabBtn[3].classList.remove("sound-active")}, 1000);
  setTimeout(() =>{tabBtn[4].classList.remove("sound-active")}, 1000);
  setTimeout(() =>{tabBtn[5].classList.remove("sound-active")}, 10000);
  setTimeout(() =>{tabBtn[6].classList.remove("sound-active")}, 4000);
  setTimeout(() =>{tabBtn[7].classList.remove("sound-active")}, 4000);
  setTimeout(() =>{tabBtn[8].classList.remove("sound-active")}, 4000);
}


export { startPlaying, testKey, playAudio, bgChange, stopPlay, stopColor }