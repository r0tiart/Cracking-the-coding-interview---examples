let node = {data: 5, left:
                     {data: 3, left: null, right: null},
                       right: {data: 7, left: null,
                       right: {data: 9, left: null, right: null}
                     }}

function findParent(currentNode, int){
 if(currentNode.data === int){
    return false;
 }

 if(int > currentNode.data){
   if(currentNode.right.data === int){
     return currentNode;
   } else {
     return findParent(currentNode.right, int)
   }
 }

   if(int < currentNode.data){
   if(currentNode.left.data === int){
     return currentNode;
   } else {
     return findParent(currentNode.left, int)
   }
 }
}


function Delete(currentNode, deleteNode){
   var parent = findParent(currentNode, deleteNode);

   if(!deletNode.left && !deleteNode.right){
     if(deleteNode.data > parent.data){
       parent.right = null;
     } else {
       parent.left = null;
     }
   }

   if(!deleteNode.left){
      if(deleteNode.data > parent.data){
        parent.right = deleteNode.right;
      } else {
        parent.left = deleteNode.right;
      }

   } else if(!deleteNode.right){
      if(deleteNode.data > parent.data){
        parent.right = deleteNode.left;
      } else {
        parent.left = deleteNode.left;
      }
   }
}

function max(node){
	if(node.right){
		return max(node.right)
	} else {
		return node
	};
};

function min(node){
	if(node.left){
		return min(node.left)
	} else {
		return node
	};
};

function treeToArray(node, arr, i){

  if (node === null) return i

  if(node.left){
     i = treeToArray(node.left, arr, i)
  }

  arr[i] = node.data;
  i++;

  if(node.right){
     i = treeToArray(node.right, arr, i)
  }

  return i;
}

// to delete a item with two branche - might need to have int vs node(for delete that's why i started to convert find parent)
// https://jsbin.com/jaxesudisu/edit?js,console
