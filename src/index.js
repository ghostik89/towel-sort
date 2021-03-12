
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix){
    matrix.forEach((element,index) => {
      if(index % 2 === 1)
        element.reverse()
    });

    return [].concat(...matrix)
  }
  
  return []
}