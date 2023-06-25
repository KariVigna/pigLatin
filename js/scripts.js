function pigLatin(text) {
    if (text.trim().length === 0) {
    return "that's not a word";
    }
    let vowel = ["a", "e", "i", "o", "u"]
    if (text.slice(0,0) !== vowel) {
        return text.concat("ay");
    } else  {
      return text.slice(1) + text.slice(0,0) + "ay";
    }     
}
// text.slice(1) +  