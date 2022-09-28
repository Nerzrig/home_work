'use strict';

let arr = [];

arr = new Proxy(arr, {
    get(target, prop) {
        if(prop in target) {
            //return JSON.stringify(target[prop]);
        } else {
            return 0;
        }
    },

    set(target, prop, value) {
        if (prop === "length") {
            return "Ok!";
        }
        if (typeof value !== 'object' || Object.getPrototypeOf(value)) {
            console.warn("You can't add non 'object' type data!");
            return "You can't add non 'object' type data!";
        }
        target[prop] = value;
        console.log(value, "is pushed to array", arr);
        return true;
    }
});

const obj = {
    name: 'George',
    age: 28
}
const emptyObj = Object.create(null);

arr.push(obj);//You can't add non 'object' type data!
arr.push(1);//You can't add non 'object' type data!
arr.push(emptyObj);//is pushed to array

const value = arr[0];
console.log(value);