'use strict';

let arr = [];

arr = new Proxy(arr, {
    set(target, prop, value) {
        if (prop === "length") {
            return "Ok!";
        }
        if (typeof value !== 'object' || Object.getPrototypeOf(value)) {
            console.warn("You can't add non 'object' type data!");
            return "You can't add non 'object' type data!";
        }
        console.log(value, " is pushed to array ", arr);
        target[prop] = value;
        return true;

    }
});

const obj = {
    name: 'George',
    age: 28
}
const emptyObj = Object.create(null);

arr.push(obj);//error
arr.push(1);//error
arr.push(emptyObj);
