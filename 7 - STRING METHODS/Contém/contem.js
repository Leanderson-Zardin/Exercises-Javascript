function checkSpam(str) {
  if (str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX") ) {
    return alert("Contém!");
  }

  return alert("Não contém!")
}

checkSpam("buy ViAgRA now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");