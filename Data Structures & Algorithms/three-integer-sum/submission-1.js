class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let st = new Set();
        for (let i =0;i<nums.length;i++){
            for (let j=i+1;j<nums.length;j++){
                for (let k = j+1; k<nums.length ; k++){
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        let result = [nums[i],nums[j],nums[k]].sort((a, b)=> a-b);
                        st.add(JSON.stringify(result));
                    }
                }
            }
        }
        let ans = Array.from(st).map(str => JSON.parse(str));
        return ans; 
    }
}
