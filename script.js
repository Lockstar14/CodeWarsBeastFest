function feast(beast, dish) {
  let beastArr = beast.split("");
  let beastFirst = beastArr[0];
  let beastLast = beastArr[beastArr.length - 1];
  let dishArr = dish.split("");
  let dishFirst = dishArr[0];
  let dishLast = dishArr[dishArr.length - 1];
  return  (dishFirst === beastFirst && dishLast === beastLast) }

console.log(feast("brown bear", "bear claw"));
