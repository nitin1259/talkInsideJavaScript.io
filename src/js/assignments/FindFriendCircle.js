const friendCircle = (ss) => {
  let retStr = '';
  const isDone = [];
  ss.forEach((r, index) => {
    if (isDone.find(el => el === index)) {
      retStr += ',' + index;
      return;
    }
    retStr += '|' + index;
    const left = filterElement(r);
    while (left.length > 0) {
      const x = left.pop();
      if (!isDone.find(el => el === x)) {
        isDone.push(x);
        left.push(...filterElement(ss[x]));
      }
    }
  })
  return retStr.substr(1);
};

const filterElement = (input) => {
  const arr = input.map((el, ind) => el ? ind : -1);
  return arr.filter((el) => el > -1);
}

const matrix = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]

console.log(findCircleNum(friendCircle))