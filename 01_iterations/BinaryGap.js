// Find longest sequence of zeros in binary representation of an integer.
// https://codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
    // convert N into its binary representation
    var N_binary = '';
    while( N > 0 ){
        N_binary += N % 2;
        N = parseInt( N / 2 );
    }

    // find the first 1 and strip the binary representation of everything there is before
    // to don't consider the 0 which are not limited by 1
    // i.e. 20 -> 00101 -> 101
    N_binary = N_binary.substr( N_binary.indexOf(1), N_binary.length );

    // split the string by 1 separator
    var gaps = N_binary.split('1');
    var max;
    for( var i = 0; i < gaps.length; i++ ){
        gap = gaps[i];
        if( gap != '' ){
            if( !max ){
                max = gap.length;
            } else if( gap.length > max ){
                max = gap.length;
            }
        }
    }

    return max ? max : 0;
};
