//TextArea
var modal = document.getElementById("boxModal");
var btn = document.getElementById("textBoxBtn");
btn.onclick = function() {
  modal.style.display = "block";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
$(document).ready(function() {
  $(".toggle-modal").click(function() {
    $("#boxModal").modal('toggle');
  });
});
$(document).ready(function() {
  $(".show-text").click(function() {
    $('#boxModal').find(".lots-of-text").toggle();
    $('#boxModal').modal('handleUpdate');
  });
});

//Speakers List
var modal = document.getElementById("speakersListModal");
var btn = document.getElementById("speakersListBtn");
var span = document.getElementById("close2")[0];
btn.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsById("close2");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

/*Modal Button alternative:

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

function openModal() {
  modal.style.display ='block';
}

function closeModal() {
  modal.style.display ='none';
}

function outsideClick(e) {
  if(e.target == modal){
  modal.style.display ='none';
}
}
*/

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

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
var modal = document.getElementById("myModeratedModal");
var btn = document.getElementById("myModeratedBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
var modal = document.getElementById("myUnModeratedModal");
var btn = document.getElementById("myUnModeratedBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
