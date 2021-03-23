import Item from "./item";
import {playAudio, bgChange} from "./fonction";

let baguetteBattrie =       new Item(document.getElementById("btn__sound-1"), "a", document.getElementById("audio-1"));
let baguetteBattrieBlague = new Item(document.getElementById("btn__sound-2"), "z", document.getElementById("audio-2"));
let caisseClaire1 =         new Item(document.getElementById("btn__sound-3"), "e", document.getElementById("audio-3"));
let caisseClaire4 =         new Item(document.getElementById("btn__sound-4"), "r", document.getElementById("audio-4"));
let charlestonFermee =      new Item(document.getElementById("btn__sound-5"), "y", document.getElementById("audio-5"));
let cymbaleRide =           new Item(document.getElementById("btn__sound-6"), "u", document.getElementById("audio-6"));
let tomAigu1 =              new Item(document.getElementById("btn__sound-7"), "i", document.getElementById("audio-7"));
let tomGrave1 =             new Item(document.getElementById("btn__sound-8"), "o", document.getElementById("audio-8"));
let tomGrave4 =             new Item(document.getElementById("btn__sound-9"), "p", document.getElementById("audio-9"));

console.log(tomGrave4);

let soundboard = [
 baguetteBattrie, 
 baguetteBattrieBlague, 
 caisseClaire1, 
 caisseClaire4, 
 charlestonFermee, 
 cymbaleRide, 
 tomAigu1, 
 tomGrave1, 
 tomGrave4];

function startPlaying() {
 window.addEventListener("keydown", event =>  {
  soundboard.forEach(instru => {
   if (event.key == instru.key) {
    playAudio(instru.audio);
    bgChange(instru.button, instru.audio);
   }
  });
 })
}

startPlaying();

