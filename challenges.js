function balancedBrackets(s) {
    let brackets = "(){}[]";
    let stack = [];
    for (let char of s) {
      let idx = brackets.indexOf(char);
      if (idx === -1) continue;
      if (idx % 2 === 0) {
        stack.push(idx + 1);
      } else {
        if (stack.pop() !== idx) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  function reverseStr(str){
    let res = ""
    for (let i = str.length - 1; i >= 0; i--){
      res += str[i]
    }
    return res
}

function findSurvivor(n, m, s) {
  let pris = m / n
  let floor = Math.floor(m/n)
  let rem = pris - floor
  let times = Math.round(rem * n)
  let answer
  if (times + s - 1 > n && Number.isInteger(rem * n)){
    answer = times + s - n -1
  } else if (times + s - 1 > n && !Number.isInteger(rem * n)){
    answer = times + s - n -1
  } else if (n === m && s === 1 || n === 1){
    answer = n
  } else if (rem === 0 && s === 1){
    answer = n
  } else {
    answer = times + s - 1
  }
  return answer
}

console.log(findSurvivor(10,3,0))