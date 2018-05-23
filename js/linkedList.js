/* remove duplicates from a linked list */

function removeDup(linkedList, collection){
  var node = collection[linkedList],
      map = {},
      previousNode = node;

  while(node.next != null){ //iterates through entire linked list
      if(!map[node]){ // if it doesn't exist in  hash map - insert it and set previous node as the current node
        map[node] = true;
        previousNode = node;
      } else {
        previousNode.next = node.next
      }
    node = node.next
  }
}
