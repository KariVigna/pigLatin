function pigLatin(text) {
    if (text.trim().length === 0) {
    return "that's not a word";
    }
    let vowel = ["a", "e", "i", "o", "u"]
    let cons = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"]
    if (text.slice(0,0) !== vowel) {
        return text.concat("ay");
    } else {
      return text.slice(1) + text.slice(0,1) + "ay";
    }     
}