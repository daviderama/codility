// Check whether array A is a permutation.
// https://codility.com/programmers/lessons/4-counting_elements/perm_check/

// Correctness = 100%
// Performance = 100% O(N) or O(N*logN)
function solution(A) {
    var counter = [];
    for( var i = 0; i < A.length; i++ ){
        counter[i] = 0;
    }

    for( i = 0; i < A.length; i++ ){
        counter[ A[i]-1 ]++;
    }

    return counter.indexOf( 0 ) == -1 ? 1 : 0;
}
