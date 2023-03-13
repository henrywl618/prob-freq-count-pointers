// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const map = {};
    for(let digit of String(num1)){
        map[digit] = map[digit]+1 || 1;
    }
    for(let digit of String(num2)){
        if(map[digit] || map[digit] === 0) map[digit]--;
    }
    for(let key in map){
        if(map[key] != 0) return false
    }
    return true
}
