// add whatever parameters you deem necessary
function twoArrayObject(array1, array2) {
    const output = {};
    for(let i=0; i<array1.length; i++){
        output[array1[i]] = array2[i] || null;
    }
    return output
}
