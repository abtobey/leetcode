var rob = function(nums) {
    let money=0;
    let robbed =[];
    let sortedMoney=[];
    let len=nums.length
    for(let i=0; i< len; i++){
        robbed.push({"hit":false, "robbed":false, "address": i, "money": nums[i]});
        sortedMoney.push({"address": i, "money": nums[i]});
    }
    sortedMoney.sort((a, b) => {
        return b.money-a.money;
    })
  
    for(let j=0; j<len; j++){
        
        let loc=robbed[sortedMoney[j].address].address

        if(!robbed[loc].hit){
            
            money += sortedMoney[j].money;
            robbed[loc].hit =true;
            robbed[loc].robbed=true;
            if(loc >0){
                robbed[loc-1].hit =true;
            }
            if(loc<len-1){
                robbed[loc+1].hit=true;
            }
        }
    }



};
rob([1,5,3,44,5,66,76,32,2,13,14,92])