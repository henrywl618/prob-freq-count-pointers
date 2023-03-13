// add whatever parameters you deem necessary
function longestFall(nums) {
    let longest = 0;
    let count = 1;
    if(nums.length === 0) return 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i-1] > nums[i]){
            count++;
            longest = Math.max(count, longest);
        } else {
            count = 1;
        }
    }
    return Math.max(count, longest);
}

