//jouer audio
export function playAudio(audio) {
 stopAudio(audio);
 audio.play();
}

//arreter audio
function stopAudio(audio) {
 audio.currentTime = 0;
 audio.pause();
}

//changer bg
export function bgChange(button, audio) {
 if (!(button.classList.contains("sound-active"))) {
  button.classList.add("sound-active");
  console.log("ok2");
 }
 audio.addEventListener("ended", () => {
  button.classList.remove("sound-active");
 })
}

