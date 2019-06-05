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
var speakerInput = document.getElementById("new-speaker"); //Add a new speaker
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteSpeakerHolder = document.getElementById("incomplete-speaker"); //ul of #incomplete-tasks
var completedSpeakerHolder = document.getElementById("completed-speaker"); //completed-tasks
var createNewSpeakerElement = function(speakerString) {
  var listItem = document.createElement("li");
  //input (checkbox)
  var checkBox = document.createElement("input"); //checkbx
  //label
  var label = document.createElement("label"); //label
  //input (text)
  var deleteButton = document.createElement("button"); //delete button

  label.innerText = speakerString;
  checkBox.type = "checkbox";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
}

var addSpeaker = function() {
  console.log("Add Speaker...");
  //Create a new list item with the text from the #new-task:
  var listItem = createNewSpeakerElement(speakerInput.value);

  //Append listItem to incompleteTaskHolder
  incompleteSpeakerHolder.appendChild(listItem);
  bindSpeakerEvents(listItem, SpeakerCompleted);

  var deleteSpeaker = function() {
    console.log("Delete Speaker...");

    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);

  }
  //Mark speaker completed
  var speakerCompleted = function() {
    console.log("Complete Speaker...");

    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedSpeakerHolder.appendChild(listItem);
    bindTaskEvents(listItem, speakerIncomplete);

  }

  var speakerIncomplete = function() {
    console.log("Incomplete Speaker...");

    speakerInput.value = "";
  }
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}



var ajaxRequest = function() {
  console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

var bindSpeakerEvents = function(speakerListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  //select ListItems children
  var checkBox = speakerListItem.querySelector("input[type=checkbox]");
  var editButton = speakerListItem.querySelector("button.edit");
  var deleteButton = speakerListItem.querySelector("button.delete");
}

for (var i = 0; i < incompleteSpeakerHolder.children.length; i++) {

  //bind events to list items chldren(tasksCompleted)
  bindSpeakerEvents(incompleteSpeakerHolder.children[i], speakerCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedSpeakerHolder.children.length; i++) {
  //bind events to list items chldren(tasksIncompleted)
  bindSpeakerEvents(completedSpeakerHolder.children[i], speakerIncomplete);
}

//Timer
(function(){
$("#timerBtn1").click(function(){
switch($(this).html().toLowerCase())
{
case "start":
$("#t").timer({
action:'start',
seconds: 0
});
$(this).html("Pause");
$("input[name='s']").attr("disabled","disabled");
$("#t").addClass("badge-important");
break;

case "resume":
$("#t").timer(
'resume');
$(this).html(
"Pause")
$("#t").addClass(
"badge-important");
break;

case "pause":
$("#t").timer({action: 'pause'});
$(this).html("Resume")
$("#t").removeClass("badge-important");
break;

}
});
})();

$("#t").data('state');

$("#t").timer(options);
$("#t").timer({
format:'%m',
countdown:'false',
editable:'True',
});

$("#t").timer('pause');
$("#t").timer('resume');


//Moderated Caucus
(function() {
  $("#timerBtn2").click(function() {
    switch ($(this).html().toLowerCase()) {
      case "start":
        $("#t2").timer({
          action: 'start',
          seconds: 0
        });
        $(this).html("Pause");
        $("input[name='s']").attr("disabled", "disabled");
        $("#t2").addClass("badge-important");
        break;

      case "resume":
        $("#t2").timer(
          'resume');
        $(this).html(
          "Pause")
        $("#t2").addClass(
          "badge-important");
        break;

      case "pause":
        $("#t2").timer({
          action: 'pause'
        });
        $(this).html("Resume")
        $("#t2").removeClass("badge-important");
        break;

    }
  });
})();

$('#t2').timer({
  duration: '',
  callback: function() {
    alert('Time up!');
  }
});

$("#t2").data('state');

$("#t2").timer(options);
$("#t2").timer({
  format: '%m',
  countdown: 'True',
  editable: 'False',
});

$("#t2").timer('remove');
$("#t2").timer('pause');
$("#t2").timer('resume');

(function() {
  $("#timerBtn4").click(function() {
    switch ($(this).html().toLowerCase()) {
      case "start":
        $("#t4").timer({
          action: 'start',
          seconds: 0
        });
        $(this).html("Pause");
        $("input[name='s']").attr("disabled", "disabled");
        $("#t4").addClass("badge-important");
        break;

      case "resume":
        $("#t4").timer(
          'resume');
        $(this).html(
          "Pause")
        $("#t4").addClass(
          "badge-important");
        break;

      case "pause":
        $("#t4").timer({
          action: 'pause'
        });
        $(this).html("Resume")
        $("#t3").removeClass("badge-important");
        break;

    }
  });
})();

$('#t4').timer({
  duration: '',
  callback: function() {
    alert('Time up!');
  }
});

$("#t4").data('state');

$("#t4").timer(options);
$("#t4").timer({
  format: '%m',
  countdown: 'True',
  editable: 'False',
});

$("#t4").timer('remove');
$("#t4").timer('pause');
$("#t4").timer('resume');


//Unmoderated Caucus
(function(){
$("#timerBtn1").click(function(){
switch($(this).html().toLowerCase())
{
case "start":
$("#t4").timer({
action:'start',
seconds: 0
});
$(this).html("Pause");
$("input[name='s']").attr("disabled","disabled");
$("#t4").addClass("badge-important");
break;

case "resume":
$("#t4").timer(
'resume');
$(this).html(
"Pause")
$("#t4").addClass(
"badge-important");
break;

case "pause":
$("#t4").timer({action: 'pause'});
$(this).html("Resume")
$("#t4").removeClass("badge-important");
break;

}
});
})();

$("#t4").data('state');

$("#t4").timer(options);
$("#t4").timer({
format:'%m',
countdown:'false',
editable:'True',
});

$("#t4").timer('pause');
$("#t4").timer('resume');


/* Maybe add
//Date
var d = new Date();
document.getElementById("time").innerHTML = d;
*/

