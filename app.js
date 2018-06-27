var firstNames = ["Brandon", "John", "Joe", "Frank", "Lisa", "Jen", "Ashley", "Tiffany", "Tyler", "Brianna"];
var lastNames = ["Smith", "Johnson", "Ortiz", "Brady", "Ramirez", "Bonds", "Jefferson", "Little"];
var classSize = 7;
var classList = [];

function createListFor(){
  for (var i = 0; i < classSize; i++){
    var randFirst = Math.floor(Math.random() * firstNames.length);
    var randLast = Math.floor(Math.random() * lastNames.length);
    classList.push(firstNames[randFirst] + " " + lastNames[randLast]);
  }
  console.log(classList);
}

function createListWhile(){
  while (classList.length <= classSize){
    var randFirst = Math.floor(Math.random() * firstNames.length);
    var randLast = Math.floor(Math.random() * lastNames.length);
    classList.push(firstNames[randFirst] + " " + lastNames[randLast]);
  }
  console.log(classList);
}
