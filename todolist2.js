var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');
    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);

function randomColor(){
  document.getElementById("liverpool").style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
}