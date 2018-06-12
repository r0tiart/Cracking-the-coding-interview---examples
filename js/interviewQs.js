//given a string reverse each word. leaving punctuations where they are at.

function reverse(str){
    var strArr = str.split(" ") //splits string into array of each word
    var out = '';
    var word = '';
    var reverse;
    var index;
    var punctuation;

    for (let i=0;i<strArr.length;i++) { // go through each word

        for(let j = 0; j < strArr[i].length; j++){ //go through each character

          if (",.!?'".indexOf(strArr[i].charAt(j)) != -1) { //if it's punctuation store location

            index = j //map index to character
            punctuation = strArr[i].charAt(j) //save punctuation


          } else{
            word+= strArr[i].charAt(j) //store the entire word
          }
        }

         reverse = word.split('').reverse() // split into array then reverse and rejoin into string

          if(index > -1){

              reverse.splice(index,0,punctuation)
              out+=reverse.join("") + " "
              index = -1


          } else {

            out+= reverse.join("") + " "

          }

          word = '' // clear the place holder word
          reverse = [] //clear reverse


    }
    return out.trim();
};

console.log(reverse("how's it going."));



/* given an unsorted array, from 1-100, determine which number is missing */

function missingNum(unsortedArr){
  var sorted = unsortedArr.sort(), // I can do another function to sort it, so let's just assume I sorted it like earlier today)
      missing = [];

  for(let i = 1; i < sorted.length; i++){ // this goes through the array;

    if(sorted[i] - sorted[i-1] !=1){

      amountMissing = sorted[i] - sorted[i-1] - 1 //find missing and normalize with 1 (since it should consecutive)
      while(amountMissing > 0){
        missing.push(sorted[i] - amountMissing)
        amountMissing--
      }
    }

  }
  console.log(missing)
  return missing

}

missingNum([1,2,3,6,8])


/* given a string determine if it is a valid function, all openers have closers
 - ([{}]) = true ([)] = false
*/

function tester(str){ //test if a function is valid - being passed in as a string
  var strArr = str.split("");
  var opens = [];
  var map = { ')' : '(',
              ']' : '[',
              '}' : '{'
            }; //stores all open and closers

  var notComment = true; //start off setting not comment to true

  for(let i = 0; i < strArr.length; i++){ // go through each item in array

    if('/<'.indexOf(strArr[i]) != -1){ //if it matches any part of the comment opener
      if('/!*'.indexOf(strArr[i+1]) != -1){

        notComment = false; //set false so it will not run while loop
      } //test next item to make sure its an actual comment opener
    }else if('\n>*'.indexOf(strArr[i]) != -1){

      if('*'.indexOf(strArr[i]) != -1){ //this test for multiline comment ender  */

        if('/'.indexOf(strArr[i + 1]) != -1 ){ //test if it actually ended by looking at next item in array
          notComment = true;
        }

      } else if('>'.indexOf(strArr[i]) != -1){ //test for ->

        if('-'.indexOf(strArr[i - 1]) != -1){
           notComment = true; //no longer comment
        }
      } else {
        notComment = true;
      }
    }



    if(notComment){ // run this loop if it isn't a comment
      if('[({'.indexOf(strArr[i]) != -1){ //if it is open push it into array
        opens.push(strArr[i])
      } else if('])}'.indexOf(strArr[i]) != -1){ //if they are closers

        if(map[strArr[i]] != opens.pop()){ //if the closer is not equal to the last open element return false;
          return false;
        }

      }
    }
  }


  return opens.length === 0; //if there are more openings then close return false
}
