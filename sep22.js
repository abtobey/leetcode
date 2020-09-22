var majorityElement = function(nums) {
    let numArray=[]
    for(let i=0; i<nums.length; i++){
        let found=false;
        for(let j=0; j<numArray.length; j++){
            if(numArray[j].number===nums[i]){
                numArray[j].repeat++
                found=true
            }

        }
        if(!found){
            numArray.push({"number":nums[i], "repeat":1})
        }
    }
    let third=nums.length/3;
    let result=[]
    for(let i=0; i<numArray.length; i++){
        if(numArray[i].repeat>third){
            result.push(numArray[i].number)
        }
    }
    console.log(result)

}
majorityElement([1,1,1,3,3,2,2,2])