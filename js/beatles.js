//Code Your Solution Here
// var beatles = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

for (var i = 0; i < beatles.length; i++ ){
    var sentence = beatles[i] + " is a Beatle";
    console.log(sentence);
}

for (var i in beatles){
  var sentence = beatles[i] + " is a Beatle";
    console.log(sentence);
}
// Bonus:
// var beatles = [["Paul McCartney", "Bass Guitar"], ["John Lennon", "Guitar"], ["George Harrison", "Lead Guitar"], ["Ringo Starr", "Drums"]]

// for (var i = 0; i < beatles.length; i++ ){
//     for (var j = 0; j < beatles[i].length;){
//       var sentence = beatles[i][j] + " plays the " + beatles[i][j+1];
//       console.log(sentence);
//       j += 2;
//     }
// }