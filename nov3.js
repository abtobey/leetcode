var maxPower = function(s) {
    let max=1;
    let x=1;
    for(let i=1; i<s.length; i++){
        if(s[i]===s[i-1]){
            x++
        }else{
            x=1;
        }
        if(x>max){
            max=x
        }
    }
    return max
};

console.log(maxPower("leetcode"))