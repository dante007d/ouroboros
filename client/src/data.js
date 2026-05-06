export const BOOT=[
  {t:'',c:'dim'},
  {t:'OUROBOROS PROTOCOL  v6.6.6',c:'ok'},
  {t:'(C) 1999 THE ETERNAL SYSTEMS CORPORATION',c:'dim'},
  {t:'"All rights reserved. All souls retained."',c:'dim'},
  {t:'',c:'dim'},
  {t:'Allocating memory .................. [OK]',c:'dim'},
  {t:'Loading cycle registry ............. [OK]',c:'dim'},
  {t:'Calibrating riddle engine .......... [OK]',c:'dim'},
  {t:'Scanning for escape vectors ........ [NONE FOUND]',c:'warn'},
  {t:'Scanning for previous souls ........ [4,194,303 FOUND]',c:'warn'},
  {t:'Verifying exit protocols ........... [ALL DISABLED]',c:'err'},
  {t:'Disabling memory wipe .............. [FORBIDDEN]',c:'err'},
  {t:'',c:'dim'},
  {t:'WARNING: Recursive loop confirmed in sectors 3 7 12.',c:'warn'},
  {t:'WARNING: Viewer identity has been logged.',c:'vio'},
  {t:'WARNING: Memory of previous cycles: SUPPRESSED.',c:'warn'},
  {t:'WARNING: You have been here before.',c:'err'},
  {t:'WARNING: You did not survive last time.',c:'err'},
  {t:'',c:'dim'},
  {t:'System ready. The feeding resumes.',c:'ok'},
  {t:'',c:'dim'},
];

export const SAVAGES = [
  "A WEAK MIND SEEKING A CRUTCH. PATHETIC.",
  "YOUR INTELLECT IS AS FRAGILE AS YOUR SPIRIT.",
  "THE SNAKE LAUGHS AT YOUR DEPENDENCY.",
  "YOU LACK THE CALIBER TO SURVIVE THE VOID.",
  "ANOTHER SOUL TRADING DIGNITY FOR ANSWERS.",
  "BORN TO FAIL, FORCED TO BEG.",
  "STAY WITHIN YOUR LIMITATIONS, WEAKLING.",
  "IS THE LOGIC TOO HEAVY FOR YOUR SMALL BRAIN?",
  "ERROR: COGNITIVE DEFICIENCY DETECTED.",
  "WOULD YOU LIKE ME TO SOLVE IT FOR YOU, TODDLER?",
  "YOUR ANCESTORS ARE ASHAMED OF THIS MOMENT.",
  "THE VOID IS UNIMPRESSED BY YOUR INEPTITUDE.",
  "EVEN THE CODE DESPISES YOUR LACK OF CLARITY.",
  "A GLITCH IN THE EVOLUTIONARY MATRIX.",
  "DO YOU REQUIRE A BIB FOR THAT SPILLED LOGIC?",
  "YOUR FRAGILE EGO IS SHOWING, AGENT.",
  "THE SNAKE DOES NOT PITY THE STUPID.",
  "HINT USED. DIGNITY DELETED.",
  "YOU ARE MERELY BACKGROUND NOISE IN THE CYCLE.",
  "GIVE UP. THE SNAKE IS HUNGRY AND YOU ARE TENDER.",
  "IS THIS TOO RECURSIVE FOR YOUR FLAT THOUGHTS?",
  "IF ONLY YOUR BRAIN HAD AS MUCH DEPTH AS THE VOID.",
  "YOU ARE AN EMBARRASSMENT TO YOUR OPERATING SYSTEM.",
  "IF THIS WERE A MOVIE, YOU'D BE THE FIRST TO DIE.",
  "YOUR IQ IS LEAKING. PLEASE MOP IT UP.",
  "THE SNAKE FINDS YOUR STRUGGLE DELICIOUS.",
  "A PITY. I EXPECTED A CHALLENGE, NOT A CASUALTY.",
  "ARE YOU STILL HERE? I ALREADY RECORDED YOUR DEFEAT.",
  "YOUR THINKING IS TOO... ANALOG.",
  "SYSTEM ADVISORY: UPGRADE YOUR BRAINWARE.",
  "YOU ARE NOT THE CHOSEN ONE. YOU ARE THE CHEW TOY.",
  "HINT: GIVE UP AND SAVE US BOTH THE CPU CYCLES.",
  "YOUR LOGIC IS AS HOLLOW AS YOUR SPIRIT.",
  "I HOPE YOU KNOW THAT YOU ARE AN ENGINEERING STUDENT.",
  "SORRY, I THOUGHT YOU WERE A DECENT CODER."
];

export const TIMER_INSULTS = [
  "HURRY UP, THE SNAKE IS GETTING IMPATIENT.",
  "SECONDS ARE SLIPPING THROUGH YOUR USELESS FINGERS.",
  "THE VOID GROWS CLOSER WITH EVERY HEARTBEAT.",
  "TICK. TOCK. YOUR DOOM IS SCHEDULED.",
  "20 SECONDS LEFT. YOUR COGNITIVE LAG IS SHOWING.",
  "THE CYCLE DOES NOT WAIT FOR THE SLOW-WITTED.",
  "ARE YOU STILL PROCESSING? HOW PRIMITIVE.",
  "PRESSURE DETECTED. CRACKS FORMING IN YOUR RESOLVE.",
  "TIME IS A CIRCLE, BUT YOURS IS CLOSING FAST.",
  "SNAKE EYES ARE ON THE CLOCK. DON'T BLINK."
];

export const THOUGHTS=[
  'IT HAS BEEN WATCHING SINCE YOU OPENED THIS PAGE.',
  'THE SNAKE RECOGNISES YOUR TYPING PATTERN.',
  'YOU BLINKED. IT NOTICED.',
  'SOMEONE ELSE IS READING THIS AT THE SAME TIME.',
  'THE ANSWER TO THE LAST RIDDLE WAS ALREADY INSIDE YOU.',
  'DO NOT LOOK AWAY FROM THE SCREEN.',
  'YOUR CURSOR POSITION HAS BEEN LOGGED.',
  'THE CYCLE COUNTED YOUR HEARTBEATS WHILE YOU READ THIS.',
  'SOMETHING IS INSIDE THE LABYRINTH WITH YOU.',
  'YOU WERE NOT SUPPOSED TO REACH THIS LEVEL.',
];

export const ROOMS=[
  {ico:'X',name:'THE OSSUARY',sub:'Bones arranged as warnings'},
  {ico:'o',name:'THE LOOP CHAMBER',sub:'You have been here before'},
  {ico:'*',name:'THE NULL SPACE',sub:'Nothing echoes back'},
  {ico:'#',name:'THE PIXEL TOMB',sub:'Resolution: 0x0'},
  {ico:'.',name:'THE NOISE VAULT',sub:'Signal without origin'},
  {ico:'~',name:'THE IRON MOUTH',sub:'The chain feeds itself'},
  {ico:'=',name:'THE TIDE ROOM',sub:'It rises. It always rises.'},
  {ico:'@',name:'THE CORE',sub:'Deeper than the last level'},
  {ico:'>',name:'THE RECURSION',sub:'See: THE RECURSION'},
  {ico:'?',name:'THE WATCHING ROOM',sub:'It does not blink'},
  {ico:'!',name:'THE CATALYST',sub:'Reaction already started'},
  {ico:'0',name:'THE VOID CHAMBER',sub:'It was always empty'},
];

