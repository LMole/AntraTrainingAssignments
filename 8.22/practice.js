// 1. Create a function that every time you invoke it, it will print out the message 
// “Congrats you earn the chance!“, however it can only print out the message with the 
// first 5 invokes. all the rest invokes will print out the message “Sorry you missed the chance” 
// (run function once count as 1 invoke) (hint : using closure)

function price(){
    let chance = 5;
    return function message(){
        chance --;
        if(chance>=0){
            console.log("Congrats you earn the chance!");
        }
        else{
            console.log("Sorry you missed the chance!");
        }
    }
}

//TEST!
const m = price();
for(let i=1; i<8;i++){
    m();
}


// 2. Implement the callback function "longerThan" for : Array.filter(longerThan(minimumLength))  
// which takes minimumLength as a input and filter all the strings whose length is longer than 
// minimumLength (hint : using currying)

function longerThan(minimumLength){
    return function(string){
        return string.length > minimumLength; //filter function feeds the callback function with elements in the array
    }
}

//TEST: 
const array4Test = ["Hello","World", "I","need","bread"];
console.log("Words whose length is longer than 4: " + array4Test.filter(longerThan(4))); 