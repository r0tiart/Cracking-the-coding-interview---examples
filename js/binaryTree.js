let node = {data: 5, left:
                     {data: 3, left: null, right: null},
                       right: {data: 7, left: null,
                       right: {data: 9, left: null, right: null}
                     }}

function findParent(currentNode, node){
 if(currentNode.data === node.date){
    return false;
 }

 if(node.data > currentNode.data){
   if(currentNode.right.data === node.data){
     return currentNode;
   } else {
     return findParent(currentNode.right, node)
   }
 }

   if(node.data < currentNode.data){
   if(currentNode.left.data === node.data){
     return currentNode;
   } else {
     return findParent(currentNode.left, node)
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
}
