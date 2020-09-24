var findTheDifference = function(s, t) {
    let s2=s.split("");
    let t2=t.split("");
    for(let i=0; i<t2.length; i++){
        if(s2.includes(t2[i])){
            s2.splice(s2.indexOf(t2[i]),1)
        }else{
            return t2[i];
        }
    }
};

let s="jklert";
let t="treyjkl";

console.log(findTheDifference(s,t))