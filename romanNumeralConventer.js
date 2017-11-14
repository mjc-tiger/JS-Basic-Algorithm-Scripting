// Convert the given number into a roman numeral

function convertToRoman(num) {
    // EXAMPLE HOW THE FOLLOWING CODE WORKS:
    // 945 >= 900
    // container = "" + CM
    // num = 945-900
    
    // 45 >= 40
    // container = CM + XL
    // num = 45 - 40
    
    // 5 >= 5
    // container = CMXL + V
    // num = 5 - 5
    
     var container = ""; 
     var romanNumbers = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
     var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
     for(var i=0; i<arabicNumbers.length; i++){
         while(num>=arabicNumbers[i]){
             container = container + romanNumbers[i];
             num = num - arabicNumbers[i];
         }
     }
     return container;
    }
    
    convertToRoman(945);
    