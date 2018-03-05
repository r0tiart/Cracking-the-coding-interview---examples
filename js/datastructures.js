/* Is Unique? Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?    */                                                                                                                                      

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