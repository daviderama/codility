// Find the earliest time when a frog can jump to the other side of a river.
// https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/

// Correctness = 100%
// Performance = 100% O(N)
function solution(X, A) {
    var counter = [];
    for(var i = 0; i < X; i++){
        counter[i] = 0;
    }
    for(i = 0; i < A.length; i++){
        if( counter[ A[i]-1 ] == 0 ){
            counter[ A[i]-1 ]++;
            X--;
        }

        if( X == 0 ){
            return i;
        }
    }

    return -1;
}

