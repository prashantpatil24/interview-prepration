# Curry Sum Function Examples
 
```javascript
//normal curry function
function sum(a){
    return function(b){
        if(b === undefined){
            return a
        }
        return sum(a+b) 
    }
}
console.log(sum(1)())//1
console.log(sum(1)(2)())//3
console.log(sum(1)(2)(3)())//6
 
//using arrow_sum ==> es6
const arrow_sum = (a) => {
    return (b) =>{
       return  b === undefined ? a : arrow_sum(a+b)
    }
}
console.log(arrow_sum(1)())//1
console.log(arrow_sum(1)(2)())//3
console.log(arrow_sum(1)(2)(3)())//6
 
//using es6 arrow with shortcut
const arrow_short_sum = (a) => (b) => b === undefined ? a : arrow_short_sum(a+b)
console.log(arrow_short_sum(1)())//1
console.log(arrow_short_sum(1)(2)())//3
console.log(arrow_short_sum(1)(2)(3)())//6
```
