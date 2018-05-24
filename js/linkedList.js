/* remove duplicates from a linked list */

let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
  masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
  ntrandm: {name: 'Juliet', next: null}
}


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


/* Find the kth from the last item in a linked list*/

function kthToLast(k, linkedList, collection){ //this function returns the node at kth position from the last place
  var node = collection[linkedList],
      length = linkedListLength(linkedList, collection)
      index = length - k - 1 // finds the position and converts it to an index (index starts at 0)

  return nodeAt(index, linkedList, collection)

}

function linkedListLength(linkedList, collection){ //this function determines the length of a linked list
  var node = collection[linkedList],
      length = 1;

  while(node.next){
    length++
    node = collection[node.next];
  }
  return length;
}

function nodeAt(index, linkedList, collection){ //this functions determines the node at an index
	let node = collection[linkedList];
	for (let i = 0; i < index; i++){
		node = collection[node.next];
	};
	return node;
};


/* delete the middle node given the node (not the last or the first)*/

function deleteNode(collection, node){
  if(node === null || node.next === null){
    return false;
  } else {
    var nextNode = collection[node.next]
  }

  node.name = nextNode.name;
  node.next = nextNode.next;

  return true;
}
