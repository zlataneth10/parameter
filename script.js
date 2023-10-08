// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give a solutions to this problem, using arrays

function sumOfDistinctElements(set1, set2) {
    let distinctElements = [];
  
    for (let i = 0; i < set1.length; i++) {
      if (!set2.includes(set1[i])) {
        distinctElements.push(set1[i]);
      }
    }
  
    for (let i = 0; i < set2.length; i++) {
      if (!set1.includes(set2[i])) {
        distinctElements.push(set2[i]);
      }
    }
  
    return distinctElements.reduce((sum, element) => sum + element, 0);
  }
  
  // Example usage
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  console.log(sumOfDistinctElements(set1, set2));
//   Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// Modify the previous algorithm if you use a dot_product function instead of a procedure.

// Procedure to calculate the dot product of two vectors
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
      return null;
    }
    
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
    }
    
    return result;
  }
  
  // Algorithm to determine if vectors are orthogonal
  function areVectorsOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i+1; j < vectors.length; j++) {
        const dot = dotProduct(vectors[i], vectors[j]);
        if (dot !== 0) {
          return false;
        }
      }
    }
    
    return true;
  }
  
  // Example usage
  const vectors = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(areVectorsOrthogonal(vectors));
