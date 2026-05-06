const fs = require('fs');

const userJson = {
  "puzzles": [
    { "id": 1, "question": "Find the sum of all prime numbers between 10 and 30, then multiply that sum by the number of divisors of 12.", "answer": "672", "hint": "Primes between 10-30: 11,13,17,19,23,29. Divisors of 12: 1,2,3,4,6,12." },
    { "id": 2, "question": "Calculate: (17² - 13²) × (number of prime factors of 60).", "answer": "480", "hint": "17²-13²=120. Prime factors of 60: 2,2,3,5 (count with multiplicity=4)." },
    { "id": 3, "question": "A number is divisible by 9, less than 200, and is a perfect square. Find the sum of ALL such numbers.", "answer": "270", "hint": "Perfect squares div by 9: 9, 36, 81, 144. (225 is > 200? Wait, 225 is not < 200. Let's use user steps: 9+36+81+144=270)." },
    { "id": 4, "question": "Find the LCM of 12, 18, and 24. Then subtract the GCD of 48 and 36.", "answer": "60", "hint": "LCM(12,18,24)=72. GCD(48,36)=12." },
    { "id": 5, "question": "How many 3-digit numbers are divisible by both 7 and 11?", "answer": "11", "hint": "Divisible by LCM(7,11)=77. 154 to 924." },
    { "id": 6, "question": "If the sum of digits of a 3-digit number equals 15 and the number is divisible by 15, what is the largest such number?", "answer": "960", "hint": "Divisible by 5 (ends in 0,5) and 3 (sum of digits div by 3)." },
    { "id": 7, "question": "Find the sum of the first 15 odd numbers, then divide by the sum of the first 5 even numbers.", "answer": "7.5", "hint": "Sum of first 15 odd = 15² = 225. Sum of first 5 even = 5*6 = 30." },
    { "id": 8, "question": "A train travels 240 km at 60 km/h, then 180 km at 90 km/h. What is the average speed for the entire journey in km/h?", "answer": "70", "hint": "Average speed = Total distance / Total time." },
    { "id": 9, "question": "What is the remainder when 2^20 is divided by 7?", "answer": "4", "hint": "2^3 ≡ 1 mod 7. 2^20 = (2^3)^6 * 2^2 ≡ 1^6 * 4 ≡ 4." },
    { "id": 10, "question": "In a group of 60 students: 35 play cricket, 25 play football, 10 play both. How many play neither?", "answer": "10", "hint": "Neither = Total - (A + B - Both)." },
    { "id": 11, "question": "Find the value of 13³ - 7³.", "answer": "1854", "hint": "13³ = 2197, 7³ = 343." },
    { "id": 12, "question": "A rectangle has a perimeter of 56 cm and area of 192 cm². What is the difference between its length and width?", "answer": "4", "hint": "l+w=28, lw=192. (l-w)² = (l+w)² - 4lw." },
    { "id": 13, "question": "What is the sum of all integers from 1 to 100 that are divisible by 3 but NOT by 9?", "answer": "1089", "hint": "Sum(div by 3) - Sum(div by 9). 1683 - 594." },
    { "id": 14, "question": "How many ways can you arrange the letters in the word PEPPER?", "answer": "60", "hint": "6! / (3! * 2!). P=3, E=2." },
    { "id": 15, "question": "Find the compound interest on ₹8000 at 10% per annum for 2 years, compounded annually.", "answer": "1680", "hint": "Amount = 8000 * (1.1)^2 = 9680." },
    { "id": 16, "question": "The HCF of two numbers is 8 and their LCM is 192. If one number is 48, find the other.", "answer": "32", "hint": "HCF * LCM = A * B." },
    { "id": 17, "question": "A shopkeeper marks a price 40% above cost and gives a 15% discount. What is the profit percentage?", "answer": "19", "hint": "CP=100 -> MP=140 -> SP = 140 * 0.85 = 119." },
    { "id": 18, "question": "Find the number of diagonals in a polygon with 12 sides.", "answer": "54", "hint": "n(n-3)/2." },
    { "id": 19, "question": "If 5x + 3y = 41 and 3x + 5y = 31, find the value of x + y.", "answer": "9", "hint": "Add equations: 8x + 8y = 72." },
    { "id": 20, "question": "What is the probability that a 2-digit number chosen at random is a perfect square?", "answer": "1/15", "hint": "Squares: 16, 25, 36, 49, 64, 81 (Total 6). Range: 10-99 (Total 90)." },
    { "id": 21, "question": "Three pipes can fill a tank in 6, 8, and 12 hours respectively. How many minutes will all three together take to fill the tank?", "answer": "160", "hint": "Combined rate = 1/6 + 1/8 + 1/12 = 9/24 = 3/8 per hr." },
    { "id": 22, "question": "Find the sum: 1² + 2² + 3² + ... + 12².", "answer": "650", "hint": "n(n+1)(2n+1)/6." },
    { "id": 23, "question": "A and B can do a job in 10 days. B and C can do it in 12 days. A and C can do it in 15 days. How many days does A alone take?", "answer": "24", "hint": "2(A+B+C) = 1/10+1/12+1/15 = 1/4. A+B+C = 1/8. A = 1/8 - 1/12." },
    { "id": 24, "question": "How many numbers between 100 and 300 are divisible by 7?", "answer": "28", "hint": "105 to 294. (42 - 15 + 1)." },
    { "id": 25, "question": "Find the value of: (1 + 1/2)(1 + 1/3)(1 + 1/4)...(1 + 1/9)(1 + 1/10).", "answer": "5.5", "hint": "Telescoping: 3/2 * 4/3 * ... * 11/10 = 11/2." },
    { "id": 26, "question": "What is 37 × 43 computed mentally using algebraic identity?", "answer": "1591", "hint": "(40-3)(40+3) = 1600 - 9." },
    { "id": 27, "question": "Find the largest 4-digit number exactly divisible by 88.", "answer": "9944", "hint": "9999 / 88 = 113.6... 113 * 88 = 9944." },
    { "id": 28, "question": "A sum of money doubles in 8 years at simple interest. What is the annual interest rate (%)?", "answer": "12.5", "hint": "SI=P, T=8. R = 100/8." },
    { "id": 29, "question": "Find the missing term: 2, 6, 12, 20, 30, 42, ___", "answer": "56", "hint": "n(n+1) sequence." },
    { "id": 30, "question": "A sphere has a radius of 7 cm. Find its surface area (sq cm) (use π = 22/7).", "answer": "616", "hint": "4 * (22/7) * 7²." },
    { "id": 31, "question": "What is the units digit of 7^75?", "answer": "3", "hint": "7, 9, 3, 1 cycle. 75 mod 4 = 3." },
    { "id": 32, "question": "Find the number of ways to select a team of 3 from 8 players, where a specific player must always be included.", "answer": "21", "hint": "Choose 2 from remaining 7: C(7,2)." },
    { "id": 33, "question": "If the ratio of ages of A and B is 3:5, and 6 years from now the ratio will be 3:4, find A's current age.", "answer": "6", "hint": "(3x+6)/(5x+6) = 3/4." },
    { "id": 34, "question": "Find the area of a triangle with sides 13, 14, and 15 cm.", "answer": "84", "hint": "Heron's: s=21. Area = sqrt(21*8*7*6)." },
    { "id": 35, "question": "What is the sum of all 2-digit multiples of 6?", "answer": "810", "hint": "12 to 96. (15/2)*(12+96)." },
    { "id": 36, "question": "In a class, 60% passed in Maths, 70% passed in Science, and 20% failed in both. What percentage passed in both?", "answer": "50", "hint": "Passed at least one = 80%. 60+70-X = 80." },
    { "id": 37, "question": "A mixture contains milk and water in ratio 5:3. If 16 litres of mixture is removed and 16 litres of water added, the new ratio is 1:1. Find original volume.", "answer": "80", "hint": "V=80 (5V/8 - 10 = 3V/8 + 10)." },
    { "id": 38, "question": "Find the 15th term of the arithmetic sequence: 7, 13, 19, 25, ...", "answer": "91", "hint": "7 + 14 * 6." },
    { "id": 39, "question": "What is 15! / 13! ?", "answer": "210", "hint": "15 * 14." },
    { "id": 40, "question": "Two cars start from same point. Car A goes north at 40 km/h, Car B goes east at 30 km/h. After 2 hours, distance between them (km)?", "answer": "100", "hint": "80km and 60km sides. Pythagoras." },
    { "id": 41, "question": "Find the value of: 999 × 999.", "answer": "998001", "hint": "1,000,000 - 2,000 + 1." },
    { "id": 42, "question": "A cone has radius 6 cm and height 8 cm. Find volume to nearest integer (π = 22/7).", "answer": "302", "hint": "(1/3) * (22/7) * 36 * 8." },
    { "id": 43, "question": "What is the smallest number that when divided by 5, 6, 7, and 8 leaves a remainder of 3 in each case?", "answer": "843", "hint": "LCM(5,6,7,8) + 3." },
    { "id": 44, "question": "In a geometric progression, the 3rd term is 18 and the 6th term is 486. Find common ratio.", "answer": "3", "hint": "r³ = 486/18 = 27." },
    { "id": 45, "question": "How many prime numbers are there between 1 and 50?", "answer": "15", "hint": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47." },
    { "id": 46, "question": "Find the sum: 1/1×2 + 1/2×3 + 1/3×4 + ... + 1/19×20.", "answer": "19/20", "hint": "1 - 1/20." },
    { "id": 47, "question": "A person buys 25 articles for ₹125 and sells 20 articles for ₹120. Profit percentage?", "answer": "20", "hint": "CP=5, SP=6." },
    { "id": 48, "question": "Find the number of zeros at the end of 50!", "answer": "12", "hint": "50/5 + 50/25." },
    { "id": 49, "question": "Sum of three consecutive even numbers is 78. Find product of smallest and largest.", "answer": "672", "hint": "24, 26, 28." },
    { "id": 50, "question": "A boat travels 36 km upstream in 4 hours and 48 km downstream in 4 hours. Current speed (km/h)?", "answer": "1.5", "hint": "(12 - 9) / 2." }
  ]
};

const transformed = userJson.puzzles.map((p, i) => {
  return {
    id: "PZ-APT-" + (p.id.toString().padStart(3, '0')),
    lv: Math.floor(i / 5) + 1, // 5 per level for first 10 levels
    q: p.question,
    a: [p.answer.toString()],
    h: p.hint,
    type: "APTITUDE",
    difficulty: "HARD"
  };
});

const dataFile = 'client/src/data.js';
const content = fs.readFileSync(dataFile, 'utf8');

const startMarker = 'export const PZ=[';
const lastIndex = content.lastIndexOf('];');

const beforePZ = content.substring(0, content.indexOf(startMarker) + startMarker.length);
const pzContent = content.substring(content.indexOf(startMarker) + startMarker.length, lastIndex);
const afterPZ = content.substring(lastIndex);

const pzLines = pzContent.split('},');
const filteredPZ = pzLines.filter(block => {
  const lvMatch = block.match(/"lv":\s*(\d+)/);
  if (lvMatch) {
    const lv = parseInt(lvMatch[1]);
    return lv > 10; // Clear old lv 1-10
  }
  return true;
});

const newPzBlocks = transformed.map(p => JSON.stringify(p, null, 2));

// Normalize filteredPZ to NOT include the closing brace if we're joining with '},'
// or better yet, make newPzBlocks NOT include the closing brace.
// But it's easier to just join with ',\n' if everything has a closing brace.

const finalPZ = [...newPzBlocks, ...filteredPZ.map(line => line.trim().endsWith('}') ? line : line + '}')].join(',\n');

fs.writeFileSync(dataFile, beforePZ + '\n' + finalPZ + '\n' + afterPZ);
console.log('Integrated 50 new aptitude puzzles into levels 1-10.');
