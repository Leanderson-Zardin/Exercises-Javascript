let age = prompt('How old are you?', '')
if (age < 3) {
  alert('Hi Baby!');
} else if (age < 18){
  alert('Hello!');
} else if (age < 100) {
  alert('Greetings!');
} else {
  alert('What an unusual age!');
}