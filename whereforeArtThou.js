// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching property
// and value pairs (second argument). Each property and value pair
// of the source object has to be present in the object from the collection
// if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    
    function myFilter (item) {
      for (var i in source){
        if (source[i] != item[i]){
          return false;
        }
      }
      return true;
    }
    
    
    var arr = collection.filter(myFilter);
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });