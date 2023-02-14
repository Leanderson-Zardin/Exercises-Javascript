let hour = prompt('Que horas são?', '');
let isWeekend = true
if (hour < 10 || hour > 18 || isWeekend) {
  alert('The office is closed!');
} else {
  alert('The office is open!');
}