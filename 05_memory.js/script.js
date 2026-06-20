// STACK AND HEAP MEMORY IN JAVASCRIPT

// Stack Memory
// Stores primitive data types (Number, String, Boolean, null, undefined, BigInt, Symbol).
// Variables get their own copy of the value.
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20


// Heap Memory
// Stores objects, arrays, functions.
// Variables store a reference (address) to the actual data in the heap.
let obj1 = { x: 10 };
let obj2 = obj1;
obj2.x = 20;
console.log(obj1.x); // 20
console.log(obj2.x); // 20
//VISUALIZATION FOR HEAP
// obj1 ----\
//           > { age: 20 }
// obj2 ----/
// DONO SAME OBJECT/ARRAY KO POINT KR RHE H

// BUT IN C++ NORMAL ASSIGNMENT MAIN COPY BANTI H ISLIYE HUME & LAGANA PADTA H REFERENCE K LIYE
/*
C++

Normal assignment mein copy banti hai:

vector<int> arr1 = {1,2,3};
vector<int> arr2 = arr1;

arr2[0] = 100;

cout << arr1[0]; // 1

✅ arr1 change nahi hua. 
ALSO
C++ Reference

Agar reference use karo:

vector<int> arr1 = {1,2,3};
vector<int>& arr2 = arr1;

arr2[0] = 100;

cout << arr1[0]; // 100

✅ Ab arr1 bhi change ho gaya.*/