function dpMinJumps(array) {
  var jumps = [0];
  for (var i=1; i < array.length; i++) {
  	jumps.push(Infinity);
  }
  for (i=1; i<array.length;i++) {
    for (var j=0;j<i;j++) {
      if (j+array[j] >= i) {
      	if (jumps[j]+1 < jumps[i]) {
        	jumps[i] = jumps[j] + 1;
        }
      }
    }
  }
  return jumps[jumps.length-1];
}

console.log(dpMinJumps([2,3,1,2,1,1]));

// http://pythontutor.com/javascript.html#code=function%20dpMinJumps%28array%29%20%7B%0A%20%20var%20jumps%20%3D%20%5B0%5D%3B%0A%20%20for%20%28var%20i%3D1%3B%20i%20%3C%20array.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20jumps.push%28Infinity%29%3B%0A%20%20%7D%0A%20%20for%20%28i%3D1%3B%20i%3Carray.length%3Bi%2B%2B%29%20%7B%0A%20%20%20%20for%20%28var%20j%3D0%3Bj%3Ci%3Bj%2B%2B%29%20%7B%0A%20%20%20%20%20%20if%20%28j%2Barray%5Bj%5D%20%3E%3D%20i%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20%28jumps%5Bj%5D%2B1%20%3C%20jumps%5Bi%5D%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20jumps%5Bi%5D%20%3D%20jumps%5Bj%5D%20%2B%201%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20jumps%5Bjumps.length-1%5D%3B%0A%7D%0A%0Aconsole.log%28dpMinJumps%28%5B2,3,1,2,1,1%5D%29%29%3B&curInstr=94&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D