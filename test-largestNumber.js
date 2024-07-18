const input = [10, 2, 13, 7];
const input2 = [21, 36, 8, 45];

const largestNumber = (input) => {
  // เปลี่ยนทุก index ใน Array เป็น string => Ex ['10','2','13','7']
  input = input.map(String);

  // loop เพื่อเอา index ของค่าตัวแรก(i)
  for (let i = 0; i < input.length; i++) {
    // loop เพื่อเอา index ของค่าตัวที่สอง(j) โดย index ของตัวที่สองจะไม่ซ้ำกับตัวแรก
    for (let j = i + 1; j < input.length; j++) {
      // ถ้า string ของ input[j]+input[i] มากกว่า input[i] + input[j] ให้สลับตำแหน่งกัน
      if (input[j] + input[i] > input[i] + input[j]) {
        [input[i], input[j]] = [input[j], input[i]];
      }
    }
  }

  // รวมค่าใน Array ให้หลายเป็น string ตัวเดียว แล้วส่งค่าออกมา
  const result = input.join("");
  return result;
};

console.log(largestNumber(input));
console.log(largestNumber(input2));

// เรียงลำดับใหม่ตามเงื่อนไข (b+a)-(a+b) ให้ string ที่รวมกันแล้วมีค่ามากกว่าขึ้นก่อน
// ('2'+'10')-('10'+'2')
// ('210')-('102') => '210' มีค่ามากกว่า '102' => Ex ['7','2','13','10']
// input.sort((a, b) => b + a - (a + b));
