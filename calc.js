// these are variables that contain the elements 
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display'); 
var dropdown = document.getElementById("dropdown");

// This what makes the buttons work when you click them
button.addEventListener("click", doMath);

//what makes adding work
function doMath() {
    //what helps make the addition thing work and to add not do stupid things
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    //what makes subtraction work
      if  (dropdown.value == "-"){  
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    //what makes multiplyng work
      if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    //what makes divsion work
      if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    //what makes % work
    if(dropdown.value== "%"){
      answer = parseInt(input1.value) % parseInt(input2.value);
      display.innerHTML = answer;
    }
    //what makes ^ work
    if(dropdown.value== "^"){
      answer = Math.pow(parseInt(input1.value), parseInt(input2.value))
      display.innerHTML = answer;
    }
} 

 