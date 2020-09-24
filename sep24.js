var findTheDifference = function(s, t) {
    let s2=s.split("").sort();
    let t2=t.split("").sort();
    let added ="";
    for(let i=0; i<t2.length; i++){
        if(s2[i] !== t2[i]){
            added= t2[i];
            i=t2.length;
        }
    }
    return added;
};

let s="jklert";
let t="treyjkl";

console.log(findTheDifference(s,t))