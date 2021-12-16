module.exports = function check(str, bracketsConfig) {
  let stack = []; //массив стек
  let openBrackets = []; // массив откр эл
  let closeBrackets = []; // массив закр эл
 



for (let i = 0; i<bracketsConfig.length; i++){          // для открыв эл индекс [i][0]
  openBrackets.push(bracketsConfig[i][0]);
};

for (let i = 0; i<bracketsConfig.length; i++){          // для закрывающихся [i][1]
  closeBrackets.push(bracketsConfig[i][1]);
};

for (let i = 0; i<str.length; i++){
    let current = str[i];

if (closeBrackets.includes(current)) {                    // если не закрыв. закидываем в стек и сравниваем
  let bracketsIndex = closeBrackets.indexOf(current)
  if (stack[stack.length - 1] === openBrackets[bracketsIndex]){
      stack.pop();
  } 
  else{
      stack.push(current)
  }
} 
else {
  stack.push(current)
  }
}
  return stack.length === 0            // проверка длины стека
}
