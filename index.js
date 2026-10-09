for (let i = 0; i < document.querySelectorAll(".drum").length ; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
  // alert("I got Clicked!!")})
  // var audio = new Audio('audio_file.mp3');
  // audio.play();
  // console.log(this.innerText)
  let currentKey=this.innerText
  switch (currentKey) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break; 
    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;        
      
      break;
  
    default:
    console.log("Wrong Key")
  }
})
}

document.addEventListener("keypress", function(event){
  console.log(event.key)
  // alert("Key pressed");

})
document.addEventListener("keypress", function(event){
let  keyBoardKey=event.key;
 switch (KeyboardKey) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break; 
    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;        
      
      break;
  
    default:
    console.log("Wrong Key")
  }
})

function buttonAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+key).classList.remove("pressed")},200);
}


// Source - https://stackoverflow.com/a/18628124
// Posted by Uri, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-04, License - CC BY-SA 4.0


