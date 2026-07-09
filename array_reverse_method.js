const arr = [1,2,3,4,5]

//slice method
console.log(arr.slice().reverse())

//spread method
console.log([...arr].reverse())

//reduce
const c = arr.reduce((acc, item)=> [item, ...acc], [])
console.log(c)

//default method
console.log(arr.sort((a,b) => b-a)) //modified array
