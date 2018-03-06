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