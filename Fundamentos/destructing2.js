//destructing de objeto usa {}
const [a] = [10]
console.log(a)

const [n1, n3, n5 = 10, n6] = [10, 7, , 9]
console.log(n1, n3, n5, n6)