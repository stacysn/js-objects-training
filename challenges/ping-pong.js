/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE
function pingPong(array){
  var objectIndex = array.findIndex(function(el){
    //this indicates there is an elem other than null!!
    return el;
  });
  var object = array[objectIndex];
  //object is where the step is found in the array
  if (Math.floor(object.steps/(array.length-1)) % 2 === 0){
  //rounds down using Math.floor
  //object.step is the indice where step is
  //divide that indice by length-1 and see if it's divisible by 2 would be 0 (aka not 1,
  //which is the last number --> so if array.length = 4, 4/4 is 1. Needs to go backwards
    table[objectIndex + 1] = object;
  }
  else{
    array[objectIndex - 1] = object;
  }
  object.steps += 1;
  array[objectIndex] = null;
  return array;
}

var table = [{steps: 0}, null, null, null];
console.log(pingPong(table));
//if (Math.floor(object.steps/(array.length-1)) % 2 === 0)
//    table[objectIndex + 1] = object;

//// 0/4 % 2 === 0 --> table = [{null, }]

console.log(pingPong(table));
console.log(pingPong(table));
console.log(pingPong(table));
