"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('works!');
//
// const logSomething = () => {
// 	console.log('something');
// }
//
// logSomething();
// const numCollection = new NumbersCollection([10, 3, -5, 0]);
// numCollection.sort();
// console.log(numCollection.data);
function shifter(A, K) {
    let resultingArray = A.slice();
    for (let i = 0; i < K; i++)
        resultingArray = rotate(resultingArray);
    return resultingArray;
}
function rotate(arr) {
    let ref = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        console.log(ref);
        console.log(arr[i]);
        if (i + 1 >= arr.length) {
            ref[0] = arr[i];
            continue;
        }
        ref[i + 1] = arr[i];
    }
    return ref;
}
console.log(shifter([1, 2, 3, 4], 3));
//
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);
// linkedList.sort();
// linkedList.print();
