// add whatever parameters you deem necessary
function isSubsequence(string1, string2) {
    let idx1 = 0;
    for(let i=0; i<string2.length && idx1<string1.length; i++){
        if(string2[i] === string1[idx1]) idx1++;
    }
    return idx1 === string1.length;
}