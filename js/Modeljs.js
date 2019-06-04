/*jshint esversion: 6 */

//All Modals
var modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}
    window.onclick = function closeOnClick(event) {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
        }
    };

//Speakers List
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementById("close2");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("speakersInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("speakersUL").appendChild(li);
  }
  document.getElementById("speakersInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}


//Moderated Caucus
var myVar;

function myGoFunction() {
  setTimeout(function() {
      alert("Time's Up");
    },
    600000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

//Unmoderated Caucus
var COUNT3;
$(document).ready(function() {
  $('#btncountdown').click(function(){
    COUNT = $('seconds').val();
    cdreset3();
  });
});

var t, count;

function cdisplay3() {
  document.getElementById('timespan').innerHTML = count;
}

function countdown3() {
  cdisplay3();
  if ( count === 0){
  } else {
    count --;
    t = setTimeout(countdown, 10000);
  }
}

function cpause3() {
  clearTimeout(t);
}

function creset3(){
  cpause();
  count = COUNT3;
  cdisplay3();
}


/* Maybe add
//Date
var d = new Date();
document.getElementById("time").innerHTML = d;
*/

