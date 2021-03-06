/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```
  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?
*/

// YOUR CODE HERE
function daysUntilDate(date){
   var oneDay = 1000 * 60 * 60 * 24;
   var splitDate = date.split("/");
   var today = new Date ();
   var dd = today.getDate();
   var mm = today.getMonth() + 1;
   var yyyy = today.getFullYear();
   var todayDate = (mm + "/" + dd + "/" + yyyy);

   var splitToday = todayDate.split("/");

   var theDate1 = new Date(splitDate[2], splitDate[0], (splitDate[1] - 1));
   var newToday = new Date(splitToday[2], splitToday[0], (splitToday[1] - 1));

   var diff = Math.ceil((theDate1.getTime() - newToday.getTime())/(oneDay));

   if (diff > 0){
     console.log("It is in " + Math.abs(diff) + " days");
   }
   else if (diff < 0){
     console.log("It was " + Math.abs(diff) + " days ago");
   }
}

daysUntilDate('07/09/2016'); //NEED YEAR


function birthdayReminder(array){
  for (var i = 0; i < array.length; i++){
    return (array[i].name + "'s birthday is in " + daysUntilDate(array[i].dob) + " days" )
  }
}
// console.log(birthdayReminder([
//   {
//     name: "Jack",
//     dob: "10/31/2013"
//   },
//   {
//     name: "Jill",
//     dob: "4/01/1975"
//   }
// ]));
//
// console.log(array[0]);
