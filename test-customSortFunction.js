const input = [4, 2, 5, 7, 1, 6];
const input2 = [25, 40, 14, 91, 31, 22, 49, 13, 6];

const sortNumber = (input) => {
  // loop เพื่อเอา index ของค่าตัวแรก(i)
  for (let i = 0; i < input.length; i++) {
    // loop เพื่อเอา index ของค่าตัวที่สอง(j) โดย index ของตัวที่สองจะไม่ซ้ำกับตัวแรก
    for (let j = i + 1; j < input.length; j++) {
      // ถ้า string ของ input[i] มากกว่า input[j] ให้สลับตำแหน่งกัน
      if (input[i] > input[j]) {
        [input[i], input[j]] = [input[j], input[i]];
      }
    }
  }
  // ส่ง input ออกไป
  return input;
};

const sortInput = (input) => {
  // สร้าง Array มาเตรียมเก็บจำนวนคู่และคี่
  let odd = [];
  let even = [];

  // เรียงลำดับเลขใน Array จากน้อยไปมาก
  // input.sort((a, b) => a - b);
  sortNumber(input);

  //
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      even.push(input[i]); // ถ้า index ที่ i เป็นเลขคู่ (หาร 2 ลงตัว)
    } else {
      odd.push(input[i]); // ถ้า index ที่ i เป็นเลขคี่่ (หาร 2 ไม่ลงตัว)
    }
  }
  // รวม Array เข้าด้วยกันโดยให้เลขคี่ไว้ด้านหน้าและตามด้วยเลขคู่ แล้วส่งค่าออกมา
  return odd.concat(even);
};

console.log(sortInput(input));
console.log(sortInput(input2));
