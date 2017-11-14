// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
    str = str.split(" ");
    for (var i = 0; i<str.length; i++){
      if (str[i] == before){
       if (before[0] === before[0].toUpperCase() ) {
         after = after[0].toUpperCase() + after.slice(1);
       }
       
        str[i] = after;
      }
    }
    str = str.join(" ");
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
  