// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
// https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

// Correctness = 100%
// Performance = 100% O(N)
function solution(A) {
    var min;

    var right = 0;
    for(var i=0; i < A.length; i++){
        right += A[i]
    }

    var left = 0;
    var diff;
    for(var i=0; i < A.length-1; i++){
        left += A[i];
        right -= A[i];

        diff = Math.abs(left - right);
        if( min == undefined || diff < min )
            min = diff;
    }

    return min;
}
