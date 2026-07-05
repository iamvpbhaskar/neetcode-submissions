class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let newS= s.split("").sort().join();
       let newT= t.split("").sort().join();

       for (let i=0;i<newS.length;i++ ){
            for (let j=0;j<newT.length; j++){
                if (newS === newT) return true;
            }
       }
return false;
    }
    
}
