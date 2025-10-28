function uniqueArray (arr){
    const seen = {};
    const out = [];
    for(let i = 0; i < arr.length; i++){
        const v = arr[i]
        if(!seen[v]){
            seen[v] = true;
            out.push(v);
            // console.log(out);
        }
    }
    return out;
}
console.log(uniqueArray([1,2,2,3,'a','a',1]));
