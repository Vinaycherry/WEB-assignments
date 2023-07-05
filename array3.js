let nos = [1,2,3,4,5];
//shif the element
let no = nos.shift (1);
console.log("Element shifted" , no);
//print the array aftershift
console.log("Arraya after shift",nos);
nos.unshift(6);
    // print the array after unshift
    console.log("Array after unshift",nos);
    let arr = [1,2,3,4,5];
   // arr.splice(1,4); //index, no of elements
   // console.log("array after splice",arr);
    arr.splice(1,1,12,13,14); // index,replace,what to replace
    console.log("Array after adding splice",arr);
    //insert 50 at index 4
    //replace 2, 3, 4 with 34,45,67