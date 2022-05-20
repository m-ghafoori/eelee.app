function nextNumber(num, range, fromOne) {
    // console.log(`nextNimber called for number ${num}`);
    var diffNum = (num+1)%range;
    if (fromOne) {
        if (diffNum == 0) {diffNum = range;}
    }
  return diffNum;
 }
