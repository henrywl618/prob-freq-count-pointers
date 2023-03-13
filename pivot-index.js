// add whatever parameters you deem necessary
function pivotIndex(nums) {
    let sum = nums.reduce((sum,value)=>(sum+value),0);
    let rightSum = nums[0];
    for(let i=1; i<nums.length; i++){
        if(sum - rightSum - nums[i] === rightSum) return i;
        rightSum = rightSum + nums[i]
    }
    return -1;
}
