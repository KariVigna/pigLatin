Describe: pigLatin()

Test: "It will return "that's not a word" for an empty string."
Code: pigLatin("");
Expected Output: "that's not a word"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move all of the first consecutive consonants to the end and add "ay" for words beginning with consonant(s)."
Code: pigLatin("code");
Expected Output: "odecay"

Test: "It will not treat the letter "y" as a vowel." 
Code: pigLatin("yes");
Expected Output: "esyay"

Test: "If the first consonants are "qu" it will move both the "q" and the "u" to the end and add "ay"."
Code: pigLatin("quick");
Expected Output: "ickquay".

Test: "If "qu" is included in the first consonants but is not the beginning of the word, it will not be added to the end."
Code: pigLatin("squeal");
Expected Output: "quealsay".