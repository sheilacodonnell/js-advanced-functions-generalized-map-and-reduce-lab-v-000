function map(original, callBack){
    let arr = []
    for(let i=0; i< original.length; i++){
        arr.push(callBack(original[i]))
    }
    return arr;
 }

 function reduce(original, callBack, start){ 
    let newValue = (!!start) ? start : original[0]
    let i = (!!start)? 0 : 1
    for(; i < original.length; i++){
        newValue = callBack(original[i], newValue)
    }
    return newValue;
} 