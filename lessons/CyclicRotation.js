// Rotate an array to the right by a given number of steps.
// https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/

// Correctness = 100%
function solution(A, K){
    var last, copy;

    while( K > 0 && A.length ){
        last = A[ A.length-1 ];
        copy = A.slice();
        for( var i = A.length-1; i > 0; i-- ){
            A[i] = copy[ i -1 ];
        }
        A[0] = last;

        K--;
    }

    return A;
}

// using modular arithmetic
// Correctness = 100%
function solution(A, K) {
    var j;
    var result = [];
    var n = A.length;
    for( var i = 0; i < n; i++ ){
        j = (i + K) % n;
        result[j] = A[i];
    }

    return result;

}
