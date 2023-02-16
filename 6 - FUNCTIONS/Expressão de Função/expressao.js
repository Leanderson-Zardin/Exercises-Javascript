/*
function ask(question, yes, no) {
  if(confirm(question)) {
    yes();
  } else {
    no();
  }
}

  function showOk() {
    alert("You Agreed!");
  }

  function showCancel() {
    alert("You canceled the execution!");
  }

  ask("Do you agree?", showOk, showCancel);
*/

function ask(question, yes, no) {
  if(confirm(question)) yes();
  else no();
}

ask(
  "Do you Agree?",
  function() {alert("You Agreed!");},
  function() {alert("You canceled the execution!");}
);