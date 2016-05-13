//what makes the variable work.
var item1 = document.getElementById("liverpool");
var item2 = document.getElementById("StevenGerrard");
var item3 = document.getElementById("Stevengerrardsnewboots");
var item4 = document.getElementById("MaderaRoja");

//makes the info work and pop out
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

// its my info
item1.addEventListener("click", function(){
    info1.innerHTML = "Liverpool is my favorite soccer team";
    info2.innerHTML = "I became a fan when they played AC MILAN because they made a historical come back";
    info3.innerHTML = "Theres a no to racism sign because of when balloteli first joined people were being racist towards him    ";
});
  
// info 2                    
item2.addEventListener("click", function(){;''
    info1.innerHTML = "Steven Gerrard is my favorite soccer player ever";
    info2.innerHTML = "i saw him play in august when he changed teams and that team was LA Galaxy ";
    info3.innerHTML = "He is known mostly because of his long beuatiful shots";
});

//info 3,
item3.addEventListener("click", function(){
    info1.innerHTML = "These are his new shoes he recently made";
    info2.innerHTML = "He made them to play on his last game With liverpool";
    info3.innerHTML = "I dont think there for sale sadly";
});

//info 4e
item4.addEventListener("click", function(){
    info1.innerHTML = "This is the last soccer club i have played for ";
    info2.innerHTML = "My number for this team was 27 and thats why my user name has 27 on it";
    info3.innerHTML = "I played every position on this team mostly striker";
});