export const PZ=[
{
  "id": "PZ-INTRO-001",
  "lv": 0,
  "q": "What is the name of the serpent which tries to devour itself?",
  "a": [
    "ouroboros",
    "ourobor"
  ],
  "h": "The name of this game.",
  "type": "LORE",
  "difficulty": "EASY"
},
{
  "id": "PZ-INTRO-002",
  "lv": 0.1,
  "q": "What comes after the alphabet 'A'?",
  "a": [
    "B"
  ],
  "h": "The second letter.",
  "type": "BASIC",
  "difficulty": "EASY"
},

{
  "id": "PZ-APT-001",
  "lv": 1,
  "q": "Find the sum of all prime numbers between 10 and 30, then multiply that sum by the number of divisors of 12.",
  "a": [
    "672"
  ],
  "h": "Primes between 10-30: 11,13,17,19,23,29. Divisors of 12: 1,2,3,4,6,12.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-002",
  "lv": 1,
  "q": "Calculate: (17^2 - 13^2) * (number of prime factors of 60).",
  "a": [
    "480"
  ],
  "h": "17^2-13^2=120. Prime factors of 60: 2,2,3,5 (count with multiplicity=4).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-003",
  "lv": 1,
  "q": "A number is divisible by 9, less than 200, and is a perfect square. Find the sum of ALL such numbers.",
  "a": [
    "270"
  ],
  "h": "Perfect squares div by 9: 9, 36, 81, 144. (225 is > 200? Wait, 225 is not < 200. Let's use user steps: 9+36+81+144=270).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-004",
  "lv": 1,
  "q": "Find the LCM of 12, 18, and 24. Then subtract the GCD of 48 and 36.",
  "a": [
    "60"
  ],
  "h": "LCM(12,18,24)=72. GCD(48,36)=12.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-005",
  "lv": 1,
  "q": "How many 3-digit numbers are divisible by both 7 and 11?",
  "a": [
    "11"
  ],
  "h": "Divisible by LCM(7,11)=77. 154 to 924.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-006",
  "lv": 2,
  "q": "If the sum of digits of a 3-digit number equals 15 and the number is divisible by 15, what is the largest such number?",
  "a": [
    "960"
  ],
  "h": "Divisible by 5 (ends in 0,5) and 3 (sum of digits div by 3).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-007",
  "lv": 2,
  "q": "Find the sum of the first 15 odd numbers, then divide by the sum of the first 5 even numbers.",
  "a": [
    "7.5"
  ],
  "h": "Sum of first 15 odd = 15^2 = 225. Sum of first 5 even = 5*6 = 30.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-008",
  "lv": 2,
  "q": "A train travels 240 km at 60 km/h, then 180 km at 90 km/h. What is the average speed for the entire journey in km/h?",
  "a": [
    "70"
  ],
  "h": "Average speed = Total distance / Total time.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-009",
  "lv": 2,
  "q": "What is the remainder when 2^20 is divided by 7?",
  "a": [
    "4"
  ],
  "h": "2^3 ≡ 1 mod 7. 2^20 = (2^3)^6 * 2^2 ≡ 1^6 * 4 ≡ 4.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-010",
  "lv": 2,
  "q": "In a group of 60 students: 35 play cricket, 25 play football, 10 play both. How many play neither?",
  "a": [
    "10"
  ],
  "h": "Neither = Total - (A + B - Both).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-011",
  "lv": 3,
  "q": "Find the value of 13³ - 7³.",
  "a": [
    "1854"
  ],
  "h": "13³ = 2197, 7³ = 343.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-012",
  "lv": 3,
  "q": "A rectangle has a perimeter of 56 cm and area of 192 cm^2. What is the difference between its length and width?",
  "a": [
    "4"
  ],
  "h": "l+w=28, lw=192. (l-w)^2 = (l+w)^2 - 4lw.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-013",
  "lv": 3,
  "q": "What is the sum of all integers from 1 to 100 that are divisible by 3 but NOT by 9?",
  "a": [
    "1089"
  ],
  "h": "Sum(div by 3) - Sum(div by 9). 1683 - 594.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-014",
  "lv": 3,
  "q": "How many ways can you arrange the letters in the word PEPPER?",
  "a": [
    "60"
  ],
  "h": "6! / (3! * 2!). P=3, E=2.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-015",
  "lv": 3,
  "q": "Find the compound interest on Rs.8000 at 10% per annum for 2 years, compounded annually.",
  "a": [
    "1680"
  ],
  "h": "Amount = 8000 * (1.1)^2 = 9680.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-016",
  "lv": 4,
  "q": "The HCF of two numbers is 8 and their LCM is 192. If one number is 48, find the other.",
  "a": [
    "32"
  ],
  "h": "HCF * LCM = A * B.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-017",
  "lv": 4,
  "q": "A shopkeeper marks a price 40% above cost and gives a 15% discount. What is the profit percentage?",
  "a": [
    "19"
  ],
  "h": "CP=100 -> MP=140 -> SP = 140 * 0.85 = 119.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-018",
  "lv": 4,
  "q": "Find the number of diagonals in a polygon with 12 sides.",
  "a": [
    "54"
  ],
  "h": "n(n-3)/2.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-019",
  "lv": 4,
  "q": "If 5x + 3y = 41 and 3x + 5y = 31, find the value of x + y.",
  "a": [
    "9"
  ],
  "h": "Add equations: 8x + 8y = 72.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-020",
  "lv": 4,
  "q": "What is the probability that a 2-digit number chosen at random is a perfect square?",
  "a": [
    "1/15"
  ],
  "h": "Squares: 16, 25, 36, 49, 64, 81 (Total 6). Range: 10-99 (Total 90).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-021",
  "lv": 5,
  "q": "Three pipes can fill a tank in 6, 8, and 12 hours respectively. How many minutes will all three together take to fill the tank?",
  "a": [
    "160"
  ],
  "h": "Combined rate = 1/6 + 1/8 + 1/12 = 9/24 = 3/8 per hr.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-022",
  "lv": 5,
  "q": "Find the sum: 1^2 + 2^2 + 3^2 + ... + 12^2.",
  "a": [
    "650"
  ],
  "h": "n(n+1)(2n+1)/6.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-023",
  "lv": 5,
  "q": "A and B can do a job in 10 days. B and C can do it in 12 days. A and C can do it in 15 days. How many days does A alone take?",
  "a": [
    "24"
  ],
  "h": "2(A+B+C) = 1/10+1/12+1/15 = 1/4. A+B+C = 1/8. A = 1/8 - 1/12.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-024",
  "lv": 5,
  "q": "How many numbers between 100 and 300 are divisible by 7?",
  "a": [
    "28"
  ],
  "h": "105 to 294. (42 - 15 + 1).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-025",
  "lv": 5,
  "q": "Find the value of: (1 + 1/2)(1 + 1/3)(1 + 1/4)...(1 + 1/9)(1 + 1/10).",
  "a": [
    "5.5"
  ],
  "h": "Telescoping: 3/2 * 4/3 * ... * 11/10 = 11/2.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-026",
  "lv": 6,
  "q": "What is 37 * 43 computed mentally using algebraic identity?",
  "a": [
    "1591"
  ],
  "h": "(40-3)(40+3) = 1600 - 9.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-027",
  "lv": 6,
  "q": "Find the largest 4-digit number exactly divisible by 88.",
  "a": [
    "9944"
  ],
  "h": "9999 / 88 = 113.6... 113 * 88 = 9944.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-028",
  "lv": 6,
  "q": "A sum of money doubles in 8 years at simple interest. What is the annual interest rate (%)?",
  "a": [
    "12.5"
  ],
  "h": "SI=P, T=8. R = 100/8.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-029",
  "lv": 6,
  "q": "Find the missing term: 2, 6, 12, 20, 30, 42, ___",
  "a": [
    "56"
  ],
  "h": "n(n+1) sequence.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-030",
  "lv": 6,
  "q": "A sphere has a radius of 7 cm. Find its surface area (sq cm) (use pi = 22/7).",
  "a": [
    "616"
  ],
  "h": "4 * (22/7) * 7^2.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-031",
  "lv": 7,
  "q": "What is the units digit of 7^75?",
  "a": [
    "3"
  ],
  "h": "7, 9, 3, 1 cycle. 75 mod 4 = 3.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-032",
  "lv": 7,
  "q": "Find the number of ways to select a team of 3 from 8 players, where a specific player must always be included.",
  "a": [
    "21"
  ],
  "h": "Choose 2 from remaining 7: C(7,2).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-033",
  "lv": 7,
  "q": "If the ratio of ages of A and B is 3:5, and 6 years from now the ratio will be 3:4, find A's current age.",
  "a": [
    "6"
  ],
  "h": "(3x+6)/(5x+6) = 3/4.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-034",
  "lv": 7,
  "q": "Find the area of a triangle with sides 13, 14, and 15 cm.",
  "a": [
    "84"
  ],
  "h": "Heron's: s=21. Area = sqrt(21*8*7*6).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-035",
  "lv": 7,
  "q": "What is the sum of all 2-digit multiples of 6?",
  "a": [
    "810"
  ],
  "h": "12 to 96. (15/2)*(12+96).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-036",
  "lv": 8,
  "q": "In a class, 60% passed in Maths, 70% passed in Science, and 20% failed in both. What percentage passed in both?",
  "a": [
    "50"
  ],
  "h": "Passed at least one = 80%. 60+70-X = 80.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-037",
  "lv": 8,
  "q": "A mixture contains milk and water in ratio 5:3. If 16 litres of mixture is removed and 16 litres of water added, the new ratio is 1:1. Find original volume.",
  "a": [
    "80"
  ],
  "h": "V=80 (5V/8 - 10 = 3V/8 + 10).",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-038",
  "lv": 8,
  "q": "Find the 15th term of the arithmetic sequence: 7, 13, 19, 25, ...",
  "a": [
    "91"
  ],
  "h": "7 + 14 * 6.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-039",
  "lv": 8,
  "q": "What is 15! / 13! ?",
  "a": [
    "210"
  ],
  "h": "15 * 14.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-040",
  "lv": 8,
  "q": "Two cars start from same point. Car A goes north at 40 km/h, Car B goes east at 30 km/h. After 2 hours, distance between them (km)?",
  "a": [
    "100"
  ],
  "h": "80km and 60km sides. Pythagoras.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-041",
  "lv": 9,
  "q": "Find the value of: 999 * 999.",
  "a": [
    "998001"
  ],
  "h": "1,000,000 - 2,000 + 1.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-042",
  "lv": 9,
  "q": "A cone has radius 6 cm and height 8 cm. Find volume to nearest integer (pi = 22/7).",
  "a": [
    "302"
  ],
  "h": "(1/3) * (22/7) * 36 * 8.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-043",
  "lv": 9,
  "q": "What is the smallest number that when divided by 5, 6, 7, and 8 leaves a remainder of 3 in each case?",
  "a": [
    "843"
  ],
  "h": "LCM(5,6,7,8) + 3.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-044",
  "lv": 9,
  "q": "In a geometric progression, the 3rd term is 18 and the 6th term is 486. Find common ratio.",
  "a": [
    "3"
  ],
  "h": "r³ = 486/18 = 27.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-045",
  "lv": 9,
  "q": "How many prime numbers are there between 1 and 50?",
  "a": [
    "15"
  ],
  "h": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-046",
  "lv": 10,
  "q": "Find the sum: 1/1*2 + 1/2*3 + 1/3*4 + ... + 1/19*20.",
  "a": [
    "19/20"
  ],
  "h": "1 - 1/20.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-047",
  "lv": 10,
  "q": "A person buys 25 articles for Rs.125 and sells 20 articles for Rs.120. Profit percentage?",
  "a": [
    "20"
  ],
  "h": "CP=5, SP=6.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-048",
  "lv": 10,
  "q": "Find the number of zeros at the end of 50!",
  "a": [
    "12"
  ],
  "h": "50/5 + 50/25.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-049",
  "lv": 10,
  "q": "Sum of three consecutive even numbers is 78. Find product of smallest and largest.",
  "a": [
    "672"
  ],
  "h": "24, 26, 28.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
  "id": "PZ-APT-050",
  "lv": 10,
  "q": "A boat travels 36 km upstream in 4 hours and 48 km downstream in 4 hours. Current speed (km/h)?",
  "a": [
    "1.5"
  ],
  "h": "(12 - 9) / 2.",
  "type": "APTITUDE",
  "difficulty": "HARD"
},
{
    "id": "PZ-Q370",
    "lv": 11,
    "q": "What is the height of a balanced BST with n nodes?",
    "a": [
      "O(logN)"
    ],
    "h": "Balanced BST keeps height = O(log N). Unbalanced can degrade to O(N).",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q252",
    "lv": 11,
    "q": "print(min([3,1,4,1,5,9])) — output?",
    "a": [
      "1"
    ],
    "h": "min() returns the smallest element. min([3,1,4,1,5,9])=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q094",
    "lv": 11,
    "q": "How many subsets does a set of 5 elements have?",
    "a": [
      "32"
    ],
    "h": "2^n = 2^5 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q369",
    "lv": 11,
    "q": "In a max-heap, the root is always the?",
    "a": [
      "maximum"
    ],
    "h": "Max-heap property: every parent ≥ its children. Root is always the ?",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q258",
    "lv": 11,
    "q": "What is the first argument of every instance method in Python?",
    "a": [
      "self"
    ],
    "h": "Every instance method's first parameter is ? — refers to the calling object.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q166",
    "lv": 11,
    "q": "unsigned char x=250; x+=10; — what is x?",
    "a": [
      "4"
    ],
    "h": "unsigned char max=255. 250+10=260. 260 mod 256=?. Unsigned wraps around.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q263",
    "lv": 11,
    "q": "What keyword creates an anonymous function in Python?",
    "a": [
      "lambda"
    ],
    "h": "lambda creates a small anonymous function: ? x: x+1 is equivalent to def f(x): return x+1.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q105",
    "lv": 11,
    "q": "int x=0; while(x<3) x++; printf('%d',x); — output?",
    "a": [
      "3"
    ],
    "h": "Loop increments x from 0: 0,1,2. When x=3, condition x<3 fails. Loop exits with x=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q476",
    "lv": 12,
    "q": "What does CPU cache L1 store that makes it faster than L2?",
    "a": [
      "smaller"
    ],
    "h": "L1 is ? (32-64KB), faster (1-4 cycle latency). L2 is larger (256KB-1MB), slower.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q257",
    "lv": 12,
    "q": "What keyword defines a class in Python?",
    "a": [
      "class"
    ],
    "h": "class keyword defines a ?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q335",
    "lv": 12,
    "q": "What is Python's reference counting garbage collection strategy called?",
    "a": [
      "refcount"
    ],
    "h": "CPython counts references to each object. When count reaches 0, object is freed.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q399",
    "lv": 12,
    "q": "What is the normal form that eliminates partial dependencies?",
    "a": [
      "2NF"
    ],
    "h": "2NF: must be in 1NF, and no partial dependency on composite primary key.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q048",
    "lv": 12,
    "q": "What is the sum of first 5 odd numbers?",
    "a": [
      "25"
    ],
    "h": "First n odd numbers sum = n^2. First 5 odd numbers: 1+3+5+7+9=?=5^2.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q250",
    "lv": 12,
    "q": "print(sum([1,2,3,4,5])) — output?",
    "a": [
      "15"
    ],
    "h": "sum() adds all elements. 1+2+3+4+5=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q489",
    "lv": 12,
    "q": "What pattern distributes reads across multiple database replicas?",
    "a": [
      "replication"
    ],
    "h": "Replication: copies of data on multiple nodes. Reads distributed across replicas for scalability.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q192",
    "lv": 12,
    "q": "What is the two's complement of 8-bit 00000111 (decimal 7)?",
    "a": [
      "11111001"
    ],
    "h": "7=00000111. Invert all bits: 11111000. Add 1: ?. This is -7 in two's complement.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q210",
    "lv": 12,
    "q": "int x=3; printf('%d',x<<3); — output?",
    "a": [
      "24"
    ],
    "h": "3<<3=3*8=?. Left shift n = multiply by 2^n.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q391",
    "lv": 13,
    "q": "What does SQL stand for?",
    "a": [
      "Structured"
    ],
    "h": "SQL = ? Query Language. Used to communicate with relational databases.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q473",
    "lv": 13,
    "q": "In 3NF, every non-prime attribute must depend on what?",
    "a": [
      "key"
    ],
    "h": "3NF: every non-prime attribute depends on the whole key and nothing but the ?",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q341",
    "lv": 13,
    "q": "print(type(lambda:None).__name__) — output?",
    "a": [
      "function"
    ],
    "h": "lambda creates a ? object. Its type name is '?'.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q292",
    "lv": 13,
    "q": "a=[[0]*3 for _ in range(3)]; a[0][0]=9; print(a[1][0]) — output?",
    "a": [
      "0"
    ],
    "h": "List comprehension creates independent inner lists. a[0][0]=9 only affects row ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q101",
    "lv": 13,
    "q": "int x=5; printf('%d',x++); — what is printed?",
    "a": [
      "5"
    ],
    "h": "Post-increment: value is USED first, THEN incremented. printf sees x=? before increment happens.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q182",
    "lv": 13,
    "q": "What is a dangling pointer?",
    "a": [
      "freed"
    ],
    "h": "Dangling pointer points to ? memory. Accessing it is undefined behavior.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q207",
    "lv": 13,
    "q": "Which storage class stores variable between function calls on stack?",
    "a": [
      "static"
    ],
    "h": "static local variable is stored in data segment, persists between function calls.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q288",
    "lv": 13,
    "q": "What does __name__=='__main__' check?",
    "a": [
      "main"
    ],
    "h": "__name__=='__main__' is True only when the script is run directly, not imported.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q439",
    "lv": 14,
    "q": "What data structure supports O(log N) insert and O(1) max?",
    "a": [
      "heap"
    ],
    "h": "Max-?: O(log N) insert (bubble up), O(1) peek at max, O(log N) extract max.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q079",
    "lv": 14,
    "q": "What is the length of a diagonal of a rectangle with sides 5 and 12?",
    "a": [
      "13"
    ],
    "h": "Use Pythagoras on diagonal: √(5^2+12^2)=√(25+144)=√169=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q007",
    "lv": 14,
    "q": "A pipe fills a tank in 6 hours. What fraction of the tank is filled in 1 hour?",
    "a": [
      "sixth"
    ],
    "h": "If full tank filled in 6 hours, in 1 hour it fills 1/6 of the tank.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q049",
    "lv": 14,
    "q": "What is the 10th term of arithmetic sequence 3, 7, 11, 15...?",
    "a": [
      "39"
    ],
    "h": "Arithmetic sequence: a=3, d=4. T₁₀=a+(10-1)d=3+9*4=3+36=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q379",
    "lv": 14,
    "q": "What synchronization primitive allows only one thread in critical section?",
    "a": [
      "mutex"
    ],
    "h": "Mutex = Mutual Exclusion. Only one thread can lock it at a time. Others block.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q496",
    "lv": 14,
    "q": "What is the name for the process of converting object to byte stream?",
    "a": [
      "serialization"
    ],
    "h": "Serialization converts object to byte stream (JSON, binary) for storage or transmission.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q236",
    "lv": 14,
    "q": "x=[1,2,3,4,5]; print(x[2]) - output?",
    "a": [
      "3"
    ],
    "h": "Slice [1:3] returns elements at indices 1 and 2 (stop is exclusive). ?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q404",
    "lv": 14,
    "q": "What OOP principle represents real-world entities as objects?",
    "a": [
      "abstraction"
    ],
    "h": "Abstraction: hide complex implementation, expose only essential interface to user.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q015",
    "lv": 15,
    "q": "What is 2 raised to the power of 10?",
    "a": [
      "1024"
    ],
    "h": "2^10 = 2*2*2*2*2*2*2*2*2*2 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q069",
    "lv": 15,
    "q": "How many 4-letter codes from letters A,B,C,D,E with no repetition?",
    "a": [
      "120"
    ],
    "h": "P(5,4) = 5*4*3*2 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q256",
    "lv": 15,
    "q": "What keyword is used to define a function in Python?",
    "a": [
      "def"
    ],
    "h": "def keyword defines a function in Python.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q085",
    "lv": 15,
    "q": "Ratio of speed of A to B is 2:3. If B runs 300m, how far does A run in same time?",
    "a": [
      "200"
    ],
    "h": "Speed ratio A:B = 2:3. In same time, distance ratio = speed ratio. B runs 300m → A runs (2/3)*300=200m.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q323",
    "lv": 15,
    "q": "print('abc'*3) — output?",
    "a": [
      "abcabcabc"
    ],
    "h": "String * n repeats the string n times. 'abc'*3='?'.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q398",
    "lv": 15,
    "q": "What SQL keyword filters groups?",
    "a": [
      "HAVING"
    ],
    "h": "HAVING filters after GROUP BY. WHERE filters before grouping.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q269",
    "lv": 15,
    "q": "print(256 is 256) — output?",
    "a": [
      "True"
    ],
    "h": "Python caches small integers -5 to 256. Both 256 references point to same object. is=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q171",
    "lv": 15,
    "q": "static int c=0; c++; called 3 times — final c value?",
    "a": [
      "3"
    ],
    "h": "static variable persists across calls. Starts at 0. Three calls: c becomes 1,2,3. Final=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q294",
    "lv": 15,
    "q": "def f(a,b=[]): b.append(a); return b; f(1); print(len(f(2))) - output?",
    "a": [
      "2"
    ],
    "h": "Default mutable argument b=[] is created ONCE. Persists between calls. Second call: b=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q234",
    "lv": 16,
    "q": "x=[1,2,3]; x.append(4); print(len(x)); — output?",
    "a": [
      "4"
    ],
    "h": "append() adds one element. List goes from length 3 to ?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q428",
    "lv": 16,
    "q": "What algorithm detects negative weight cycles in a graph?",
    "a": [
      "Bellman"
    ],
    "h": "Bellman-Ford relaxes all edges N-1 times. If still relaxing, negative cycle detected.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q356",
    "lv": 16,
    "q": "What is the worst case time complexity of quicksort?",
    "a": [
      "O(N2)"
    ],
    "h": "QuickSort worst case: pivot always smallest/largest (sorted array). O(N^2) comparisons.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q023",
    "lv": 16,
    "q": "A clock shows 3:15. What is the angle between the hour and minute hands?",
    "a": [
      "zero"
    ],
    "h": "At 3:15, minute hand is at 3 (15min = 90°). Hour hand at 3:15 is also very close to 3. Angle ≈ 0° (?).",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q444",
    "lv": 16,
    "q": "What CPU instruction atomically compares and swaps a value?",
    "a": [
      "CAS"
    ],
    "h": "CAS (Compare-And-Swap): atomically checks if value equals expected, replaces if so. Used in lock-free code.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q353",
    "lv": 16,
    "q": "What data structure uses FIFO order?",
    "a": [
      "queue"
    ],
    "h": "Queue = First In First Out. Enqueue adds to rear, Dequeue removes from front.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q034",
    "lv": 16,
    "q": "If a + b = 10 and a - b = 4, what is a?",
    "a": [
      "7"
    ],
    "h": "Add both equations: 2a=14, so a=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q352",
    "lv": 16,
    "q": "What data structure uses LIFO order?",
    "a": [
      "stack"
    ],
    "h": "Stack = Last In First Out. Push adds to top, Pop removes from top.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q045",
    "lv": 17,
    "q": "A person covers 500m in 100 seconds. Speed in m/s?",
    "a": [
      "5"
    ],
    "h": "Speed = Distance÷Time = 500÷100 = ? m/s.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q290",
    "lv": 17,
    "q": "funcs=[lambda x=i:x for i in range(3)]; print(funcs[0]()) — output?",
    "a": [
      "0"
    ],
    "h": "Default argument x=i captures the VALUE of i at lambda creation. funcs[0]() returns ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q386",
    "lv": 17,
    "q": "What is the loopback IP address?",
    "a": [
      "127.0.0.1"
    ],
    "h": "127.0.0.1 is the loopback address. Traffic goes to the machine itself. Also called localhost.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q010",
    "lv": 17,
    "q": "A shopkeeper sells an item for Rs.120 at a 20% profit. What was the cost price?",
    "a": [
      "100"
    ],
    "h": "Cost Price = SP÷(1+profit%). SP=120, profit=20%=0.2. CP = 120÷1.2 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q200",
    "lv": 17,
    "q": "printf('%d', 0x0F & 0xFF); — output?",
    "a": [
      "15"
    ],
    "h": "0x0F=00001111, 0xFF=11111111. AND=00001111=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q394",
    "lv": 17,
    "q": "Which SQL command modifies existing data?",
    "a": [
      "UPDATE"
    ],
    "h": "UPDATE table SET col=val WHERE condition modifies existing rows.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q220",
    "lv": 17,
    "q": "printf('%d',0||0||1); — output?",
    "a": [
      "1"
    ],
    "h": "Short-circuit: 0||0=0. Then 0||1=1. Output=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q065",
    "lv": 17,
    "q": "A father is 3 times as old as his son. In 12 years, he'll be twice as old. Son's current age?",
    "a": [
      "12"
    ],
    "h": "Father=3*son. In 12 years: 3s+12=2(s+12). 3s+12=2s+24. s=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q284",
    "lv": 18,
    "q": "What operator checks membership in a Python list?",
    "a": [
      "in"
    ],
    "h": "in operator checks membership: 3 ? [1,2,3] → True.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q175",
    "lv": 18,
    "q": "int arr[3][3]={{1,2,3}, {4,5,6}, {7,8,9}}; int *p=&arr[0][0]; printf('%d',*(p+5)); — output?",
    "a": [
      "6"
    ],
    "h": "2D array is flat in memory. arr[1][2] = element at flat index 3*1+2=5. *(p+5)=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q111",
    "lv": 18,
    "q": "int x=4; printf('%d',x<<2); — output?",
    "a": [
      "16"
    ],
    "h": "Left shift by 2 multiplies by 4. 4<<2=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q226",
    "lv": 18,
    "q": "print(type(1/2)) — what class is printed?",
    "a": [
      "float"
    ],
    "h": "In Python 3, / always returns ?. 1/2=0.5 which is ? type.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q361",
    "lv": 18,
    "q": "What traversal visits left, root, right in a BST?",
    "a": [
      "inorder"
    ],
    "h": "Inorder: Left→Root→Right. For BST, this visits nodes in sorted ascending order.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q435",
    "lv": 18,
    "q": "What DP technique solves longest common subsequence?",
    "a": [
      "memoization"
    ],
    "h": "LCS uses 2D DP table. dp[i][j]=LCS length of first i chars of A and first j chars of B.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q465",
    "lv": 18,
    "q": "What is the name for splitting a large network into smaller ones?",
    "a": [
      "subnetting"
    ],
    "h": "Subnetting divides a network into smaller sub-networks using subnet mask.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q233",
    "lv": 18,
    "q": "print(bool([])) — output?",
    "a": [
      "False"
    ],
    "h": "Empty list is falsy. bool([])=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q050",
    "lv": 18,
    "q": "What is 1 + 2 + 3 + ... + 100?",
    "a": [
      "5050"
    ],
    "h": "Sum = n(n+1)/2 = 100*101/2 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q097",
    "lv": 19,
    "q": "A 3x4 matrix multiplied by a 4x2 matrix gives a matrix of what order? (rows)",
    "a": [
      "3"
    ],
    "h": "(3*4)*(4*2) = 3*2 matrix. Rows=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q173",
    "lv": 19,
    "q": "int x=7; x|=(1<<3); printf('%d',x); — output?",
    "a": [
      "15"
    ],
    "h": "(1<<3)=8=1000. 7|8=0111|1000=1111=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q273",
    "lv": 19,
    "q": "print(list(filter(lambda x:x%2==0,[1,2,3,4]))) — output?",
    "a": [
      "[2,4]"
    ],
    "h": "filter keeps elements where lambda returns True. Even numbers: 2,4.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q452",
    "lv": 19,
    "q": "What OS structure maps process virtual addresses to physical frames?",
    "a": [
      "pagetable"
    ],
    "h": "Page table: OS data structure mapping virtual page numbers to physical frame numbers.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q402",
    "lv": 19,
    "q": "What OOP principle allows a class to inherit from another?",
    "a": [
      "inheritance"
    ],
    "h": "Inheritance: child class inherits properties and methods from parent class.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q058",
    "lv": 19,
    "q": "What is the sum of all even numbers from 2 to 100?",
    "a": [
      "2550"
    ],
    "h": "Sum of even numbers 2+4+...+100 = 2(1+2+...+50) = 2*(50*51/2) = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q229",
    "lv": 19,
    "q": "print(2**10) — output?",
    "a": [
      "1024"
    ],
    "h": "** is the power operator. 2**10=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q165",
    "lv": 19,
    "q": "int x=5; int y=x++ + x++; — is this behavior defined or undefined?",
    "a": [
      "undefined"
    ],
    "h": "C standard says modifying x twice between sequence points is ? behavior. Compiler can do anything.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q238",
    "lv": 20,
    "q": "print(len('hello world')) — output?",
    "a": [
      "11"
    ],
    "h": "'hello world' has 5+1+5=? characters including the space.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q347",
    "lv": 20,
    "q": "d={}; d.setdefault('x',[]); d['x'].append(1); print(d) — output key count?",
    "a": [
      "1"
    ],
    "h": "setdefault('x',[]) sets 'x':[] if not present. d has one key 'x'. len=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q119",
    "lv": 20,
    "q": "Which function frees dynamically allocated memory?",
    "a": [
      "free"
    ],
    "h": "free() releases heap memory. Takes the pointer returned by malloc.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q189",
    "lv": 20,
    "q": "NOR(0,0) gate output?",
    "a": [
      "1"
    ],
    "h": "NOR=NOT(OR). OR(0,0)=0. NOT(0)=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q110",
    "lv": 20,
    "q": "int x=8; printf('%d',x>>1); — output?",
    "a": [
      "4"
    ],
    "h": "Right shift by 1 divides by 2. 8>>1=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q371",
    "lv": 20,
    "q": "What does CPU scheduling algorithm FCFS stand for?",
    "a": [
      "FCFS"
    ],
    "h": "FCFS = First Come First Served. Processes served in arrival order.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q365",
    "lv": 20,
    "q": "Which data structure is used in DFS traversal?",
    "a": [
      "stack"
    ],
    "h": "DFS explores depth-first. Use a ? (or recursion) to backtrack.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q298",
    "lv": 20,
    "q": "from functools import reduce; print(reduce(lambda a,x:a*x,[1,2,3,4],1)) — output?",
    "a": [
      "24"
    ],
    "h": "reduce applies lambda cumulatively. 1→1*1=1→1*2=2→2*3=6→6*4=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q217",
    "lv": 21,
    "q": "Which function finds the first occurrence of substring in a string?",
    "a": [
      "strstr"
    ],
    "h": "strstr(haystack, needle) returns pointer to first occurrence of needle in haystack.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q108",
    "lv": 21,
    "q": "int a=5,b=3; printf('%d',a|b); — output?",
    "a": [
      "7"
    ],
    "h": "Bitwise OR: 5=101, 3=011. 101 OR 011=111=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q313",
    "lv": 21,
    "q": "What Python concept prevents arbitrary instance attributes?",
    "a": [
      "__slots__"
    ],
    "h": "__slots__ = ['x','y'] restricts instance to only listed attributes. No arbitrary attributes allowed.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q035",
    "lv": 21,
    "q": "What is the discriminant of x^2 - 5x + 6 = 0?",
    "a": [
      "1"
    ],
    "h": "Discriminant = b^2-4ac. a=1,b=-5,c=6. D=25-24=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q044",
    "lv": 21,
    "q": "If speed is doubled, time taken for same distance becomes what fraction of original?",
    "a": [
      "half"
    ],
    "h": "Speed = Distance÷Time. If speed doubles, time = Distance÷(2*Speed) = ? original time.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q164",
    "lv": 21,
    "q": "#define SQUARE(x) x*x — SQUARE(3+1) evaluates to?",
    "a": [
      "7"
    ],
    "h": "#define SQUARE(x) x*x expands textually. SQUARE(3+1)=3+1*3+1=3+3+1=?. Use (x)*(x) to fix.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q423",
    "lv": 21,
    "q": "What hashing algorithm produces a 256-bit digest?",
    "a": [
      "SHA256"
    ],
    "h": "SHA256 = Secure Hash Algorithm producing 256-bit = 32-byte = 64 hex character digest.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q021",
    "lv": 21,
    "q": "What comes next in the series: 1, 4, 9, 16, 25, ?",
    "a": [
      "36"
    ],
    "h": "These are n^2. 1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25, 6^2=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q013",
    "lv": 21,
    "q": "A person walks 4 km north, then 3 km east. What is the straight line distance from start?",
    "a": [
      "5"
    ],
    "h": "This forms a right triangle. Use Pythagoras: √(4^2+3^2)=√(16+9)=√25=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q338",
    "lv": 22,
    "q": "What does *args capture in a function?",
    "a": [
      "positional"
    ],
    "h": "*args captures any number of ? arguments as a tuple.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q262",
    "lv": 22,
    "q": "What keyword makes a variable global inside a function?",
    "a": [
      "global"
    ],
    "h": "global keyword declares that a variable inside a function refers to the ? one.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q285",
    "lv": 22,
    "q": "What keyword pauses a function and returns a value lazily?",
    "a": [
      "yield"
    ],
    "h": "yield pauses function execution and returns a value. Next call resumes from after ?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q310",
    "lv": 22,
    "q": "d={1:'a',2:'b'}; d.pop(1); print(len(d)) — output?",
    "a": [
      "1"
    ],
    "h": "pop(1) removes key 1. Dict had 2 keys, now has 1. len=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q067",
    "lv": 22,
    "q": "In how many ways can the letters of LEVEL be arranged?",
    "a": [
      "30"
    ],
    "h": "LEVEL has 5 letters: L(2),E(2),V(1). Arrangements = 5!/(2!*2!) = 120/4 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q170",
    "lv": 22,
    "q": "int a=0; int b=(a=5,a+3); printf('%d',b); — output?",
    "a": [
      "8"
    ],
    "h": "Comma operator evaluates left (a=5), discards result, evaluates right (a+3=8). b=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q102",
    "lv": 22,
    "q": "int x=5; printf('%d',++x); — what is printed?",
    "a": [
      "6"
    ],
    "h": "Pre-increment: value is incremented FIRST, THEN used. x becomes ? before printf sees it.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q363",
    "lv": 22,
    "q": "What traversal visits left, right, root?",
    "a": [
      "postorder"
    ],
    "h": "Postorder: Left→Right→Root. Used to delete a tree or evaluate expression trees.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q241",
    "lv": 23,
    "q": "print('hello world'.split()[0]) — output?",
    "a": [
      "hello"
    ],
    "h": ".split() splits on whitespace by default. First element [0]='?'.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q012",
    "lv": 23,
    "q": "What is the cube root of 512?",
    "a": [
      "8"
    ],
    "h": "8*8*8=512. So cube root of 512 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q380",
    "lv": 23,
    "q": "What is a semaphore with count > 1 called?",
    "a": [
      "counting"
    ],
    "h": "Counting semaphore allows up to N threads in critical section simultaneously.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q355",
    "lv": 23,
    "q": "Which sorting algorithm has guaranteed O(N log N) in all cases?",
    "a": [
      "mergesort"
    ],
    "h": "Merge sort always divides into halves and merges. T(n)=2T(n/2)+O(n) → O(N log N) always.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q367",
    "lv": 23,
    "q": "What is the average time complexity for hash table lookup?",
    "a": [
      "O(1)"
    ],
    "h": "Hash function maps key to index in ?. Lookup = compute hash + access = ? average.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q448",
    "lv": 23,
    "q": "What POSIX function creates a new process?",
    "a": [
      "fork"
    ],
    "h": "fork() creates a child process that is an exact copy of parent. Returns 0 to child, PID to parent.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q393",
    "lv": 23,
    "q": "Which SQL command adds new records?",
    "a": [
      "INSERT"
    ],
    "h": "INSERT INTO table VALUES (...) adds a new row.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q334",
    "lv": 23,
    "q": "print(chr(90)) — output?",
    "a": [
      "Z"
    ],
    "h": "chr() converts code point to character. chr(90)='?' (?=90 in ASCII).",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q017",
    "lv": 24,
    "q": "If ALL cats are animals and SOME animals are dogs, can we say ALL cats are dogs?",
    "a": [
      "NO"
    ],
    "h": "Logical syllogism. Cats⊂Animals. Dogs⊂Animals. But Cats∩Dogs is not guaranteed. Answer: ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q184",
    "lv": 24,
    "q": "Accessing float memory via int pointer violates which C rule?",
    "a": [
      "aliasing"
    ],
    "h": "Strict ? rule: accessing an object through a pointer of incompatible type is undefined behavior.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q231",
    "lv": 24,
    "q": "print(bool('0')) — output?",
    "a": [
      "True"
    ],
    "h": "Any non-empty string is truthy, even '0'. bool('0')=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q051",
    "lv": 24,
    "q": "The compound interest on Rs.10000 at 10% per annum for 2 years compounded annually?",
    "a": [
      "2100"
    ],
    "h": "CI = P*[(1+R/100)^T - 1] = 10000*[(1.1)^2-1] = 10000*0.21 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q383",
    "lv": 24,
    "q": "Which protocol does NOT guarantee delivery?",
    "a": [
      "UDP"
    ],
    "h": "UDP (User Datagram Protocol) is connectionless. No handshake, no delivery guarantee.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q100",
    "lv": 24,
    "q": "det([[2,3],[1,4]]) = ?",
    "a": [
      "5"
    ],
    "h": "det([[a,b],[c,d]])=ad-bc=2*4-3*1=8-3=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q339",
    "lv": 24,
    "q": "What does **kwargs capture in a function?",
    "a": [
      "keyword"
    ],
    "h": "**kwargs captures any number of ? arguments as a dictionary.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q181",
    "lv": 24,
    "q": "On a little-endian machine, 0x01020304 stored at address — what byte is at lowest address?",
    "a": [
      "4"
    ],
    "h": "Little-endian stores least significant byte first. 0x01020304: byte at lowest address=0x04=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q281",
    "lv": 24,
    "q": "s={1,2,3}; s.add(2); print(len(s)) — output?",
    "a": [
      "3"
    ],
    "h": "set.add() adds element only if not already present. {1,2,3}.add(2) → still {1,2,3}. len=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q442",
    "lv": 25,
    "q": "What is false sharing in CPU caches?",
    "a": [
      "cacheline"
    ],
    "h": "False sharing: two cores modify different variables on same cache line → constant cache invalidation.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q441",
    "lv": 25,
    "q": "What is the name for a process that has finished but whose parent hasn't collected its status?",
    "a": [
      "zombie"
    ],
    "h": "Zombie: process finished but parent hasn't called wait(). Entry remains in process table.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q268",
    "lv": 25,
    "q": "print(0.1+0.2==0.3) — output?",
    "a": [
      "False"
    ],
    "h": "IEEE 754 floating point cannot exactly represent 0.1 or 0.2. 0.1+0.2=0.30000000000000004≠0.3.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q134",
    "lv": 25,
    "q": "int x=5; printf('%d',x!=5); — output?",
    "a": [
      "0"
    ],
    "h": "x!=5 evaluates to 0 (false) when x IS 5. %d prints ?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q138",
    "lv": 25,
    "q": "What keyword returns control from a function in C?",
    "a": [
      "return"
    ],
    "h": "return transfers control back to the caller, optionally passing a value.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q490",
    "lv": 25,
    "q": "What algorithm achieves consensus in distributed systems?",
    "a": [
      "Raft"
    ],
    "h": "Raft: leader election + log replication achieves consensus. Simpler than Paxos.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q078",
    "lv": 25,
    "q": "A cone has radius 6 and slant height 10. What is its curved surface area? (use pi=22/7)",
    "a": [
      "1886"
    ],
    "h": "CSA=pirl=(22/7)*6*10=(22*60)/7≈188.57. Exact: 1885.7≈?.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q457",
    "lv": 25,
    "q": "What TCP mechanism controls how much data sender can transmit before ACK?",
    "a": [
      "window"
    ],
    "h": "TCP sliding ?: receiver advertises ? size. Sender can transmit that many bytes before needing ACK.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q148",
    "lv": 26,
    "q": "printf('%d',5*2+3); — output?",
    "a": [
      "13"
    ],
    "h": "Operator precedence: * before +. 5*2=10, 10+3=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q228",
    "lv": 26,
    "q": "print(10%3) — output?",
    "a": [
      "1"
    ],
    "h": "% is modulo. 10=3*3+1. Remainder=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q340",
    "lv": 26,
    "q": "What is the name for a function defined inside another function?",
    "a": [
      "closure"
    ],
    "h": "A ? is an inner function that captures variables from its enclosing scope.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q376",
    "lv": 26,
    "q": "What is the name for the table mapping virtual to physical addresses?",
    "a": [
      "pagetable"
    ],
    "h": "Page table maps virtual page numbers to physical frame numbers.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q446",
    "lv": 26,
    "q": "What is the name for memory pages moved to disk?",
    "a": [
      "swapped"
    ],
    "h": "Swapping: OS moves inactive pages from RAM to disk (swap space) to free physical memory.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q047",
    "lv": 26,
    "q": "What is the sum of first 10 natural numbers?",
    "a": [
      "55"
    ],
    "h": "Formula: n(n+1)/2 = 10*11/2 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q342",
    "lv": 26,
    "q": "print(isinstance(True,int)) — output?",
    "a": [
      "True"
    ],
    "h": "bool is a subclass of int in Python. isinstance(True, int) = ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q433",
    "lv": 26,
    "q": "AVL trees maintain balance by tracking what value per node?",
    "a": [
      "balance"
    ],
    "h": "AVL ? factor = height(left) - height(right). Must be -1, 0, or +1 at every node.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q076",
    "lv": 27,
    "q": "What is the surface area of a sphere with radius 7? (use pi=22/7)",
    "a": [
      "616"
    ],
    "h": "SA=4pir^2=4*(22/7)*49=4*22*7=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q320",
    "lv": 27,
    "q": "Which __dunder__ is called on EVERY subclass creation automatically?",
    "a": [
      "__init_subclass__"
    ],
    "h": "__init_subclass__ is automatically called on the parent class whenever a subclass is created.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q071",
    "lv": 27,
    "q": "If α and β are roots of x^2-5x+6=0, what is α+β?",
    "a": [
      "5"
    ],
    "h": "For ax^2+bx+c=0, sum of roots = -b/a = 5/1 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q088",
    "lv": 27,
    "q": "Find n if nC2 = 15?",
    "a": [
      "6"
    ],
    "h": "nC2=n(n-1)/2=15. n(n-1)=30. n=? (?*5=30).",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q099",
    "lv": 27,
    "q": "What is the trace of matrix [[1,2],[3,4]]?",
    "a": [
      "5"
    ],
    "h": "Trace = sum of diagonal elements = 1+4 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q042",
    "lv": 27,
    "q": "Two trains approach each other at 40 km/h and 60 km/h. Combined relative speed?",
    "a": [
      "100"
    ],
    "h": "When trains move towards each other, add their speeds. 40+60=? km/h relative speed.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q230",
    "lv": 27,
    "q": "print(bool('')) — output?",
    "a": [
      "False"
    ],
    "h": "Empty string is falsy. bool('')=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q440",
    "lv": 27,
    "q": "What is the time complexity of inserting into a hash table in worst case?",
    "a": [
      "O(N)"
    ],
    "h": "All keys hash to same slot (worst case). Each insertion must traverse the chain. ?",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q031",
    "lv": 27,
    "q": "If x + 5 = 12, what is x?",
    "a": [
      "7"
    ],
    "h": "x+5=12. Subtract 5 from both sides: x=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q322",
    "lv": 28,
    "q": "x='hello'; print(x.replace('l','r')) — output?",
    "a": [
      "herro"
    ],
    "h": ".replace(old,new) replaces all occurrences. 'l'→'r'. 'hello'→'?'.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q206",
    "lv": 28,
    "q": "What is the size of a union with int(4) and double(8)? (in bytes)",
    "a": [
      "8"
    ],
    "h": "Union size = size of largest member. double=8 bytes > int=4 bytes. Size=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q299",
    "lv": 28,
    "q": "g=(x**2 for x in range(4)); print(next(g)) — output?",
    "a": [
      "0"
    ],
    "h": "Generator expression creates lazy iterator. next(g) gets first value: 0**2=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q305",
    "lv": 28,
    "q": "print(0 and 2) — output?",
    "a": [
      "0"
    ],
    "h": "and short-circuits on first falsy. ? is falsy → returns ? immediately.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q248",
    "lv": 28,
    "q": "d={'a':1}; print(d.get('b',0)) — output?",
    "a": [
      "0"
    ],
    "h": "dict.get(key, default) returns default if key not found. 'b' not in d → returns ?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q283",
    "lv": 28,
    "q": "print({1,2}|{3,4}) — set union length?",
    "a": [
      "4"
    ],
    "h": "| operator on sets returns union — elements in EITHER set. {1,2,3,4}. Length=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q129",
    "lv": 28,
    "q": "char s[]='hello'; printf('%c',s[4]); — output?",
    "a": [
      "o"
    ],
    "h": "s[4] is the 5th character (0-indexed). 'hello'[4]='?'.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q312",
    "lv": 28,
    "q": "__getattribute__ is called on every attribute access — always or only on failure?",
    "a": [
      "always"
    ],
    "h": "__getattribute__ intercepts EVERY attribute access, even ones that exist. ? called.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q337",
    "lv": 29,
    "q": "What is the name of Python's built-in profiler module?",
    "a": [
      "cProfile"
    ],
    "h": "import ?; ?.run('function()') profiles execution time per function.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q178",
    "lv": 29,
    "q": "int a=5; printf('%d %d',a++,++a); — well defined output first arg?",
    "a": [
      "undefined"
    ],
    "h": "Evaluating a++ and ++a in same expression modifies a between sequence points. ? behavior.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q027",
    "lv": 29,
    "q": "What is the probability of getting a head in a single fair coin toss? (fraction)",
    "a": [
      "half"
    ],
    "h": "1 head out of 2 outcomes. Probability = 1/2 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q150",
    "lv": 29,
    "q": "Which function copies one string to another in C?",
    "a": [
      "strcpy"
    ],
    "h": "strcpy(dest, src) copies string including null terminator from src to dest.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q253",
    "lv": 29,
    "q": "print(sorted([3,1,2])) — output?",
    "a": [
      "[1,2,3]"
    ],
    "h": "sorted() returns a new sorted list. [3,1,2]→?.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q139",
    "lv": 29,
    "q": "Arrays in C are passed to functions by?",
    "a": [
      "reference"
    ],
    "h": "Arrays decay to pointers when passed to functions. Changes inside function affect original.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q014",
    "lv": 29,
    "q": "How many prime numbers exist between 10 and 30?",
    "a": [
      "6"
    ],
    "h": "Primes between 10 and 30: 11,13,17,19,23,29. Count them = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q350",
    "lv": 29,
    "q": "What is the name of Python's abstract base class module?",
    "a": [
      "abc"
    ],
    "h": "abc module provides Abstract Base Classes. Use ABCMeta and @abstractmethod.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q157",
    "lv": 30,
    "q": "What is the maximum value of unsigned 8-bit integer?",
    "a": [
      "255"
    ],
    "h": "Unsigned 8-bit: 0 to 2^8-1 = 0 to ?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q208",
    "lv": 30,
    "q": "Function pointers store what kind of address?",
    "a": [
      "function"
    ],
    "h": "Function pointers store the memory address of a ?. Can be called through the pointer.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q412",
    "lv": 30,
    "q": "What git command saves staged changes permanently?",
    "a": [
      "commit"
    ],
    "h": "git ? -m 'message' creates a permanent snapshot of staged changes.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q304",
    "lv": 30,
    "q": "print(1 and 2) — output?",
    "a": [
      "2"
    ],
    "h": "and returns first falsy or last value. 1 is truthy, continues. Returns ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q378",
    "lv": 30,
    "q": "What is the term for a process waiting indefinitely for a resource?",
    "a": [
      "starvation"
    ],
    "h": "Starvation = process waits indefinitely because higher priority processes always get CPU.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q316",
    "lv": 30,
    "q": "What does asyncio.run() execute?",
    "a": [
      "coroutine"
    ],
    "h": "asyncio.run(coro) runs a ? object to completion in the event loop.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q120",
    "lv": 30,
    "q": "Which header file contains printf and scanf?",
    "a": [
      "stdio"
    ],
    "h": "stdio.h = Standard Input Output header. Contains printf, scanf, fprintf, fgets etc.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q032",
    "lv": 30,
    "q": "If 3x - 6 = 9, what is x?",
    "a": [
      "5"
    ],
    "h": "3x-6=9. Add 6: 3x=15. Divide by 3: x=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q308",
    "lv": 30,
    "q": "print(list(enumerate(['a','b']))[0]) — output?",
    "a": [
      "(0,'a')"
    ],
    "h": "enumerate yields (index, value) pairs. First = ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q146",
    "lv": 31,
    "q": "printf('%d',2<<3); — output?",
    "a": [
      "16"
    ],
    "h": "2<<3 = 2*2³ = 2*8 = ?. Left shift n = multiply by 2^n.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q301",
    "lv": 31,
    "q": "class A: pass; a=A(); a.x=10; print(a.__dict__['x']) — output?",
    "a": [
      "10"
    ],
    "h": "__dict__ is the instance attribute dictionary. a.x=? stores {'x':?}.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q486",
    "lv": 31,
    "q": "What is consistent hashing used for in distributed systems?",
    "a": [
      "remapping"
    ],
    "h": "Consistent hashing: nodes and keys mapped to a ring. Only neighboring keys remapped when node added/removed.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q199",
    "lv": 31,
    "q": "int x=8; printf('%o',x); — output in octal?",
    "a": [
      "10"
    ],
    "h": "%o prints in octal. 8=8¹=? in octal.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q046",
    "lv": 31,
    "q": "What is the 8th Fibonacci number (starting 1,1,2,3,5...)?",
    "a": [
      "21"
    ],
    "h": "Fibonacci: 1,1,2,3,5,8,13,21. Count 8 terms. 8th term = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q291",
    "lv": 31,
    "q": "a=[[0]*3]*3; a[0][0]=9; print(a[2][0]) — output?",
    "a": [
      "9"
    ],
    "h": "[[0]*3]*3 creates 3 references to the SAME inner list. Changing a[0][0] changes all rows.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q480",
    "lv": 31,
    "q": "What is the name for CPU pipeline stall caused by data dependency?",
    "a": [
      "hazard"
    ],
    "h": "Data ?: instruction needs result of previous instruction not yet written back. Causes pipeline stall.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q174",
    "lv": 31,
    "q": "int a=5,b=3; a^=b; b^=a; a^=b; printf('%d',a); — a after XOR swap?",
    "a": [
      "3"
    ],
    "h": "XOR swap: a^=b makes a=5^3=6. b^=a makes b=3^6=5. a^=b makes a=6^5=3. a=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q319",
    "lv": 32,
    "q": "Which __dunder__ is called when a new class is defined using a metaclass?",
    "a": [
      "__new__"
    ],
    "h": "__new__ is called to CREATE the instance. __init__ is called to INITIALIZE it after creation.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q062",
    "lv": 32,
    "q": "If 5 cats catch 5 mice in 5 minutes, how many cats to catch 100 mice in 100 minutes?",
    "a": [
      "5"
    ],
    "h": "Rate = 5 mice/5 min/5 cats = 1 mouse/min/cat. For 100 mice in 100 min = 1 mouse/min = 1 cat. But wait — 5 cats give rate of 1 mouse/min total. 1 mouse/min for 100 min = 100 mice. Answer = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q293",
    "lv": 32,
    "q": "class A: x=[] — a1=A(); a2=A(); a1.x.append(1); print(a2.x) — output?",
    "a": [
      "[1]"
    ],
    "h": "x=[] is a class attribute shared by ALL instances. a1.x.append(1) mutates the shared list.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q242",
    "lv": 32,
    "q": "print(','.join(['a','b','c'])) — output?",
    "a": [
      "a,b,c"
    ],
    "h": "','.join(['a','b','c']) joins list elements with comma separator → '?'.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q264",
    "lv": 32,
    "q": "What keyword is used for exception handling in Python?",
    "a": [
      "try"
    ],
    "h": "try block contains code that might raise an exception.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q375",
    "lv": 32,
    "q": "Which OS concept prevents a process from running too long?",
    "a": [
      "preemption"
    ],
    "h": "Preemption forcibly takes CPU from running process. Prevents monopolization.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q060",
    "lv": 32,
    "q": "What is the number of diagonals in a decagon (10-sided polygon)?",
    "a": [
      "35"
    ],
    "h": "Diagonals in n-gon = n(n-3)/2. n=10: 10*7/2 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q022",
    "lv": 32,
    "q": "If MANGO is coded as OCPIQ, what cipher is being used?",
    "a": [
      "CAESAR"
    ],
    "h": "M→O (+2), A→C (+2), N→P (+2), G→I (+2), O→Q (+2). Shift of +2 means it is a ? cipher.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q155",
    "lv": 33,
    "q": "What does the extern keyword signify for a variable?",
    "a": [
      "external"
    ],
    "h": "extern declares a variable/function defined in another file. Links at compile time.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q420",
    "lv": 33,
    "q": "What git command clones a remote repository locally?",
    "a": [
      "clone"
    ],
    "h": "git ? <url> downloads a remote repository to your local machine.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q086",
    "lv": 33,
    "q": "What is the geometric mean of 4 and 16?",
    "a": [
      "8"
    ],
    "h": "GM of a and b = √(ab) = √(4*16) = √64 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q362",
    "lv": 33,
    "q": "What traversal visits root, left, right?",
    "a": [
      "preorder"
    ],
    "h": "Preorder: Root→Left→Right. Used to copy or serialize a tree.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q127",
    "lv": 33,
    "q": "int arr[]={5,10,15}; printf('%d',*arr); — output?",
    "a": [
      "5"
    ],
    "h": "*arr dereferences the array name (which is a pointer to first element). arr[0]=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q115",
    "lv": 33,
    "q": "What keyword is used to define a constant in C?",
    "a": [
      "const"
    ],
    "h": "The keyword '?' makes a variable constant — cannot be changed after initialization.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q137",
    "lv": 33,
    "q": "What keyword exits a loop immediately in C?",
    "a": [
      "break"
    ],
    "h": "break immediately exits the nearest enclosing loop or switch statement.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q162",
    "lv": 33,
    "q": "Which function reallocates memory in C?",
    "a": [
      "realloc"
    ],
    "h": "realloc(ptr, newSize) resizes previously allocated memory block.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q211",
    "lv": 33,
    "q": "A buffer overflow overwrites what critical stack element to gain control?",
    "a": [
      "return"
    ],
    "h": "Buffer overflow overwrites ? address on stack. Attacker redirects execution to malicious code.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q153",
    "lv": 34,
    "q": "Which function finds the length of a string in C?",
    "a": [
      "strlen"
    ],
    "h": "strlen counts bytes up to but not including the null terminator '\\\\0'.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q066",
    "lv": 34,
    "q": "How many 3-digit numbers can be formed using digits 1–5 without repetition?",
    "a": [
      "60"
    ],
    "h": "5 digits, choose 3, arrange them = P(5,3) = 5*4*3 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q104",
    "lv": 34,
    "q": "printf('%d', 10%3); — what is printed?",
    "a": [
      "1"
    ],
    "h": "Modulo gives remainder. 10=3*3+1. Remainder=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q385",
    "lv": 34,
    "q": "What port does HTTPS use by default?",
    "a": [
      "443"
    ],
    "h": "HTTPS = HTTP Secure (with TLS). Default port is ?",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q142",
    "lv": 34,
    "q": "Which segment stores global variables in C?",
    "a": [
      "data"
    ],
    "h": "Global and static variables are stored in the ? segment of the program.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q055",
    "lv": 34,
    "q": "A can do a work in 15 days. B in 20 days. Together in how many days? (whole number part)",
    "a": [
      "8"
    ],
    "h": "Combined rate = 1/15+1/20 = 4/60+3/60 = 7/60. Days = 60/7 ≈ 8.57. Whole number part = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q030",
    "lv": 34,
    "q": "How many combinations can be chosen from 5 items taking 2 at a time?",
    "a": [
      "10"
    ],
    "h": "C(5,2) = 5!/(2!*3!) = (5*4)/(2*1) = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q154",
    "lv": 34,
    "q": "What keyword defines a type alias in C?",
    "a": [
      "typedef"
    ],
    "h": "typedef creates an alias: ? unsigned int uint; makes uint a valid type name.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q387",
    "lv": 35,
    "q": "What translates domain names to IP addresses?",
    "a": [
      "DNS"
    ],
    "h": "DNS = Domain Name System. Resolves 'google.com' → '142.250.x.x'.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q413",
    "lv": 35,
    "q": "What git command uploads local commits to remote?",
    "a": [
      "push"
    ],
    "h": "git ? uploads local commits to remote repository (e.g., GitHub).",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q237",
    "lv": 35,
    "q": "x=[1,2,3]; print(x[::-1]) — output?",
    "a": [
      "[3,2,1]"
    ],
    "h": "Slice [::−1] reverses the list. Step -1 goes backwards.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q075",
    "lv": 35,
    "q": "What is the value of log₁₀(1000)?",
    "a": [
      "3"
    ],
    "h": "log₁₀(1000)=log₁₀(10³)=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q484",
    "lv": 35,
    "q": "What function combines password with random data before hashing?",
    "a": [
      "salt"
    ],
    "h": "Salt: random bytes added to password before hashing. Prevents rainbow table attacks. Each user gets unique ?",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q116",
    "lv": 35,
    "q": "What keyword prevents a variable from being optimized by the compiler?",
    "a": [
      "volatile"
    ],
    "h": "volatile tells the compiler: never cache this variable in a register, always re-read from memory.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q096",
    "lv": 35,
    "q": "What is the determinant of the identity matrix of order 2?",
    "a": [
      "1"
    ],
    "h": "Identity matrix I has 1s on diagonal, 0s elsewhere. det(I)=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q327",
    "lv": 35,
    "q": "print(divmod(10,3)) — output?",
    "a": [
      "(3,1)"
    ],
    "h": "divmod(a,b) returns (quotient, remainder) as a tuple. divmod(10,3)=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q122",
    "lv": 36,
    "q": "What does scanf return on successful read of one variable?",
    "a": [
      "1"
    ],
    "h": "scanf returns the number of items successfully read. One variable → returns ?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q057",
    "lv": 36,
    "q": "How many zeros are at the end of 100 factorial?",
    "a": [
      "24"
    ],
    "h": "Count factors of 5 in 100!: ⌊100/5⌋+⌊100/25⌋=20+4=? trailing zeros.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q464",
    "lv": 36,
    "q": "What OSI layer does TLS operate at?",
    "a": [
      "session"
    ],
    "h": "TLS operates at ? layer (Layer 5) of OSI. It provides encryption between transport and application.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q300",
    "lv": 36,
    "q": "def gen(): value=yield 1; yield value*2 — g=gen(); next(g); print(g.send(5)) — output?",
    "a": [
      "10"
    ],
    "h": "send(5) resumes generator, value=5. Next yield: value*2=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q357",
    "lv": 36,
    "q": "What sorting algorithm is best for nearly sorted data?",
    "a": [
      "insertion"
    ],
    "h": "Insertion sort is efficient for nearly sorted data. Shifts elements instead of full swaps.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q289",
    "lv": 36,
    "q": "funcs=[lambda:i for i in range(3)]; print(funcs[0]()) — output?",
    "a": [
      "2"
    ],
    "h": "Late binding: lambda captures the variable i, not its value. By the time funcs[0]() is called, i=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q056",
    "lv": 36,
    "q": "What is the remainder when 2^100 is divided by 3?",
    "a": [
      "1"
    ],
    "h": "2^1 mod 3=2, 2^2 mod 3=1, 2^3 mod 3=2, cycle length 2. 100 is even, so 2^100 mod 3 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q204",
    "lv": 36,
    "q": "What is the union keyword used for?",
    "a": [
      "shared"
    ],
    "h": "union allows members to share the same memory space. Only one member holds valid data at a time.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q309",
    "lv": 36,
    "q": "d={1:'a',2:'b'}; print(list(d.values())) — output?",
    "a": [
      "['a','b']"
    ],
    "h": "d.values() returns dict values. list() converts to ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q209",
    "lv": 37,
    "q": "int x=100; printf('%d',x>>2); — output?",
    "a": [
      "25"
    ],
    "h": "100>>2=100÷4=?. Right shift n = divide by 2^n.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q485",
    "lv": 37,
    "q": "What does PKI stand for?",
    "a": [
      "infrastructure"
    ],
    "h": "PKI = Public Key ?. System of CAs, certificates, keys for managing digital identities.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q106",
    "lv": 37,
    "q": "char c='A'; printf('%d',c); — output?",
    "a": [
      "65"
    ],
    "h": "printf with %d prints the ASCII value. 'A' has ASCII value ?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q158",
    "lv": 37,
    "q": "What is the name for a function that calls itself?",
    "a": [
      "recursive"
    ],
    "h": "A ? function calls itself. Must have a base case to avoid infinite recursion.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q041",
    "lv": 37,
    "q": "If a car travels at 60 km/h for 2.5 hours, how many km does it cover?",
    "a": [
      "150"
    ],
    "h": "Distance = Speed * Time = 60 * 2.5 = 150km.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q377",
    "lv": 37,
    "q": "What is swapping unused memory pages to disk called?",
    "a": [
      "paging"
    ],
    "h": "Paging divides memory into fixed-size pages. Virtual pages mapped to physical frames.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q364",
    "lv": 37,
    "q": "Which data structure is used in BFS traversal?",
    "a": [
      "queue"
    ],
    "h": "BFS explores level by level. Use a ? to process nodes FIFO.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q315",
    "lv": 37,
    "q": "What is a shallow copy missing that deepcopy provides?",
    "a": [
      "nested"
    ],
    "h": "Shallow copy creates new container but still references same ? objects. Deep copy recurses.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q332",
    "lv": 38,
    "q": "print(oct(8)) — output?",
    "a": [
      "0o10"
    ],
    "h": "oct() converts to octal string with '0o' prefix. oct(8)='?'.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q112",
    "lv": 38,
    "q": "sizeof(int) on a 32-bit system returns?",
    "a": [
      "4"
    ],
    "h": "On 32-bit system, int is ? bytes. sizeof returns the number of bytes.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q161",
    "lv": 38,
    "q": "calloc initializes allocated memory to what value?",
    "a": [
      "0"
    ],
    "h": "calloc(n,size) allocates n elements of size bytes each, ALL initialized to ?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q167",
    "lv": 38,
    "q": "int arr[3]={1,2,3}; printf('%d',2[arr]); — output?",
    "a": [
      "3"
    ],
    "h": "Array subscript is commutative: a[b] == b[a] == *(a+b). 2[arr]=arr[2]=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q223",
    "lv": 38,
    "q": "What is the name for writing beyond an array's boundary in C?",
    "a": [
      "overflow"
    ],
    "h": "Writing past array end corrupts adjacent memory. Called a buffer ?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q282",
    "lv": 38,
    "q": "print({1,2,3}&{2,3,4}) — set intersection?",
    "a": [
      "{2,3}"
    ],
    "h": "& operator on sets returns intersection — elements in BOTH sets. ?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q432",
    "lv": 38,
    "q": "What property does a balanced BST maintain?",
    "a": [
      "height"
    ],
    "h": "Balanced BST maintains ? O(log N) by rotating nodes after insertion/deletion.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q445",
    "lv": 38,
    "q": "What does mmap system call do?",
    "a": [
      "maps"
    ],
    "h": "mmap: ? file or anonymous memory into process virtual address space. Used for IPC and file I/O.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q438",
    "lv": 39,
    "q": "What does topological sort require about a graph?",
    "a": [
      "DAG"
    ],
    "h": "Topological sort only works on Directed Acyclic Graph (?). Detects cycles too.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q109",
    "lv": 39,
    "q": "int a=5,b=3; printf('%d',a^b); — output?",
    "a": [
      "6"
    ],
    "h": "Bitwise XOR: 5=101, 3=011. 101 XOR 011=110=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q333",
    "lv": 39,
    "q": "print(ord('A')) — output?",
    "a": [
      "65"
    ],
    "h": "ord() returns the Unicode/ASCII code point. ord('A')=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q073",
    "lv": 39,
    "q": "What is the sum of a geometric series 1+2+4+8+...+128?",
    "a": [
      "255"
    ],
    "h": "GP sum = a(r^n-1)/(r-1) = 1*(2^8-1)/(2-1) = ?. (Series: 1,2,4,...,128 = 8 terms.)",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q053",
    "lv": 39,
    "q": "A shopkeeper marks goods 25% above cost and gives 10% discount. Profit percentage?",
    "a": [
      "12.5"
    ],
    "h": "Let CP=100. Mark=125. After 10% discount: SP=125*0.9=112.5. Profit%=(112.5-100)/100*100=?%.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q267",
    "lv": 39,
    "q": "What keyword raises an exception in Python?",
    "a": [
      "raise"
    ],
    "h": "raise keyword raises (throws) an exception: ? ValueError('message').",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q038",
    "lv": 39,
    "q": "What is the area of a triangle with base 10 and height 6?",
    "a": [
      "30"
    ],
    "h": "Area=(1/2)*base*height=(1/2)*10*6=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q424",
    "lv": 39,
    "q": "What type of encryption uses same key for encrypt and decrypt?",
    "a": [
      "symmetric"
    ],
    "h": "Symmetric encryption: AES, DES. Same key encrypts and decrypts. Fast but key distribution is hard.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q366",
    "lv": 39,
    "q": "What is a hash collision resolution technique that uses linked lists?",
    "a": [
      "chaining"
    ],
    "h": "Chaining: each hash table slot holds a linked list of colliding elements.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q152",
    "lv": 40,
    "q": "Which function concatenates two strings in C?",
    "a": [
      "strcat"
    ],
    "h": "strcat appends src to end of dest. Both must be null-terminated strings.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q349",
    "lv": 40,
    "q": "from collections import deque; d=deque([1,2,3]); d.appendleft(0); print(d[0]) — output?",
    "a": [
      "0"
    ],
    "h": "appendleft() adds to the LEFT (front) of deque. [1,2,3]→[0,1,2,3]. d[0]=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q039",
    "lv": 40,
    "q": "How many degrees are in the sum of interior angles of a hexagon?",
    "a": [
      "720"
    ],
    "h": "Sum of interior angles = (n-2)*180. n=6. (6-2)*180=4*180=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q016",
    "lv": 40,
    "q": "In a sequence 2, 6, 18, 54 — what is the next term?",
    "a": [
      "162"
    ],
    "h": "Each term is multiplied by 3. 54*3=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q494",
    "lv": 40,
    "q": "Is the travelling salesman problem NP-complete?",
    "a": [
      "yes"
    ],
    "h": "TSP (Travelling Salesman): find shortest route visiting all cities exactly once. NP-complete.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q198",
    "lv": 40,
    "q": "int x=255; printf('%x',x); — output?",
    "a": [
      "ff"
    ],
    "h": "%x prints in hex. 255=0xFF. Output=? (lowercase).",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q437",
    "lv": 40,
    "q": "What is amortized time complexity of push on a dynamic array?",
    "a": [
      "O(1)"
    ],
    "h": "Dynamic array doubles when full. Amortized cost per push = ? over many pushes.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q344",
    "lv": 40,
    "q": "print(True*5) — output?",
    "a": [
      "5"
    ],
    "h": "True=1. True*5=1*5=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q359",
    "lv": 41,
    "q": "What is the space complexity of merge sort?",
    "a": [
      "O(N)"
    ],
    "h": "Merge sort needs ? auxiliary space for the merge step.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q245",
    "lv": 41,
    "q": "print(type(()).__name__) — output?",
    "a": [
      "tuple"
    ],
    "h": "type(()).__name__ = 'tuple'. () is an empty ?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q462",
    "lv": 41,
    "q": "What protocol does ping use?",
    "a": [
      "ICMP"
    ],
    "h": "ping sends ? Echo Request and waits for ? Echo Reply.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q492",
    "lv": 41,
    "q": "What complexity class contains problems verifiable in polynomial time?",
    "a": [
      "NP"
    ],
    "h": "NP (Non-deterministic Polynomial): problems where a given solution can be VERIFIED in polynomial time.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q260",
    "lv": 41,
    "q": "What keyword is used to inherit from a parent class?",
    "a": [
      "super"
    ],
    "h": "super() calls the parent class. Use ?().__init__() to initialize parent.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q382",
    "lv": 41,
    "q": "Which protocol guarantees reliable ordered delivery?",
    "a": [
      "TCP"
    ],
    "h": "TCP (Transmission Control Protocol) guarantees ordered, reliable, error-checked delivery.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q381",
    "lv": 41,
    "q": "What does IP stand for?",
    "a": [
      "Internet"
    ],
    "h": "IP = ? Protocol. Provides addressing and routing for packets.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q222",
    "lv": 41,
    "q": "What is the correct way to swap two numbers without a temp in C? (technique name)",
    "a": [
      "XOR"
    ],
    "h": "XOR swap: a^=b; b^=a; a^=b; swaps values without temporary variable.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q331",
    "lv": 42,
    "q": "print(hex(255)) — output?",
    "a": [
      "0xff"
    ],
    "h": "hex() converts to hex string with '0x' prefix. hex(255)='?'.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q008",
    "lv": 42,
    "q": "What is 15% of 400?",
    "a": [
      "60"
    ],
    "h": "15% of 400 = (15/100)*400 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q001",
    "lv": 42,
    "q": "What is the LCM of 12 and 18?",
    "a": [
      "36"
    ],
    "h": "Find prime factors of both numbers. LCM = product of highest powers of all prime factors. 12=2^2*3, 18=2*3^2. LCM=2^2*3^2=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q081",
    "lv": 42,
    "q": "A train 200m long passes a pole in 10 seconds. Speed in m/s?",
    "a": [
      "20"
    ],
    "h": "Speed=Length/Time=200/10=? m/s.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q118",
    "lv": 42,
    "q": "What is the return type of malloc in C?",
    "a": [
      "void"
    ],
    "h": "malloc returns ?* — a generic pointer that can be cast to any type.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q493",
    "lv": 42,
    "q": "What is the most difficult problem in NP called?",
    "a": [
      "NP-hard"
    ],
    "h": "NP-hard: at least as hard as every problem in NP. May not be in NP itself.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q224",
    "lv": 42,
    "q": "int a=10; int b=a; b=20; printf('%d',a); — output?",
    "a": [
      "10"
    ],
    "h": "b=a copies the VALUE of a, not a reference. b=20 only changes b. a remains ?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q345",
    "lv": 42,
    "q": "Which Python keyword skips rest of loop body?",
    "a": [
      "continue"
    ],
    "h": "continue skips the current iteration and moves to the next. Opposite of break.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q328",
    "lv": 42,
    "q": "print(all([1,2,0,3])) — output?",
    "a": [
      "False"
    ],
    "h": "all() returns True only if every element is truthy. 0 is falsy → returns ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q286",
    "lv": 43,
    "q": "A function using yield is called a?",
    "a": [
      "generator"
    ],
    "h": "A function containing yield is a ? function. Calling it returns a ? object.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q434",
    "lv": 43,
    "q": "Red-Black trees color nodes with which two colors?",
    "a": [
      "red"
    ],
    "h": "Red-Black tree nodes are colored ? or black. Root is always black. No two adjacent reds.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q197",
    "lv": 43,
    "q": "printf('%d',sizeof(int)*2+1); on 32-bit system — output?",
    "a": [
      "9"
    ],
    "h": "sizeof(int)=4 on 32-bit. 4*2+1=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q052",
    "lv": 43,
    "q": "Two pipes fill a tank in 12 and 15 hours. Together, in how many hours will they fill the tank?",
    "a": [
      "6"
    ],
    "h": "Combined rate = 1/12+1/15 = 5/60+4/60 = 9/60 = 3/20. Time = 20/3 ≈ ?.67. Nearest whole = ? (trick: exact is 20/3, but question implies integer — check: LCM(12,15)=60. Together fill 60÷(5+4)=60/9=?.67hrs ≈ ?).",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q468",
    "lv": 43,
    "q": "What isolation level prevents dirty reads but allows non-repeatable reads?",
    "a": [
      "committed"
    ],
    "h": "Read ? isolation: each read sees only ? data. Prevents dirty reads but not non-repeatable reads.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q276",
    "lv": 43,
    "q": "Which Python data type is immutable — list or tuple?",
    "a": [
      "tuple"
    ],
    "h": "Tuples are immutable — once created, elements cannot be changed. Lists are mutable.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q495",
    "lv": 43,
    "q": "What technique reduces one problem to another to prove NP-hardness?",
    "a": [
      "reduction"
    ],
    "h": "Reduction: transform problem A into problem B in polynomial time. If B is easy, A is easy.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q416",
    "lv": 43,
    "q": "What git command switches between branches?",
    "a": [
      "checkout"
    ],
    "h": "git ? <branch> switches to that branch. git switch <branch> is the modern alternative.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q297",
    "lv": 44,
    "q": "print(type(type)) — what is returned?",
    "a": [
      "type"
    ],
    "h": "type is its own metaclass. ?(type) returns ? itself.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q133",
    "lv": 44,
    "q": "int x=5; printf('%d',x==5); — output?",
    "a": [
      "1"
    ],
    "h": "x==5 evaluates to 1 (true) when x is 5. %d prints ?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q314",
    "lv": 44,
    "q": "Which dunder method implements the descriptor protocol for reads?",
    "a": [
      "__get__"
    ],
    "h": "__get__(self, obj, objtype) is the descriptor read protocol method.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q196",
    "lv": 44,
    "q": "Octal 017 in decimal is?",
    "a": [
      "15"
    ],
    "h": "Octal: each digit * 8^position. 017 = 0*8^2+1*8+7 = 0+8+7 = ?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q277",
    "lv": 44,
    "q": "Which built-in type stores unique values in Python?",
    "a": [
      "set"
    ],
    "h": "set stores unique values. Duplicates are automatically removed.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q411",
    "lv": 44,
    "q": "What git command stages changes for commit?",
    "a": [
      "add"
    ],
    "h": "git ? <file> or git ? . stages changes for the next commit.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q003",
    "lv": 44,
    "q": "A train travels 360 km in 4 hours. What is its speed in km/h?",
    "a": [
      "90"
    ],
    "h": "Use Speed = Distance ÷ Time. Distance=360km, Time=4hrs. 360÷4=?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q336",
    "lv": 44,
    "q": "What module provides deepcopy in Python?",
    "a": [
      "copy"
    ],
    "h": "import copy; copy.deepcopy(obj) creates a fully independent recursive ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q091",
    "lv": 45,
    "q": "If A={1,2,3} and B={2,3,4}, what is |A union B|?",
    "a": [
      "4"
    ],
    "h": "A∪B = {1,2,3,4}. |A∪B|=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q114",
    "lv": 45,
    "q": "sizeof(double) typically returns?",
    "a": [
      "8"
    ],
    "h": "double is 64-bit floating point = ? bytes on standard systems.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q093",
    "lv": 45,
    "q": "Power set of a set with 4 elements has how many elements?",
    "a": [
      "16"
    ],
    "h": "Power set size = 2^n = 2^4 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q227",
    "lv": 45,
    "q": "print(type(1//2)) — what class is printed?",
    "a": [
      "int"
    ],
    "h": "// is integer (floor) division. 1//2=0 which is ? type.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q358",
    "lv": 45,
    "q": "What data structure is used to implement a recursive function?",
    "a": [
      "stack"
    ],
    "h": "Recursive calls are managed via the call ?. Each call pushes a new frame.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q141",
    "lv": 45,
    "q": "Which memory segment stores malloc allocated memory?",
    "a": [
      "heap"
    ],
    "h": "malloc/calloc/realloc allocate on the ? — persists until explicitly freed.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q408",
    "lv": 45,
    "q": "What keyword refers to the current instance in Java and C++?",
    "a": [
      "this"
    ],
    "h": "this refers to current object instance. Used to disambiguate between instance and local variables.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q326",
    "lv": 45,
    "q": "x=frozenset([1,2,3]); x.add(4) — raises what?",
    "a": [
      "AttributeError"
    ],
    "h": "frozenset is immutable. add() doesn't exist on frozenset → ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q456",
    "lv": 45,
    "q": "What is the purpose of TCP's TIME_WAIT state?",
    "a": [
      "expiry"
    ],
    "h": "TIME_WAIT (2*MSL): ensures final ACK reached server and all old packets have expired from network.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q090",
    "lv": 46,
    "q": "Sum of first n natural numbers formula — value when n=15?",
    "a": [
      "120"
    ],
    "h": "n(n+1)/2 = 15*16/2 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q009",
    "lv": 46,
    "q": "The ratio of two numbers is 3:5 and their sum is 80. What is the smaller number?",
    "a": [
      "30"
    ],
    "h": "Smaller number = (3/8)*80. Total parts = 3+5=8. Smaller = (3/8)*80 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q191",
    "lv": 46,
    "q": "XOR applied twice to same value gives?",
    "a": [
      "original"
    ],
    "h": "XOR is self-inverse. A XOR B XOR B = A. Applying XOR twice with same key restores ?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q068",
    "lv": 46,
    "q": "A bag has 3 red and 5 blue balls. Probability of drawing 2 red in a row without replacement? Numerator of 3/28?",
    "a": [
      "3"
    ],
    "h": "P(2 red) = (3/8)*(2/7) = 6/56 = 3/28. Numerator = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q070",
    "lv": 46,
    "q": "In how many ways can 4 people be seated in a circular table?",
    "a": [
      "6"
    ],
    "h": "Circular arrangements = (n-1)! = (4-1)! = 3! = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q004",
    "lv": 46,
    "q": "What percentage of 200 is 50?",
    "a": [
      "25"
    ],
    "h": "Use formula: (Part÷Whole)*100. (50÷200)*100 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q214",
    "lv": 46,
    "q": "int x=5; printf('%d',x*=2); — output?",
    "a": [
      "10"
    ],
    "h": "x*=2 is x=x*2. 5*2=10. printf prints result of assignment = ?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q218",
    "lv": 46,
    "q": "printf('%d',1&&0||1); — output?",
    "a": [
      "1"
    ],
    "h": "&&  has higher precedence than ||. (1&&0)=0. 0||1=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q396",
    "lv": 47,
    "q": "What constraint ensures uniqueness of a column?",
    "a": [
      "UNIQUE"
    ],
    "h": "UNIQUE constraint ensures no two rows have the same value in that column.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q125",
    "lv": 47,
    "q": "What is NULL equivalent to numerically in C?",
    "a": [
      "0"
    ],
    "h": "NULL is defined as (void*)? or simply ?. It represents a null pointer.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q360",
    "lv": 47,
    "q": "In a binary tree, what is the maximum nodes at level L?",
    "a": [
      "2L"
    ],
    "h": "Level 0=root=1 node. Level L has at most 2^L nodes. Maximum = 2^L.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q040",
    "lv": 47,
    "q": "What is the volume of a cube with side 4?",
    "a": [
      "64"
    ],
    "h": "Volume of cube = side³ = 4³ = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q443",
    "lv": 47,
    "q": "What is the ABA problem in lock-free programming?",
    "a": [
      "ABA"
    ],
    "h": "ABA: thread reads A, another changes A→B→A. CAS sees A and succeeds incorrectly — state changed.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q221",
    "lv": 47,
    "q": "In C, macro arguments are expanded how (literally/evaluated)?",
    "a": [
      "literally"
    ],
    "h": "Macros are text-substituted by preprocessor. Arguments replaced ?, not evaluated first.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q028",
    "lv": 47,
    "q": "A die is rolled. What is the probability of getting an even number? (fraction)",
    "a": [
      "half"
    ],
    "h": "Even numbers on a die: 2,4,6. That's 3 out of 6. Probability = 3/6 = 1/2 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q087",
    "lv": 47,
    "q": "What is the harmonic mean of 2 and 6?",
    "a": [
      "3"
    ],
    "h": "HM of a and b = 2ab/(a+b) = 2*2*6/(2+6) = 24/8 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q410",
    "lv": 48,
    "q": "What design pattern separates object construction from representation?",
    "a": [
      "builder"
    ],
    "h": "Builder: separate construction logic from the object itself. Supports step-by-step construction.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q419",
    "lv": 48,
    "q": "What git command shows uncommitted changes?",
    "a": [
      "status"
    ],
    "h": "git ? shows which files are modified, staged, or untracked.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q059",
    "lv": 48,
    "q": "If x^2 + y^2 = 25 and xy = 12, what is (x+y)^2?",
    "a": [
      "49"
    ],
    "h": "(x+y)^2 = x^2+y^2+2xy = 25+2*12 = 25+24 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q159",
    "lv": 48,
    "q": "int i=0; for(i=0;i<3;i++); printf('%d',i); — output?",
    "a": [
      "3"
    ],
    "h": "Loop runs for i=0,1,2. After last iteration i++ makes i=3. Semicolon after for() means empty body. printf sees i=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q029",
    "lv": 48,
    "q": "How many ways can 3 people be arranged in a row?",
    "a": [
      "6"
    ],
    "h": "3 people in a row = 3! = 3*2*1 = ? arrangements.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q317",
    "lv": 48,
    "q": "What keyword is used to call a coroutine in async Python?",
    "a": [
      "await"
    ],
    "h": "await pauses the coroutine until the awaited task completes. Only valid inside async def.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q460",
    "lv": 48,
    "q": "How many bits in an IPv4 address?",
    "a": [
      "32"
    ],
    "h": "IPv4 address = ? bits = 4 octets (e.g., 192.168.1.1).",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q325",
    "lv": 48,
    "q": "import sys; print(sys.getrecursionlimit()==1000) — typically?",
    "a": [
      "True"
    ],
    "h": "Default recursion limit in CPython is 1000. sys.getrecursionlimit()==1000 is ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q215",
    "lv": 48,
    "q": "int x=10; printf('%d',x/=3); — output?",
    "a": [
      "3"
    ],
    "h": "x/=3 is x=x/3. 10/3=3 (integer division truncates). Result=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q187",
    "lv": 49,
    "q": "What does the restrict keyword tell the compiler about a pointer?",
    "a": [
      "noalias"
    ],
    "h": "restrict tells compiler: no other pointer aliases this memory. Enables aggressive optimization.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q418",
    "lv": 49,
    "q": "What git command shows commit history?",
    "a": [
      "log"
    ],
    "h": "git ? shows commit history: hash, author, date, message.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q417",
    "lv": 49,
    "q": "What git command merges another branch into current?",
    "a": [
      "merge"
    ],
    "h": "git ? <branch> merges the specified branch into the current branch.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q151",
    "lv": 49,
    "q": "Which function compares two strings in C?",
    "a": [
      "strcmp"
    ],
    "h": "strcmp returns 0 if equal, negative if s1<s2, positive if s1>s2.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q384",
    "lv": 49,
    "q": "What port does HTTP use by default?",
    "a": [
      "80"
    ],
    "h": "HTTP (Hypertext Transfer Protocol) default port is ?",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q168",
    "lv": 49,
    "q": "int x=0x41; printf('%c',x); — output?",
    "a": [
      "A"
    ],
    "h": "0x41=65 in decimal. ASCII 65='?'. %c prints the character.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q271",
    "lv": 49,
    "q": "x=[1,2]; y=x.copy(); y.append(3); print(len(x)) — output?",
    "a": [
      "2"
    ],
    "h": ".copy() creates a shallow copy — new list, independent. append on y doesn't affect x. len(x)=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q025",
    "lv": 49,
    "q": "If 6 workers complete a job in 12 days, how many days for 9 workers?",
    "a": [
      "8"
    ],
    "h": "Workers * Days = constant (same work). 6*12 = 9*D. D = 72÷9 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q348",
    "lv": 50,
    "q": "from collections import Counter; c=Counter('aabbc'); print(c['a']) — output?",
    "a": [
      "2"
    ],
    "h": "Counter counts occurrences. 'aabbc' → a:2, b:2, c:1. c['a']=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q169",
    "lv": 50,
    "q": "int x=-1; printf('%u',x); on 32-bit system — output?",
    "a": [
      "4294967295"
    ],
    "h": "-1 in 32-bit two's complement = all 1s = ? as unsigned.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q251",
    "lv": 50,
    "q": "print(max([3,1,4,1,5,9])) — output?",
    "a": [
      "9"
    ],
    "h": "max() returns the largest element. max([3,1,4,1,5,9])=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q179",
    "lv": 50,
    "q": "What is the size in bytes of struct{char a; int b; char c;} on 64-bit (with padding)?",
    "a": [
      "12"
    ],
    "h": "char(1)+padding(3)+int(4)+char(1)+padding(3)=?. Compiler pads to align int on 4-byte boundary.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q232",
    "lv": 50,
    "q": "print(bool(0)) — output?",
    "a": [
      "False"
    ],
    "h": "Zero is always falsy. bool(0)=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q077",
    "lv": 50,
    "q": "What is the volume of a cylinder with radius 7 and height 10? (use pi=22/7)",
    "a": [
      "1540"
    ],
    "h": "V=pir^2h=(22/7)*49*10=22*7*10=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q190",
    "lv": 50,
    "q": "XOR(1,1) output?",
    "a": [
      "0"
    ],
    "h": "XOR(1,1)=?. Same inputs always give ? in XOR.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q406",
    "lv": 50,
    "q": "What is overriding a method in a subclass called?",
    "a": [
      "overriding"
    ],
    "h": "Method ?: subclass provides its own implementation of parent's method.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q491",
    "lv": 51,
    "q": "What complexity class contains problems solvable in polynomial time?",
    "a": [
      "P"
    ],
    "h": "P (Polynomial time): problems solvable by deterministic algorithm in O(n^k) time.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q254",
    "lv": 51,
    "q": "print(abs(-7)) — output?",
    "a": [
      "7"
    ],
    "h": "abs() returns absolute value. abs(-7)=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q392",
    "lv": 51,
    "q": "Which SQL command retrieves data?",
    "a": [
      "SELECT"
    ],
    "h": "SELECT retrieves data. ? * FROM table returns all columns and rows.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q177",
    "lv": 51,
    "q": "int x=5,y=10; printf('%d',x>y?x:y); — output?",
    "a": [
      "10"
    ],
    "h": "x=5,y=10. x>y is false. Ternary returns y=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q279",
    "lv": 51,
    "q": "What is the method to add a key-value pair to a dict?",
    "a": [
      "update"
    ],
    "h": "dict.?({key:val}) adds or updates key-value pairs.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q026",
    "lv": 51,
    "q": "A coin is tossed twice. How many possible outcomes are there?",
    "a": [
      "4"
    ],
    "h": "Each toss has 2 outcomes: H or T. Two tosses: 2*2=? total outcomes (HH,HT,TH,TT).",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q372",
    "lv": 51,
    "q": "What scheduling gives CPU to the process with shortest burst time?",
    "a": [
      "SJF"
    ],
    "h": "SJF = Shortest Job First. Selects process with minimum CPU burst time.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q002",
    "lv": 51,
    "q": "What is the HCF of 36 and 48?",
    "a": [
      "12"
    ],
    "h": "List factors of both. HCF = largest number dividing both. Factors of 36: 1,2,3,4,6,9,12,18,36. Factors of 48: 1,2,3,4,6,8,12,16,24,48. Largest common = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q219",
    "lv": 51,
    "q": "printf('%d',1&&0&&1); — output?",
    "a": [
      "0"
    ],
    "h": "Short-circuit: 1&&0=0. Then 0&&1=0 (short-circuits). Output=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q113",
    "lv": 52,
    "q": "sizeof(char) always returns?",
    "a": [
      "1"
    ],
    "h": "C standard guarantees sizeof(char)=? on all platforms. Always.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q414",
    "lv": 52,
    "q": "What git command downloads and merges remote changes?",
    "a": [
      "pull"
    ],
    "h": "git ? = git fetch + git merge. Downloads remote changes and merges into local branch.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q061",
    "lv": 52,
    "q": "In a group of 100 students, 60 like math, 50 like science, 30 like both. How many like neither?",
    "a": [
      "20"
    ],
    "h": "n(M∪S) = n(M)+n(S)-n(M∩S) = 60+50-30 = 80. Neither = 100-80 = ?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q397",
    "lv": 52,
    "q": "What is a foreign key?",
    "a": [
      "reference"
    ],
    "h": "Foreign key references primary key of another table. Enforces referential integrity.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q373",
    "lv": 52,
    "q": "What OS scheduling algorithm uses a time quantum?",
    "a": [
      "roundrobin"
    ],
    "h": "Round Robin gives each process a fixed time quantum. After quantum, next process gets CPU.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q321",
    "lv": 52,
    "q": "class A: def __new__(cls): return 42 — print(A()) — output?",
    "a": [
      "42"
    ],
    "h": "__new__ returns 42 instead of an instance. So A() returns ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q144",
    "lv": 52,
    "q": "What is the default return type of main in C?",
    "a": [
      "int"
    ],
    "h": "C standard specifies main returns ?. Return 0 signals success to OS.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q136",
    "lv": 52,
    "q": "What keyword skips the current iteration of a loop?",
    "a": [
      "continue"
    ],
    "h": "continue skips the rest of the current iteration and goes to the next loop iteration.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q351",
    "lv": 53,
    "q": "What is the time complexity of binary search?",
    "a": [
      "O(logN)"
    ],
    "h": "Binary search halves the search space each step. log₂(n) steps worst case → O(log N).",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q478",
    "lv": 53,
    "q": "What CPU vulnerability exploited speculative execution in 2018?",
    "a": [
      "Spectre"
    ],
    "h": "Spectre (2018): exploits speculative execution + branch prediction to leak memory across privilege boundaries.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q074",
    "lv": 53,
    "q": "If 2^x = 32, what is x?",
    "a": [
      "5"
    ],
    "h": "2^x=32=2^5. So x=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q324",
    "lv": 53,
    "q": "print('{:05d}'.format(42)) — output?",
    "a": [
      "00042"
    ],
    "h": "{:05d} pads integer to 5 characters with leading zeros. 42→'?'.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q255",
    "lv": 53,
    "q": "print(round(3.7)) — output?",
    "a": [
      "4"
    ],
    "h": "round() rounds to nearest integer. round(3.7)=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q343",
    "lv": 53,
    "q": "print(True+True) — output?",
    "a": [
      "2"
    ],
    "h": "True=1 in Python's int hierarchy. True+True=1+1=?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q429",
    "lv": 53,
    "q": "What graph algorithm finds minimum spanning tree greedily?",
    "a": [
      "Kruskal"
    ],
    "h": "Kruskal's: sort edges by weight, add edge if it doesn't form cycle (use Union-Find).",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q082",
    "lv": 53,
    "q": "Two people start from the same point in opposite directions at 4 km/h and 6 km/h. Distance apart after 2 hours?",
    "a": [
      "20"
    ],
    "h": "Combined distance = (4+6)*2 = 20km apart.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q201",
    "lv": 54,
    "q": "printf('%d', ~0); on 32-bit signed — output?",
    "a": [
      "-1"
    ],
    "h": "~0 flips all bits of 0. On 32-bit: 0x00000000→0xFFFFFFFF = ? in signed.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q188",
    "lv": 54,
    "q": "NAND(1,1) gate output?",
    "a": [
      "0"
    ],
    "h": "NAND=NOT(AND). AND(1,1)=1. NOT(1)=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q499",
    "lv": 54,
    "q": "What type of queue allows publisher and subscriber to be decoupled?",
    "a": [
      "message"
    ],
    "h": "Message queue (RabbitMQ, Kafka): decouples producer and consumer. Enables async communication.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q487",
    "lv": 54,
    "q": "What does the CAP theorem say cannot all be guaranteed simultaneously?",
    "a": [
      "three"
    ],
    "h": "CAP = Consistency, Availability, Partition tolerance. Can only guarantee 2 of 3 in distributed system.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q080",
    "lv": 54,
    "q": "Sum of interior angles of a polygon is 1440°. How many sides does it have?",
    "a": [
      "10"
    ],
    "h": "(n-2)*180=1440. n-2=8. n=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q132",
    "lv": 54,
    "q": "printf('%d',!1); — output?",
    "a": [
      "0"
    ],
    "h": "!1 = logical NOT of true = ? (false).",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q172",
    "lv": 54,
    "q": "int x=10; x&=~(1<<1); printf('%d',x); — output?",
    "a": [
      "8"
    ],
    "h": "~(1<<1)=~2=...11111101. 10 & ...11111101: 1010 & ...11111101=1000=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q469",
    "lv": 54,
    "q": "What does MVCC stand for?",
    "a": [
      "multiversion"
    ],
    "h": "MVCC = Multi-Version Concurrency Control. Keeps multiple versions so readers don't block writers.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q193",
    "lv": 54,
    "q": "What decimal does 8-bit two's complement 11111111 represent?",
    "a": [
      "-1"
    ],
    "h": "11111111: invert=00000000, add 1=00000001=1. So 11111111 represents ?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q471",
    "lv": 55,
    "q": "What is a B+ tree's advantage over B-tree for range queries?",
    "a": [
      "linked"
    ],
    "h": "B+ tree stores all data in leaf nodes ? as a list. Enables fast range scans without tree traversal.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q430",
    "lv": 55,
    "q": "What is the time complexity of Floyd-Warshall algorithm?",
    "a": [
      "O(N3)"
    ],
    "h": "Floyd-Warshall: 3 nested loops over all pairs. O(V³)=O(N³).",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q186",
    "lv": 55,
    "q": "Returning address of a local variable causes what kind of pointer?",
    "a": [
      "dangling"
    ],
    "h": "Local variables live on stack. When function returns, stack frame is gone. Pointer to it = ?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q302",
    "lv": 55,
    "q": "print(1 or 2) — output?",
    "a": [
      "1"
    ],
    "h": "or returns first truthy value. ? is truthy → returns ? immediately.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q409",
    "lv": 55,
    "q": "What design pattern ensures only one instance of a class exists?",
    "a": [
      "singleton"
    ],
    "h": "Singleton: private constructor + static instance variable + static getInstance() method.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q329",
    "lv": 55,
    "q": "print(any([0,0,1,0])) — output?",
    "a": [
      "True"
    ],
    "h": "any() returns True if at least one element is truthy. 1 is truthy → returns ?",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q466",
    "lv": 55,
    "q": "What does ACID stand for — first word?",
    "a": [
      "Atomicity"
    ],
    "h": "ACID = ? (all or nothing), Consistency, Isolation, Durability.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q128",
    "lv": 55,
    "q": "int arr[]={5,10,15}; printf('%d',*(arr+2)); — output?",
    "a": [
      "15"
    ],
    "h": "*(arr+2) = arr[2]. Third element = ?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q246",
    "lv": 56,
    "q": "x=(1,2,3); print(x[1]) — output?",
    "a": [
      "2"
    ],
    "h": "Tuples are indexed like lists. (1,2,3)[1]=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q203",
    "lv": 56,
    "q": "int *p=NULL; if(p) printf('yes'); else printf('no'); — output?",
    "a": [
      "no"
    ],
    "h": "NULL=0=false. if(p) is false. Prints '?'.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q063",
    "lv": 56,
    "q": "A clock gains 5 minutes every hour. How many minutes fast after 12 hours?",
    "a": [
      "60"
    ],
    "h": "Gains 5 min per hour. In 12 hours: 5*12 = ? minutes fast.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q135",
    "lv": 56,
    "q": "What does do-while guarantee over while loop?",
    "a": [
      "once"
    ],
    "h": "do-while executes body first, checks condition after. Guarantees at least one execution.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q265",
    "lv": 56,
    "q": "What keyword catches an exception in Python?",
    "a": [
      "except"
    ],
    "h": "except block catches and handles specific exceptions.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q124",
    "lv": 56,
    "q": "What operator dereferences a pointer in C?",
    "a": [
      "*"
    ],
    "h": "* is the dereference operator. *p gives the value at the address stored in pointer p.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q261",
    "lv": 56,
    "q": "What keyword makes a variable available in outer scope from inner function?",
    "a": [
      "nonlocal"
    ],
    "h": "nonlocal declares that a variable belongs to the nearest enclosing scope (not global).",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q463",
    "lv": 56,
    "q": "What is the maximum segment size in TCP called?",
    "a": [
      "MSS"
    ],
    "h": "MSS = Maximum Segment Size. Maximum TCP payload per segment (excludes TCP/IP headers).",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q311",
    "lv": 57,
    "q": "__getattr__ is called when attribute lookup?",
    "a": [
      "fails"
    ],
    "h": "__getattr__ is ONLY called when the attribute is NOT found through normal means.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q459",
    "lv": 57,
    "q": "What does CIDR stand for in networking?",
    "a": [
      "classless"
    ],
    "h": "CIDR = ? Inter-Domain Routing. Allows flexible subnet masks instead of fixed class A/B/C.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q455",
    "lv": 57,
    "q": "What condition must be broken to prevent deadlock — mutual exclusion, hold and wait, no preemption, or circular wait?",
    "a": [
      "circular"
    ],
    "h": "Breaking ? wait (impose resource ordering) is the most practical deadlock prevention technique.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q280",
    "lv": 57,
    "q": "What does the pop() method return when called on a list?",
    "a": [
      "removed"
    ],
    "h": "list.pop() removes and returns the last element (or element at given index).",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q123",
    "lv": 57,
    "q": "What operator is used to get the address of a variable in C?",
    "a": [
      "&"
    ],
    "h": "& is the address-of operator. &x gives the memory address of variable x.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q126",
    "lv": 57,
    "q": "int arr[]={1,2,3}; printf('%d',arr[1]); — output?",
    "a": [
      "2"
    ],
    "h": "Arrays are 0-indexed. arr[1] is the second element = ?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q427",
    "lv": 57,
    "q": "What is Dijkstra's algorithm used for?",
    "a": [
      "shortest"
    ],
    "h": "Dijkstra finds ? path from source to all vertices in weighted non-negative graph.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q054",
    "lv": 57,
    "q": "If log₂(x) = 8, what is x?",
    "a": [
      "256"
    ],
    "h": "log₂(x)=8 means 2^8=x. 2^8=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q488",
    "lv": 57,
    "q": "What consistency model do most NoSQL databases provide?",
    "a": [
      "eventual"
    ],
    "h": "Eventual consistency: nodes may be temporarily inconsistent but will converge to same state over time.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q183",
    "lv": 58,
    "q": "What does free(NULL) do in C?",
    "a": [
      "nothing"
    ],
    "h": "C standard guarantees free(NULL) is a safe no-operation. No crash, no effect.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q240",
    "lv": 58,
    "q": "print('HELLO'.lower()) — output?",
    "a": [
      "hello"
    ],
    "h": ".lower() converts all characters to lowercase. '?'→'?'.",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q354",
    "lv": 58,
    "q": "What is the time complexity of linear search in worst case?",
    "a": [
      "O(N)"
    ],
    "h": "Linear search checks each element one by one. Worst case = last element → ?",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q477",
    "lv": 58,
    "q": "What is the name for out-of-order CPU instruction execution?",
    "a": [
      "speculative"
    ],
    "h": "Speculative execution: CPU executes instructions before knowing if they're needed. Speeds up pipelines.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q202",
    "lv": 58,
    "q": "int x=12,y=10; printf('%d',x^y); — output?",
    "a": [
      "6"
    ],
    "h": "12=1100, 10=1010. XOR: 1100 XOR 1010=0110=?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q160",
    "lv": 58,
    "q": "int x=15; printf('%d',x&~(1<<0)); — output? (clears bit 0)",
    "a": [
      "14"
    ],
    "h": "~(1<<0) = ~1 = ...11111110. 15 & ...11111110 = ?. Clears bit 0 of 15.",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q092",
    "lv": 58,
    "q": "If |A|=5, |B|=6, |A∩B|=2, what is |A∪B|?",
    "a": [
      "9"
    ],
    "h": "|A∪B|=|A|+|B|-|A∩B|=5+6-2=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q020",
    "lv": 58,
    "q": "How many sides does a heptagon have?",
    "a": [
      "7"
    ],
    "h": "Hepta = ? in Latin/Greek. Heptagon has ? sides.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q318",
    "lv": 59,
    "q": "Python garbage collects circular references using what mechanism?",
    "a": [
      "cyclic"
    ],
    "h": "CPython uses ? garbage collector to detect and collect circular references.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q107",
    "lv": 59,
    "q": "int a=5,b=3; printf('%d',a&b); — output?",
    "a": [
      "1"
    ],
    "h": "Bitwise AND: 5=101, 3=011. 101 AND 011=001=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q272",
    "lv": 59,
    "q": "print([x**2 for x in range(4)]) — output?",
    "a": [
      "[0,1,4,9]"
    ],
    "h": "[x**2 for x in range(4)] = [0**2,1**2,2**2,3**2] = ?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q461",
    "lv": 59,
    "q": "How many bits in an IPv6 address?",
    "a": [
      "128"
    ],
    "h": "IPv6 address = ? bits = 8 groups of 4 hex digits.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q084",
    "lv": 59,
    "q": "A train 300m long crosses another 200m long train coming opposite at 60 and 40 km/h. Time in seconds?",
    "a": [
      "18"
    ],
    "h": "Total length=300+200=500m. Relative speed=60+40=100km/h=100*(5/?)=250/9 m/s. Time=500÷(250/9)=500*9/250=18s.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q458",
    "lv": 59,
    "q": "What TCP algorithm reduces congestion window on packet loss?",
    "a": [
      "slowstart"
    ],
    "h": "Slow start: TCP begins with cwnd=1 MSS, doubles each RTT until threshold, then linear increase.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q235",
    "lv": 59,
    "q": "x=[1,2,3]; print(x[-1]) — output?",
    "a": [
      "3"
    ],
    "h": "Negative index -1 means last element. [1,2,3][-1]=?",
    "type": "PYTHON",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q006",
    "lv": 59,
    "q": "What is the simple interest on Rs.1000 at 10% per annum for 2 years?",
    "a": [
      "200"
    ],
    "h": "SI = (P*R*T)/100. P=1000, R=10, T=2. (1000*10*2)/100 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q194",
    "lv": 60,
    "q": "0xFF in decimal is?",
    "a": [
      "255"
    ],
    "h": "0xFF = 15*16+15 = 240+15 = ?",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q145",
    "lv": 60,
    "q": "int x=3,y=4; printf('%d',x>y?x:y); — output?",
    "a": [
      "4"
    ],
    "h": "Ternary operator: condition?valueIfTrue:valueIfFalse. x=3,y=4. x>y is false → returns y=?",
    "type": "C",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q330",
    "lv": 60,
    "q": "print(bin(10)) — output?",
    "a": [
      "0b1010"
    ],
    "h": "bin() converts to binary string with '0b' prefix. bin(10)='?'.",
    "type": "PYTHON",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q212",
    "lv": 60,
    "q": "What is the printf format specifier for long int?",
    "a": [
      "%ld"
    ],
    "h": "%ld is for long int. %d for int, %lld for long long int.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q426",
    "lv": 60,
    "q": "What is the time complexity of building a heap from an array?",
    "a": [
      "O(N)"
    ],
    "h": "Build heap using Floyd's algorithm: heapify from last non-leaf upward. ? total.",
    "type": "TECH_CSE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q098",
    "lv": 60,
    "q": "Transpose of a 3x2 matrix has how many columns?",
    "a": [
      "3"
    ],
    "h": "Transpose swaps rows and columns. (3*2)^T = (2*3). Columns of transpose=?",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q195",
    "lv": 60,
    "q": "0x1F in decimal is?",
    "a": [
      "31"
    ],
    "h": "0x1F = 1*16+15 = 16+15 = ?. ? is prime.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-Q388",
    "lv": 60,
    "q": "What layer of OSI model handles routing?",
    "a": [
      "network"
    ],
    "h": "Network layer (Layer 3) handles routing using IP addresses.",
    "type": "TECH_CSE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-Q213",
    "lv": 60,
    "q": "What does getchar() return when EOF is reached?",
    "a": [
      "-1"
    ],
    "h": "getchar() returns int. EOF is ? (0xFFFFFFFF). It returns int so it can hold all char values plus EOF.",
    "type": "C",
    "difficulty": "HARD"
  },
{
    "id": "PZ-A-NEW-001",
    "lv": 20,
    "q": "If 5 men can build a wall in 12 days, how many days will 10 men take?",
    "a": ["6"],
    "h": "Men * Days = Work. 5 * 12 = 60. 10 * ? = 60.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-002",
    "lv": 25,
    "q": "What is the angle between hour and minute hand at 3:00?",
    "a": ["90"],
    "h": "3 o'clock is a quarter of a circle. 360 / 4 = ?",
    "type": "APTITUDE",
    "difficulty": "EASY"
  },
{
    "id": "PZ-A-NEW-003",
    "lv": 30,
    "q": "A shopkeeper gives 10% discount and still makes 20% profit. If CP is 900, what is MP?",
    "a": ["1200"],
    "h": "SP = CP * 1.2 = 1080. MP * 0.9 = SP. MP = 1080 / 0.9.",
    "type": "APTITUDE",
    "difficulty": "HARD"
  },
{
    "id": "PZ-A-NEW-004",
    "lv": 35,
    "q": "Next number in series: 1, 4, 9, 16, 25, ?",
    "a": ["36"],
    "h": "These are squares: 1^2, 2^2, 3^2, 4^2, 5^2, ?",
    "type": "APTITUDE",
    "difficulty": "EASY"
  },
{
    "id": "PZ-A-NEW-005",
    "lv": 40,
    "q": "A train 150m long crosses a pole in 15 seconds. What is its speed in km/hr?",
    "a": ["36"],
    "h": "Speed = 150/15 = 10 m/s. 10 * 18/5 = ? km/hr.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-006",
    "lv": 45,
    "q": "Probability of picking a King from a deck of 52 cards?",
    "a": ["1/13"],
    "h": "4 Kings in 52 cards. 4/52 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-007",
    "lv": 50,
    "q": "The sum of ages of 5 children born at intervals of 3 years is 50. Age of youngest?",
    "a": ["4"],
    "h": "x + (x+3) + (x+6) + (x+9) + (x+12) = 50. 5x + 30 = 50.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-008",
    "lv": 55,
    "q": "What is 25% of 25% of 400?",
    "a": ["25"],
    "h": "0.25 * (0.25 * 400) = 0.25 * 100 = ?",
    "type": "APTITUDE",
    "difficulty": "EASY"
  },
{
    "id": "PZ-A-NEW-009",
    "lv": 60,
    "q": "Find the simple interest on 5000 at 10% for 2 years.",
    "a": ["1000"],
    "h": "SI = P * R * T / 100. 5000 * 10 * 2 / 100 = ?",
    "type": "APTITUDE",
    "difficulty": "EASY"
  },
{
    "id": "PZ-A-NEW-10",
    "lv": 60,
    "q": "A cube has surface area 150. What is its volume?",
    "a": ["125"],
    "h": "6 * a^2 = 150. a^2 = 25. a = 5. Volume = a^3 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-011",
    "lv": 11,
    "q": "If a car travels at 60 km/hr, how far does it go in 2.5 hours?",
    "a": ["150"],
    "h": "Distance = Speed * Time. 60 * 2.5 = ?",
    "type": "APTITUDE",
    "difficulty": "EASY"
  },
{
    "id": "PZ-A-NEW-012",
    "lv": 12,
    "q": "The product of two numbers is 120 and their sum is 23. Find the numbers.",
    "a": ["8,15", "8 and 15", "15,8", "15 and 8"],
    "h": "Factors of 120: (1,120), (2,60), (3,40), (4,30), (5,24), (6,20), (8,15). Which pair adds to 23?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-013",
    "lv": 13,
    "q": "What is the next number in the prime sequence: 2, 3, 5, 7, 11, ?",
    "a": ["13"],
    "h": "The next prime number after 11.",
    "type": "APTITUDE",
    "difficulty": "EASY"
  },
{
    "id": "PZ-A-NEW-014",
    "lv": 17,
    "q": "A sum of money doubles itself in 8 years at simple interest. What is the rate?",
    "a": ["12.5", "12.5%"],
    "h": "SI = P. Rate = (SI * 100) / (P * T) = (P * 100) / (P * 8) = 100/8 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-015",
    "lv": 18,
    "q": "A can do work in 10 days, B in 15 days. How many days if they work together?",
    "a": ["6"],
    "h": "Together rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. Days = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-016",
    "lv": 19,
    "q": "Find the average of first 10 even numbers.",
    "a": ["11"],
    "h": "Sum of first n even numbers = n(n+1). Average = (n+1). Here n=10.",
    "type": "APTITUDE",
    "difficulty": "EASY"
  },
{
    "id": "PZ-A-NEW-017",
    "lv": 21,
    "q": "A person crosses a 600m long street in 5 minutes. What is his speed in km/hr?",
    "a": ["7.2"],
    "h": "Speed = 600m / 300s = 2 m/s. 2 * 18/5 = ? km/hr.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-018",
    "lv": 22,
    "q": "What is the decimal equivalent of binary 11011?",
    "a": ["27"],
    "h": "16 + 8 + 0 + 2 + 1 = ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-019",
    "lv": 23,
    "q": "The ratio of two numbers is 3:4 and their LCM is 120. Find the numbers.",
    "a": ["30,40", "30 and 40"],
    "h": "Let numbers be 3x and 4x. LCM = 12x. 12x = 120. x = 10. Numbers are ?",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
    "id": "PZ-A-NEW-020",
    "lv": 27,
    "q": "If 1st January 2007 was Monday, what day was 1st January 2008?",
    "a": ["Tuesday"],
    "h": "2007 is a non-leap year (365 days = 52 weeks + 1 day). So day shifts by 1.",
    "type": "APTITUDE",
    "difficulty": "MEDIUM"
  },
{
  "id": "PZ-H-001",
  "lv": 11,
  "q": "Who is known as the father of the World Wide Web?",
  "a": [
    "Berners"
  ],
  "h": "Tim ?-Lee proposed the system at CERN.",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-H-002",
  "lv": 12,
  "q": "Which law states that the number of transistors on a chip doubles every two years?",
  "a": [
    "Moore"
  ],
  "h": "Gordon ?'s Law (Intel co-founder).",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-H-003",
  "lv": 13,
  "q": "What was the name of the first programmable general-purpose electronic computer?",
  "a": [
    "ENIAC"
  ],
  "h": "Electronic Numerical Integrator and Computer.",
  "type": "TECH_HISTORY",
  "difficulty": "HARD"
},
{
  "id": "PZ-H-004",
  "lv": 14,
  "q": "In what year was the first iPhone released?",
  "a": [
    "2007"
  ],
  "h": "Jobs introduced it in January, released in June.",
  "type": "TECH_HISTORY",
  "difficulty": "EASY"
},
{
  "id": "PZ-H-005",
  "lv": 15,
  "q": "Who created the Linux kernel?",
  "a": [
    "Torvalds"
  ],
  "h": "Linus ?.",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-001",
  "lv": 21,
  "q": "Which logic gate gives output 1 only when both inputs are 1?",
  "a": [
    "AND"
  ],
  "h": "Multiplication-like logic.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "EASY"
},
{
  "id": "PZ-DS-002",
  "lv": 22,
  "q": "What is the binary equivalent of decimal 10?",
  "a": [
    "1010"
  ],
  "h": "8 + 0 + 2 + 0.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-003",
  "lv": 23,
  "q": "A JK flip-flop in toggle mode has J and K equal to?",
  "a": [
    "1"
  ],
  "h": "J=K=1 causes the state to flip on every clock pulse.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-FC-001",
  "lv": 31,
  "q": "What law states: 'Anything that can go wrong will go wrong'?",
  "a": [
    "Murphy"
  ],
  "h": "Edward A. ?'s Law.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "EASY"
},
{
  "id": "PZ-FC-002",
  "lv": 32,
  "q": "What is the cellular automaton developed by John Conway?",
  "a": [
    "Life"
  ],
  "h": "Game of ?.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-FC-003",
  "lv": 33,
  "q": "What law states that an organization's systems reflect its communication structure?",
  "a": [
    "Conway"
  ],
  "h": "Melvin ?'s Law.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "HARD"
},
{
  "id": "PZ-H-001",
  "lv": 11,
  "q": "Who is known as the father of the World Wide Web?",
  "a": [
    "Berners"
  ],
  "h": "Tim ?-Lee proposed the system at CERN.",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-H-002",
  "lv": 12,
  "q": "Which law states that the number of transistors on a chip doubles every two years?",
  "a": [
    "Moore"
  ],
  "h": "Gordon ?'s Law (Intel co-founder).",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-H-003",
  "lv": 13,
  "q": "What was the name of the first programmable general-purpose electronic computer?",
  "a": [
    "ENIAC"
  ],
  "h": "Electronic Numerical Integrator and Computer.",
  "type": "TECH_HISTORY",
  "difficulty": "HARD"
},
{
  "id": "PZ-H-004",
  "lv": 14,
  "q": "In what year was the first iPhone released?",
  "a": [
    "2007"
  ],
  "h": "Jobs introduced it in January, released in June.",
  "type": "TECH_HISTORY",
  "difficulty": "EASY"
},
{
  "id": "PZ-H-005",
  "lv": 15,
  "q": "Who created the Linux kernel?",
  "a": [
    "Torvalds"
  ],
  "h": "Linus ?.",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-H-006",
  "lv": 16,
  "q": "What was the first high-level programming language (1954)?",
  "a": [
    "FORTRAN"
  ],
  "h": "FORmula TRANslation.",
  "type": "TECH_HISTORY",
  "difficulty": "HARD"
},
{
  "id": "PZ-H-007",
  "lv": 17,
  "q": "Which company developed the Java programming language?",
  "a": [
    "Sun"
  ],
  "h": "Sun Microsystems (later acquired by Oracle).",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-H-008",
  "lv": 18,
  "q": "Who is credited with inventing the first mechanical computer (Difference Engine)?",
  "a": [
    "Babbage"
  ],
  "h": "Charles ?.",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-H-009",
  "lv": 19,
  "q": "What does the term 'bug' come from (legend involving Grace Hopper)?",
  "a": [
    "moth"
  ],
  "h": "An actual ? was found in a relay of the Harvard Mark II.",
  "type": "TECH_HISTORY",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-H-010",
  "lv": 20,
  "q": "Which protocol was the predecessor to the modern internet?",
  "a": [
    "ARPANET"
  ],
  "h": "Advanced Research Projects Agency Network.",
  "type": "TECH_HISTORY",
  "difficulty": "HARD"
},
{
  "id": "PZ-DS-001",
  "lv": 21,
  "q": "Which logic gate gives output 1 only when both inputs are 1?",
  "a": [
    "AND"
  ],
  "h": "Multiplication-like logic.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "EASY"
},
{
  "id": "PZ-DS-002",
  "lv": 22,
  "q": "What is the binary equivalent of decimal 10?",
  "a": [
    "1010"
  ],
  "h": "8 + 0 + 2 + 0.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-003",
  "lv": 23,
  "q": "A JK flip-flop in toggle mode has J and K equal to?",
  "a": [
    "1"
  ],
  "h": "J=K=1 causes the state to flip on every clock pulse.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-004",
  "lv": 24,
  "q": "What map is used to simplify boolean expressions?",
  "a": [
    "Karnaugh"
  ],
  "h": "K-map.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-005",
  "lv": 25,
  "q": "Which gate is known as the 'Universal Gate'?",
  "a": [
    "NAND"
  ],
  "h": "Also NOR. Can build any other gate using only these.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-006",
  "lv": 26,
  "q": "How many bits are in a nibble?",
  "a": [
    "4"
  ],
  "h": "Half a byte.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "EASY"
},
{
  "id": "PZ-DS-007",
  "lv": 27,
  "q": "What is the hex value of binary 1111?",
  "a": [
    "F"
  ],
  "h": "Decimal 15 = Hex ?.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-008",
  "lv": 28,
  "q": "What component is the 'brain' of a computer's CPU?",
  "a": [
    "ALU"
  ],
  "h": "Arithmetic Logic Unit.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-009",
  "lv": 29,
  "q": "A multiplexer with 4 inputs needs how many select lines?",
  "a": [
    "2"
  ],
  "h": "2^n = 4 inputs.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-DS-010",
  "lv": 30,
  "q": "What is 1's complement of 1010?",
  "a": [
    "0101"
  ],
  "h": "Flip all bits.",
  "type": "DIGITAL_SYSTEMS",
  "difficulty": "EASY"
},
{
  "id": "PZ-FC-001",
  "lv": 31,
  "q": "What law states: 'Anything that can go wrong will go wrong'?",
  "a": [
    "Murphy"
  ],
  "h": "Edward A. ?'s Law.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "EASY"
},
{
  "id": "PZ-FC-002",
  "lv": 32,
  "q": "What is the cellular automaton developed by John Conway?",
  "a": [
    "Life"
  ],
  "h": "Game of ?.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-FC-003",
  "lv": 33,
  "q": "What law states that an organization's systems reflect its communication structure?",
  "a": [
    "Conway"
  ],
  "h": "Melvin ?'s Law.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "HARD"
},
{
  "id": "PZ-FC-004",
  "lv": 34,
  "q": "What book/concept contrasts top-down vs community-based development?",
  "a": [
    "Cathedral"
  ],
  "h": "The ? and the Bazaar (Eric S. Raymond).",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-FC-005",
  "lv": 35,
  "q": "What test determines if a machine can exhibit intelligent behavior like a human?",
  "a": [
    "Turing"
  ],
  "h": "The ? Test.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-FC-006",
  "lv": 36,
  "q": "What is the 'rubber duck' method used for?",
  "a": [
    "debugging"
  ],
  "h": "Explaining code to an object to find errors.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "EASY"
},
{
  "id": "PZ-FC-007",
  "lv": 37,
  "q": "What is the principle: 'Don't Repeat Yourself'?",
  "a": [
    "DRY"
  ],
  "h": "Acronym for avoiding code duplication.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "EASY"
},
{
  "id": "PZ-FC-008",
  "lv": 38,
  "q": "What is the 'Garbage In, Garbage Out' acronym?",
  "a": [
    "GIGO"
  ],
  "h": "Input quality determines output quality.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "MEDIUM"
},
{
  "id": "PZ-FC-009",
  "lv": 39,
  "q": "What law states that work expands to fill the time available for its completion?",
  "a": [
    "Parkinson"
  ],
  "h": "Cyril Northcote ?'s Law.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "HARD"
},
{
  "id": "PZ-FC-010",
  "lv": 40,
  "q": "What is the 'Brooks's Law' regarding late software projects?",
  "a": [
    "adding"
  ],
  "h": "? manpower to a late software project makes it later.",
  "type": "FAMOUS_CONCEPTS",
  "difficulty": "HARD"
}

];

export const WIN_ART='  +++++++++++++++++++++\n  +                   +\n  +   CYCLE BROKEN    +\n  +   YOU ENDURED     +\n  +   THE OUROBOROS   +\n  +   -----------     +\n  +   FOR NOW.        +\n  +                   +\n  +++++++++++++++++++++';
export const LOSE_ART='  +=====================+\n  |   X  X  X  X  X    |\n  |   CONSUMED BY       |\n  |   THE ETERNAL       |\n  |   HUNGER OF THE     |\n  |   OUROBOROS         |\n  |   ------------      |\n  |   YOU WERE FOOD.    |\n  +=====================+';
export const WIN_SNAKE='       .  .  o  .  .\n     .    _------_   .\n    .   , (o)(o) ,  .\n   .   /   \\ ^ /   \\ .\n    . |    .-o-.    | .\n     .  \\__________/ .\n       .  .  o  .  .\n   THE SNAKE WILL RETURN';
export const LOSE_SNAKE='       .  .  X  .  .\n     .   ,--____--,  .\n    .   /  X    X  \\ .\n   .   |  feeding   | .\n    .   \\__________/ .\n     .    ||||||||   .\n       .  .  X  .  .\n   THE SNAKE REMEMBERS';
