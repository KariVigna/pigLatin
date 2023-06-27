function pigLatin(text) {
    let textArray = text.split(" ");
    let pigArray = [];
    let vowel = ["a", "e", "i", "o", "u"];
    let cons = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
    
    if (text.trim().length === 0) {
      return "that's not a word";
      }
    
    textArray.forEach(function(word) {

    const firstChar = word.charAt(0);   
    const secondChar = word.charAt(1);
    const thirdChar = word.charAt(2);
    if (firstChar === "q" && secondChar === "u") {
      pigText = word.slice(2) + word.slice(0,2) + "ay";
    }
    else if (vowel.includes(firstChar)) {
      pigText = word + "way";
    } 
    else if (cons.includes(thirdChar)) {
      pigText = word.slice(3) + word.slice(0,3) + "ay";
    }
    else if (cons.includes(secondChar)) {
      pigText = word.slice(2) + word.slice(0,2) + "ay";
    } 
    else if (cons.includes(firstChar)) {
      pigText = word.slice(1) + word.slice(0,1) + "ay";
    }  
    
    pigArray.push(pigText);
    } );
    
  
  return pigArray;

}
           
    


text.slice(0,0).includes



vowel.includes(firstChar)

