// Find the missing element in a given permutation.
// https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

// Correctness = 100%
// Performance = 100% O(N) or O(N*logN)
function solution(A) {
    var N = A.length;

    var map = [];
    for( var i = 0; i < N+1; i++ ){
        map[i] = 0;
    }

    for( i = 0; i < N; i++ ){
        map[ A[i] - 1 ] = 1;
    }

    return map.indexOf( 0 ) + 1;
}
