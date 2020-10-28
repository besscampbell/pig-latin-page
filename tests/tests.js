Describe 'pigLatin()'

Test: "It will add 'way' to the end of words that begin with a vowel"
Expect(pigLatin("a").toEqual("away"));

Test: "It will add 'way' to the end of words that begin with a vowel regardless of case"
Expect(pigLatin("A").toEqual("away"));

Test: "It will add 'way' to the end of words that begin with a vowel and have multiple characters"
Expect(pigLatin("away").toEqual("awayway"));

Test: "It will remove single consonanat from a word, shift it to the end and add 'ay'"
Expect(pigLatin("dog").toEqual("ogday"));

Test: "It will move consecutive consonants from a word, shift it to the end and add 'ay'"
Expect(pigLatin("stripe").toEqual("ipestray"));

Test: "It will recognize words with the first consonants 'qu' and move the 'u' along with the 'q'"
Expect(pigLatin("quiz").toEqual("izquay"));

Test: "It will recognize 'qu' later in a string of first cononants and move to the end"
Expect(pigLatin("squeal").toEqual("ealsquay"));

Test: "It will recognize 'y' as a consonant"
Expect(pigLatin("youth").toEqual("outhyay"));

Test: "It ignores non-alphabetical characters"
Expect(pigLatin("#*%@123").ToEqual("#*%@123"));

Test: "It will translate whole sentences into pig latin"
Expect(pigLatin("this is a sentence").toEqual("isthay isway away entencesay"));

