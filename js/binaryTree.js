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
