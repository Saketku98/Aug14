function sq(arr) {
    var sum = 0, 
        i = arr.length;
    while (i--) 
     sum += Math.pow(arr[i], 2);
    return sum;
  }
   
  console.log(sq([0,1,2,3,4,5,6,7,8,9,10])); 
  document.getElementById("demo").innerHTML = sq([0,1,2,3,4,5,6,7,8,9,10]);