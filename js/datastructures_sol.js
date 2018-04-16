/* Is Unique? Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?   Hints : #44, #117, #132 */                                                                                                                                      

var unique = function(string) {
  var reoccurence = {};

  if(string.length > 128) {
    return false;
  } // added this to test if the string is longer then there are ASCII alphabets (total of 128 characters)
  /*  - this was noted in solution, should test for this before going through loop
      - also noted is i shouldn't need to convert to array (and waste the storage space and going through first loop 
      to convert string into array) just use charAt()
  */

  for(let i = 0; i < string.length ; i++){
     if( reoccurence[string.charAt(i)] ){
        return false
     } else {
       reoccurence[string.charAt(i)] = true

     }
  }
  
  return true
  
}
