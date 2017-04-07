// Find value that occurs in odd number of elements.
// https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

// Correctness = 100%
// Performance = 100% O(N) or O(N*logN)
function solution(A){
    //using an hash map
    var storage = {};

    for( var i = 0; i < A.length; i++ ){
        var element = A[i];
        if( element in storage ){
            storage[ element ] += 1;
        }
        else {
            storage[ element ] = 1;
        }
    }

    for( element in storage ){
        if( storage[ element ] % 2 === 1 )
            return +element;
    }
}
