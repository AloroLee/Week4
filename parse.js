
// PARSE - cutting things into pieces, parcel

// body of text is a corpus

corpus = "Now is the time..." // array/list of character

// console.log(corpus[0])
// console.log(corpus[1])
// console.log(corpus[2])
// console.log(corpus[3])
// console.log(corpus[4])

// i is for index
// i++ is shorthand for i = i + i

for(i=0; i < corpus.length; i++){
    console.log(corpus[i])
}

console.log(corpus.length)

// to show position 
// for(i=0; i < corpus.length; i++){
//     console.log(i, corpus[i], corpus[i].charCodeAt(0))
// }

// console.log(corpus.length)

words = corpus.split(" ") // counting not including space because it's words not characcters and 1 less (3 would be 2)
console.log(words[0])
console.log(words[3])
console.log(words[words.lenght - 1 ]) // to get the last unknown word 

ip = "127.0.0.1"
parts = ip.split(".")
console.log(parts[0])
console.log(parts[3])