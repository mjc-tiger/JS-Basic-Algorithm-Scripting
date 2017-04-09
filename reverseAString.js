/*REVERSE A STRING*/

function reverseString(str) {

  /*var strArray = str.split('');
  str = strArray.reverse();
  str = strArray.join();
  return str; */
  var strReverse = str.split('').reverse().join('');
  str = strReverse;
  return str;
}

reverseString("Greetings from Earth");
