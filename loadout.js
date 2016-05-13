var classOne = document.getElementById("classOne");
var loadouts = document.getElementById("loadouts");
var classTwo = document.getElementById("classTwo");
var classThree = document.getElementById("classThree");
var classFour = document.getElementById("classFour")

;
    classOne.addEventListener("click", function(){
    loadouts.innerHTML = '<img src ="http://www.theblackopsiii.com/images/weapons/multiplayer/xr-2-main-3.jpg"> <p class="guninfo"> Gun Name-xr-2 </p> ';

});
    classTwo.addEventListener("click", function(){
    loadouts.innerHTML = '<img src ="http://www.theblackopsiii.com/images/weapons/multiplayer/kn-44-main-3.jpg"> <p class="guninfo"> Gun name KN-44 </p>';

});
    classThree.addEventListener("click", function(){
    loadouts.innerHTML = '<img src ="http://www.theblackopsiii.com/images/weapons/multiplayer/m8a7-main-3.jpg"> <p class="guninfo"> Gun Name M8A7';
});
    classFour.addEventListener("click", function(){
    loadouts.innerHTML = '<img src ="http://www.theblackopsiii.com/images/weapons/multiplayer/p-06-main-3.jpg"> <p class="guninfo"> Gun Name P-06 ';
});