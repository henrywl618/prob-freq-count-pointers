// add whatever parameters you deem necessary
function separatePositive(integers) {
    let start = 0;
    let end = integers.length-1;
    const swap = (x,y) => {
        let temp = integers[x];
        integers[x] = integers[y];
        integers[y] = temp;
    };
    while(start<end){
        if(integers[start]<0 ){
            swap(start,end);
            end--;
        } else {
            start++
        }
    }
    return integers
}
