function pigLatin(text) {
    let textArray = text.split(" ");
    let pigArray = [];
    textArray.forEach(function(text) {
  
    if (text.trim().length === 0) {
    return "that's not a word";
    }
    let vowel = ["a", "e", "i", "o", "u"];
    let cons = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
    const firstChar = text.charAt(0);   
    const secondChar = text.charAt(1);
    const thirdChar = text.charAt(2);
    if (firstChar === "q" && secondChar === "u") {
      text.slice(2) + text.slice(0,2) + "ay";
    }
    if (vowel.includes(firstChar)) {
      text + "way";
    } 
    if (cons.includes(thirdChar)) {
      text.slice(3) + text.slice(0,3) + "ay";
    }
     if (cons.includes(secondChar)) {
      text.slice(2) + text.slice(0,2) + "ay";
    } 
    if (cons.includes(firstChar)) {
      text.slice(1) + text.slice(0,1) + "ay";
    }  
    pigArray.push(text);
    } );
    
    }
           
    


text.slice(0,0).includes



vowel.includes(firstChar)

