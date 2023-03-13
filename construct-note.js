// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const map = {};
    for(let char of message){
        map[char] = map[char] + 1 || 1;
    }
    for(let char of letters){
        if(map[char]) map[char]--;
    }
    for(let key in map){
        if(map[key] > 0) return false;
    }
    return true
}
