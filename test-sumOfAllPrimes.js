// เงื่อนไขในการเช็คจำนวนเฉพาะ
const checkprime = (input) => {
  if (input <= 1) return false;
  if (input <= 3) return true;
  5;
  if (input % 2 === 0 || input % 3 === 0) return false;
  let j = 5;
  while (j * j <= input) {
    if (input % j === 0 || input % (j + 2) === 0) return false;
    j += 6;
  }
  return true;
};

const sumOfAllPrimes = (input) => {
  let sum = 0; // สร้างตัวแปรมาเก็บผลรวม

  // loop เลขตั้งแต่เลข 1 จนถึง เลขที่ส่งเข้ามา(input)
  for (let i = 1; i <= input; i++) {
    // ตรวจเช็คเลขแล้วเก็บผลตรวจไว้ในตัวแปร prime (เป็นจำนวนเฉพาะ => true , ไม่เป็นจำนวนเฉพาะ => false)
    const prime = checkprime(i);
    // ถ้าเป็นจำนวนเฉพาะให้มาเก็บไว้ใน ตัวแปร sum
    if (prime) sum += i;
  }
  // ส่งผลรวมขอจำนวนเฉพาะออกมาก
  return sum;
};
console.log(sumOfAllPrimes(10));
console.log(sumOfAllPrimes(59));
console.log(sumOfAllPrimes(1000));

// old version
// const sumOfAllPrimes = (input) => {
//   let primeNumber = [];
//   let sum = 0;
//   for (let i = 1; i <= input; i++) {
//     if (i <= 1) continue;
//     if (i <= 3) {
//       primeNumber.push(i);
//       continue;
//     }
//     if (i % 2 === 0 || i % 3 === 0) continue;
//     let j = 5;
//     while (j * j <= i) {
//       if (i % j === 0 || i % (j + 2) === 0) continue;
//       j += 6;
//     }
//     primeNumber.push(i);
//     continue;
//   }
//   sum = primeNumber.reduce((prev, curr) => prev + curr, 0);
//   return sum;
// };
