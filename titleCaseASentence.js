function titleCase(str) {

  var strArray = str.toLowerCase().split(' ');

  for (i=0; i < strArray.length; i++){
    strArray[i] = strArray[i].split('');
    strArray[i][0] = strArray[i][0].toUpperCase();
    strArray[i] = strArray[i].join('');
  }
  return strArray.join(' ');
}

titleCase("I'm a little tea pot");
