const screen = document.getElementById("screen");

function appendValue(value){
  screen.value += value;
}

function clearScreen(){
  screen.value = "";
}

function backspace(){
  screen.value = screen.value.slice(0, -1);
}

function calculate(){
  try{
    screen.value = eval(screen.value);
  }catch{
    screen.value = "Error";
  }
}

function percentage(){
  try{
    screen.value = eval(screen.value) / 100;
  }catch{
    screen.value = "Error";
  }
}

function plusMinus(){
  if(screen.value){
    screen.value = eval(screen.value) * -1;
  }
}