const sumOfTwoInArray = (input, target) => {
  // กำหนดค่า sum มาเพื่อรอเก็บผลรวม
  let sum = 0;

  // loop เพื่อเอา index ของค่าตัวแรก(i)
  for (let i = 0; i < input.length; i++) {
    // loop เพื่อเอา index ของค่าตัวที่สอง(j) โดย index ของตัวที่สองจะไม่ซ้ำกับตัวแรก
    for (let j = i + 1; j < input.length; j++) {
      sum = input[i] + input[j]; // เก็บผลรวมของค่าใน index ที่ i + index ที่ j

      // ถ้าผลรวมเท่ากับ target ที่เราส่งเข้ามา ให้ส่ง true กลับไป เพราะมีค่าใน Array ที่รวมกับแล้วเท่ากับ target
      if (sum === target) {
        return true;
      }
    }
  }
  //ไม่มีผลรวมเท่ากับ target ที่เราส่งเข้ามา ให้ส่ง false กลับไป เพราะไม่มีค่าใน Array ที่รวมกับแล้วเท่ากับ target
  return false;
};

const input = [1, 3, 5, 7, 16, 4];
console.log(sumOfTwoInArray(input, 8));
console.log(sumOfTwoInArray(input, 12));
console.log(sumOfTwoInArray(input, 18));
console.log(sumOfTwoInArray(input, 20));
