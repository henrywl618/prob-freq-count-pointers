// add whatever parameters you deem necessary
function countPairs(integers, target) {
    let count = 0;
    let map = new Map();
    for(let num of integers){
        let diff = target - num;
        if(map.has(num)) count++;
        map.set(diff, num)
    }
    return count
}
