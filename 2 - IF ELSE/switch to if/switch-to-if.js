/* CÓDIGO SWITCH
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

// CÓDIGO IF ELSE

let browser = prompt("digite o browser de sua preferência:", "");

if(browser === "Edge") {
  alert("You've got the Edge!");
} else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari!' || browser === 'Opera') {
  alert("Okay we support these browsers too!");
} else {
  alert("We hope that this page looks ok!");
}