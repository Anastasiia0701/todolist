window.onload=function(){
	

	var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//добавление по нажатию на кнопку
document.getElementById('add_item').onclick=function(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("in").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something you want to do");
  } else {
    document.getElementById("Myul").appendChild(li);
  }
  document.getElementById("in").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u26D2");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

//удаление
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

}
	