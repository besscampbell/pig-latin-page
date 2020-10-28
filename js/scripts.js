
const vowels=["a", "e", "i", "o", "u", "y"] 
let input= "a"
let output = "";
function pigLatin(word) {
  
  if (vowels.includes(word[0])){
    output= (word + "way");
  }
  return output;
}

$("document").ready(function) {
  $("entry")
});