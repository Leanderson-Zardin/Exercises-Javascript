let firstName = prompt('Qual seu nome?', '');
let lastName = prompt('Qual seus sobrenome?', '');
let nickName = prompt('Qual seus apelido?', '');
alert(firstName || lastName || nickName || 'Anonymous!');