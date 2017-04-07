// Count minimal number of jumps from position X to Y.
// https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/

// Correctness = 100%
// Performance = 100% O(1)
function solution( X, Y, D ){
    var diff = Y - X;

    if( diff == 0 )
        return 0;
    else if( D > diff )
        return 1;
    else {
        var div = parseInt( diff/D, 10 );

        return diff % D == 0 ? div : div + 1;
    }
}
