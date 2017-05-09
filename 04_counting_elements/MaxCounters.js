// Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
// https://codility.com/programmers/lessons/4-counting_elements/max_counters/

// Correctness = 100%
// Performance = 100% O(M+N)
function solution(N, A) {
    var counters = [];
    for(var i = 0; i < N; i++){
        counters[i] = 0;
    }

    var max = -1;
    var tmax = 0;

    for(i = 0; i < A.length; i++){
        var index = A[i]-1;
        if(index == N){
            max = tmax;
        } else {
            if(counters[index] < max){
                counters[index] = max;
            }

            counters[index]++;

            if(tmax < counters[index]){
                tmax = counters[index];
            }
        }
    }

    for(i = 0; i < counters.length; i++){
        if(counters[i] < max){
            counters[i] = max;
        }
    }

    return counters;
}
