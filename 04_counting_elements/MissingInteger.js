// Find the minimal positive integer not occurring in a given sequence.
// https://codility.com/programmers/lessons/4-counting_elements/missing_integer/

// Correctness = 100%
// Performance = 100% O(N)
function solution(A) {
    var counter = [];
    for( var i = 0; i < A.length+1; i++ ){
        counter[i] = 0;
    }

    for( i = 0; i < A.length; i++ ){
        counter[ A[i]-1 ]++;
    }

    var result = counter.indexOf(0);
    if( result == -1 ){
        result = Math.max( A );
    }

    return result+1;
}
