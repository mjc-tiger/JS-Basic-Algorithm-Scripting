function findLongestWord(str) {

  var myArray = [];
  var maxWord = 0;

  myArray= str.split(' ');

  for (var i = 0; i < myArray.length; i++){
    if(myArray[i].length>maxWord){
      maxWord=myArray[i].length;
    }
}
  return maxWord;
}

findLongestWord("May the force be with you");
