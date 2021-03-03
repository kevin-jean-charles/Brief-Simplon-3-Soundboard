const btn1 = document.getElementById("btn__sound-1");
const btn2 = document.getElementById("btn__sound-2");
const btn3 = document.getElementById("btn__sound-3");
const btn4 = document.getElementById("btn__sound-4");
const btn5 = document.getElementById("btn__sound-5");
const btn6 = document.getElementById("btn__sound-6");
const btn7 = document.getElementById("btn__sound-7");
const btn8 = document.getElementById("btn__sound-8");
const btn9 = document.getElementById("btn__sound-9");

const audio1 = document.getElementById("audio-1");
const audio2 = document.getElementById("audio-2");
const audio3 = document.getElementById("audio-3");
const audio4 = document.getElementById("audio-4");
const audio5 = document.getElementById("audio-5");
const audio6 = document.getElementById("audio-6");
const audio7 = document.getElementById("audio-7");
const audio8 = document.getElementById("audio-8");
const audio9 = document.getElementById("audio-9");

const tabBtn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

const tabAudi = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9];

const tabCode = [65, 90, 69, 82, 89, 85, 73, 79, 80];


window.addEventListener("keydown", playAudio);

function playAudio(key) {
  stopPlay();
  switch (key.keyCode) {
    //a
    case 65:
      audio1.play();
      btn1.classList.add('sound-active');
      setTimeout(stopColor, 4500);
      break;
    
    //z
    case 90:
      audio2.play();
      btn2.classList.add('sound-active');
      setTimeout(stopColor, 4000);
      break;

    //e
    case 69:
      audio3.play();
      btn3.classList.add('sound-active');
      setTimeout(stopColor, 500);
      break;

    //r
    case 82:
      audio4.play();
      btn4.classList.add('sound-active');
      setTimeout(stopColor, 1500);
      break;

    //y
    case 89:
      audio5.play();
      btn5.classList.add('sound-active');
      setTimeout(stopColor, 1000);
      break;

    //u
    case 85:
      audio6.play();
      btn6.classList.add('sound-active');
      setTimeout(stopColor, 10000);
      break;
  
    //i
    case 73:
      audio7.play();
      btn7.classList.add('sound-active');
      setTimeout(stopColor, 500);
      break;

    //o
    case 79:
      audio8.play();
      btn8.classList.add('sound-active');
      setTimeout(stopColor, 1000);
      break;

    //p
    case 80:
      audio9.play();
      btn9.classList.add('sound-active');
      setTimeout(stopColor, 1000);
      break;
  }
}

function stopPlay() {
  tabAudi.forEach((audio) =>{
    audio.pause();
    audio.currentTime = 0;
    setTimeout(stopColor, 4000);
  })

}

function stopColor() {
  tabBtn.forEach((btn) => {
    btn.classList.remove('sound-active')
  })
}