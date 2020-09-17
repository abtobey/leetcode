const nums=[3, 10, 5, 25, 2, 8];
const nums2=[4,6,7];

var findMaximumXOR = function(nums) {
    let max=0;
    if(nums.length ==1){
        return 0;
    }
    for(let i=0; i<nums.length-1; i++){
        for(let j=i; j<nums.length; j++){
        let xor=nums[i] ^ nums[j];
        if(xor >max){
            max=xor;
        }
        }
    }
    return max
};

console.log(findMaximumXOR(nums))

console.log(findMaximumXOR(nums2))
