Array.prototype.myMap = function(callbackFn){
    let result =[];

    for(let i = 0; i < this.length; i++){
        let newElement = callbackFn(this[i],i,this);  //function(element, index, array)
        result.push(newElement);
    }
    return result;
}

let testArray1 = [1,2,3,4,5];
console.log("Squaring all the elements in the testArray1: " + testArray1.myMap((num) => num**2));


Array.prototype.myReduce = function(accumulator,initialValue){
    if(initialValue == undefined){
        initialValue = this[0];
    }
    for(let i =0;i < this.length;i++){
        initialValue = accumulator(initialValue,this[i]); //function(previousValue, currentValue); 
    }
        
    return initialValue;
}

const getMax = (a,b) => Math.max(a,b);
console.log("Find the maximum value of the array without giving initialValue: " + testArray1.myReduce(getMax));
console.log("Find the maximum value of the array giving an initialValue of 100: " +testArray1.myReduce(getMax,100));