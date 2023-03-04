alert( truncate("What I'd like to tell on this topic is:", 20) );
alert( truncate("Hi everyone!", 20) )

function truncate(str, maxlength) {
  if (!str) return "Você não digitou uma frase!";

  if(str.length > +maxlength) {
    return str.slice(0, +maxlength) + "...";
  }

  return str;
}