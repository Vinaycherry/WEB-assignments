// map and filter in this
let nos = [1,2,13,4,25,6,17,8];
 var m= 0;
nos.map(
    function(n)
    {
        if (m<n){
            m=n
        }
    }
       
)
console.log("The largest no is",m);