// add whatever parameters you deem necessary
function averagePair(sortedArray, avg) {
    const sum = avg*2;
    let start = 0;
    let end = sortedArray.length-1;

    while(start<end){
        const newSum = sortedArray[start] + sortedArray[end];
        if(newSum === sum){
            return true
        } else if(newSum > sum){
            end--;
        } else {
            start++;
        }
    }
    return false
}
