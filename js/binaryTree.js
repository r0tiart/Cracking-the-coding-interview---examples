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
