/* Is Unique? Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?   Hints : #44, #117, #132 */                                                                                                                                      

var unique = function(string) {
  var strArr = string.split(""),
      reoccurence = {};
  for(let i = 0; i < strArr.length ; i++){
     if( reoccurence[strArr[i]] ){
        return false
     } else {
       reoccurence[strArr[i]] = true

     }
  }
  
  return true
  
}

/*
  Permutation - Given two strings, write a method to decide if one is a permutation of the other.
  Hints: #1, #84, #122, #131
*/

var permutation = function(str1, str2){
  
  var str1Arr = str1.split(""),
      str2Arr = str2.split(""),
      str1map = {};
  
  
  for(let i = 0; i < str1.length; i++){
    if(str1map[str1Arr[i]]){
      
      str1map[str1Arr[i]] += 1; 
    } else {
      
      str1map[str1Arr[i]] = 1;
    }
  }
  
  
  for( let j = 0; j < str2.length; j++ ){
    if(str1map[str2Arr[j]]){
      
      str1map[str2Arr[j]] > 0 ? str1map[str2Arr[j]] -= 1: delete(str1map[str2Arr[j]])
      
    } else {
      return false
    }
  }
  
  return true
}

/*
URLify a given string (Replace spaces is %20)
2.6
Write a method to replace all the spaces in a string with ‘%20’. 
You may assume that the string has sufficient space at the end to hold the additional characters, 
and that you are given the “true” length of the string.

*/

var URLify = function(string){
  var length = string.length,
      newString = string.trim()
  
      return newString.split(" ").join("%20")
}

/*
  Palindrome Permutation: Given a string, write a funtion to check if it is a permutation of a palindrome.
  A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
  The palindrome does not need to be limited to just dictionary words.
  Hints: #106, #121, #134, #136
*/

var palindromPermutation = function(str){
  var newString = str.split(" ").join("")
      length = newString.length,
      strArr = newString.toLowerCase().split(""),
      map = {};
  
  for(let i = 0; i < strArr.length; i++){
        if(map[strArr[i]]){
          map[strArr[i]] += 1;
        } else {
          map[strArr[i]] = 1;
        }
   }
  
 if(length%2 === 0){
   var lengthTest = Object.values(map).filter( e => e%2 != 0)
   
   return lengthTest.length > 0 ? false : true

 } else {
   var lengthTest = Object.values(map).filter( e => e%2 != 0)
   
   return lengthTest.length > 0 ? true : false
 }
  
}

/*
  One Away: These are three types of edits that can be performed  on strings: insert a character, remove a character, 
  or replace a character. Given two strings, write a function to check if they are one edit(or zero edits) away.
*/



var oneAway = function(string1, string2){
  var hashMap = {},
      string1Arr = string1.split(""),
      string2Arr = string2.split(""),
      string1Length = string1.length,
      string2Length = string2.length,
      diffLength = string1Length - string2Length,
      matches = 0;
  
  if(string2Length === string1Length){
    //do nothing
  } else if( diffLength != 1 && diffLength != -1 ){
    //test if the length is 1 off of the original string - if not return false
    return false;
  }
  
  //create the hash map
  for(let i = 0; i < string1Arr.length; i++){
    if(hashMap[string1Arr[i]]){
      hashMap[string1Arr[i]] += 1;
    } else {
      hashMap[string1Arr[i]] = 1;
    }
  }
  
  //compare 2nd string to map
  for(let j = 0; j < string2Arr.length; j++){
    
    if(hashMap[string2Arr[j]] > 0){
      //if match deduct the match from hash and add one to match var
      hashMap[string2Arr[j]] -= 1
      matches+=1;
    } 
  }
  
  //compare matches to the original string length to see if it's 1 away
  if(matches + 1 === string1Length || matches - 1 === string1Length || matches === string1Length){
    return true;
  } else {
    return false;
  }
  
}

/* matrix = [[T,T,T,T,T],
             [x,x,T,x,x],
             [x,x,T,x,x],
             [x,x,T,x,x],
             [x,x,T,x,x]
            ]

rotated = [[x,x,x,x,T],
           [x,x,x,x,T],
           [T,T,T,T,T],
           [x,x,x,x,T],
           [x,x,x,x,T]
          ]

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image 
by 90 degress.
*/

var rotateMatrix = function(matrix){
  var matrixSize = matrix.length;
      newMatrix = [];
  
  for(let x = 0; x < matrix.length; x++){
     for(let j = 0; j < matrix[x].length; j++){
       if(newMatrix[j]){
         newMatrix[j].unshift(matrix[x][j])
       } else {
         newMatrix[j] = []

         newMatrix[j].unshift(matrix[x][j])
       }
     }
  }
  return newMatrix
}


/* Write an algo such that if an element in an MxN matrix is 0, it's entire row and column are set to 0 
*/

var zeroMatrix = function(matrix){
  var map={},
      locations = [];
  
  //map the 0s
  for(let i = 0; i < matrix.length; i++ ){
    map[i] = []
    for(let j = 0; j<matrix[i].length; j++){
      if(matrix[i][j] === 0){
        map[i].push(j)
      }
    }
  }
  
  // find the keys (rows of matrix that contain 0s)
  for(let k = 0; k < Object.keys(map).length; k++){
    if(map[Object.keys(map)[k]].length > 0){
       let key = Object.keys(map)[k]
       locations.push(map[key])
       matrix[Object.keys(map)[k]] = matrix[Object.keys(map)[k]].map( e => 0) //makes the entire row 0
    }
  }
  
  locations = locations.join(',').split(',')
  for(let l = 0; l < locations.length; l++)//get all the columns to 0
  {
    for(let m = 0; m < matrix.length; m++){
      //go through the matrix columns to change the location that is 0
    }
  }
  console.log(map)
}

/* assume you have a method isSubstring which checks if one word is a substring of another.
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call
to isSubstring(eg. "waterbottle" is rotation of "erbottlewat")
*/

var stringRotation = function(str1, str2){
  var str1Arr = str1.split(""),
      str2Arr = str2.split(""),
      hashMap = {};
  
  for(let i = 0; i < str1Arr.length; i++){
    if(hashMap[str1Arr[i]]){
      hashMap[str1Arr[i]] += 1;
    } else {
      hashMap[str1Arr[i]] = 1;
    }
  }
  
  for(let j = 0; j < str2Arr.length; j++){
    if(hashMap[str2Arr[j]]){
      hashMap[str2Arr[j]] -= 1;
      if(hashMap[str2Arr[j]] < 0 ){
        return false;
      }
    } else {
      return false; 
    }
  }
  return true;
}
