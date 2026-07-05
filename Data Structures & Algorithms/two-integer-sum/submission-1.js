class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
    const map =  new Map();
    for (let i=0;i<nums.length; i++){
        const currentNum = nums[i];
        const need = target - currentNum;

        if(map.has(need)){
            return [map.get(need),i];
        }
        map.set(currentNum, i);
    }}}
