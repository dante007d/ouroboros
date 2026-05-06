const fs = require('fs');

const userQuestions = [
{ id:"H001", cat:"CS_FUNDAMENTALS", q:"What is the time complexity of binary search on a sorted array of n elements?", a:"OLOGN", hint:"Binary search halves the remaining elements every step. If you half n repeatedly until 1, you take log₂(n) steps. Express as O(log n)." },
{ id:"H002", cat:"CS_FUNDAMENTALS", q:"What is the worst-case time complexity of quicksort?", a:"ON2", hint:"Worst case: pivot is always smallest or largest element (like already sorted input). Each partition does O(n) work for n levels. Result: O(n²)." },
{ id:"H003", cat:"CS_FUNDAMENTALS", q:"What sorting algorithm has guaranteed O(n log n) in all cases with O(n) space?", a:"MERGESORT", hint:"It divides array in half repeatedly and merges sorted halves. Never degrades to O(n²). Requires extra space equal to input size." },
{ id:"H004", cat:"CS_FUNDAMENTALS", q:"Which data structure does a recursive function internally use to track calls?", a:"STACK", hint:"Every function call pushes a frame, every return pops one. LIFO behavior. Stack overflow happens when recursion is too deep." },
{ id:"H005", cat:"CS_FUNDAMENTALS", q:"What is the amortized time complexity of push on a dynamic array?", a:"O1", hint:"Dynamic array doubles when full. Costly resizing happens rarely. Average the total work across n pushes: n operations / n pushes = O(1) each." },
{ id:"H006", cat:"CS_FUNDAMENTALS", q:"In a BST, which traversal visits nodes in ascending sorted order?", a:"INORDER", hint:"BST inorder traversal: Left → Root → Right. For a BST, left subtree has smaller values and right has larger, so this visits in sorted ascending order." },
{ id:"H007", cat:"CS_FUNDAMENTALS", q:"What is the maximum number of nodes at level L in a binary tree?", a:"2L", hint:"Level 0 (root) = 1 = 2⁰. Level 1 = 2 = 2¹. Level 2 = 4 = 2². Pattern: maximum nodes at level L = 2^L." },
{ id:"H008", cat:"CS_FUNDAMENTALS", q:"Which algorithm finds the shortest path in a weighted graph with no negative edges?", a:"DIJKSTRA", hint:"Named after Edsger Dijkstra. Uses a greedy approach with a priority queue. Doesn't work with negative weight edges." },
{ id:"H009", cat:"CS_FUNDAMENTALS", q:"What does NP-complete mean in computational complexity?", a:"HARDEST", hint:"NP-complete: hardest problems in NP. Every NP problem can be reduced to it in polynomial time. If you solve one fast, you solve all NP problems." },
{ id:"H010", cat:"CS_FUNDAMENTALS", q:"What data structure gives O(1) average lookup time?", a:"HASHTABLE", hint:"Uses a hash function to compute an index directly. Average case O(1). Worst case O(n) when all keys collide. Used in Python dicts." },
{ id:"H011", cat:"CS_FUNDAMENTALS", q:"What is a deadlock in computing?", a:"CIRCULAR", hint:"Two or more processes each waiting for a resource held by the other. Neither can proceed. Circular dependency is the key characteristic." },
{ id:"H012", cat:"CS_FUNDAMENTALS", q:"What is the space complexity of merge sort?", a:"ON", hint:"Merge sort needs an auxiliary array of size n to merge halves. Unlike quicksort which sorts in-place. Extra space = O(n)." },
{ id:"H013", cat:"CS_FUNDAMENTALS", q:"What is the name for memory that retains data without power?", a:"NONVOLATILE", hint:"ROM, SSD, HDD retain data when powered off. RAM loses data — that's volatile. Phones and drives use non-volatile storage." },
{ id:"H014", cat:"CS_FUNDAMENTALS", q:"What is a graph with no cycles called?", a:"ACYCLIC", hint:"A → B → C, no way back to A = acyclic. A DAG (Directed Acyclic Graph) is an acyclic directed graph. Used in dependency resolution." },
{ id:"H015", cat:"CS_FUNDAMENTALS", q:"What is memoization used for in programming?", a:"CACHING", hint:"Storing results of expensive function calls so you don't recompute them. If same input appears again, return cached result. Optimizes recursion." },
{ id:"H141", cat:"AI_ML", q:"What does GPU stand for and why is it used for AI training?", a:"PARALLEL", hint:"Graphics Processing Unit. Originally for rendering pixels in parallel. AI training involves millions of matrix operations — same parallelism applies." },
{ id:"H142", cat:"AI_ML", q:"What is overfitting in machine learning?", a:"MEMORIZE", hint:"Model memorizes training data including noise. Performs excellent on training data but fails on new data. Like memorizing answers vs understanding concepts." },
{ id:"H143", cat:"AI_ML", q:"What is a neural network layer called that has no direct connection to input or output?", a:"HIDDEN", hint:"Neural networks: input layer → hidden layers → output layer. Intermediate layers are called hidden layers. Deep learning = many hidden layers." },
{ id:"H144", cat:"AI_ML", q:"What is the name for the AI technique where a model learns from human feedback?", a:"RLHF", hint:"Reinforcement Learning from Human Feedback. Used to train ChatGPT. Humans rate outputs, model learns to produce preferred responses." },
{ id:"H145", cat:"AI_ML", q:"What does LLM stand for?", a:"LARGELANGUAGE", hint:"Large Language Model. Trained on massive text datasets. GPT-4, Claude, Gemini are LLMs. Two words — Large Language (Model)." },
{ id:"H146", cat:"AI_ML", q:"What is the transformer architecture used for?", a:"ATTENTION", hint:"Transformers use attention mechanisms to weigh importance of different parts of input. Foundation of all modern LLMs. Introduced in 'Attention is All You Need' paper." },
{ id:"H147", cat:"AI_ML", q:"What is gradient descent used for in ML?", a:"OPTIMIZE", hint:"Optimization algorithm that minimizes loss by iteratively adjusting weights in direction of steepest descent. Like rolling downhill to find the valley." },
{ id:"H148", cat:"AI_ML", q:"What is the difference between supervised and unsupervised learning?", a:"LABELS", hint:"Supervised: training data has labels (correct answers). Model learns to predict labels. Unsupervised: no labels, model finds patterns itself. Clustering is unsupervised." },
{ id:"H149", cat:"AI_ML", q:"What is a convolutional neural network primarily used for?", a:"IMAGE", hint:"CNN: specialized for processing grid data like images. Convolutional layers detect features (edges, shapes). Used in image classification, facial recognition." },
{ id:"H150", cat:"AI_ML", q:"What is the term for AI that can generate new content?", a:"GENERATIVE", hint:"Generative AI creates new content — text (ChatGPT), images (DALL-E, Midjourney), music, code. Learns the distribution of training data." }
];

const transformed = userQuestions.map((q, i) => {
  return {
    id: "PZ-HARD-" + q.id,
    lv: 11 + (i % 50), // Spread across levels 11-60
    q: q.q,
    a: [q.a],
    h: q.hint,
    type: q.cat,
    difficulty: "HARD"
  };
});

const techHistory = [
{ id: "PZ-H-001", lv: 11, q: "Who is known as the father of the World Wide Web?", a: ["Berners"], h: "Tim ?-Lee proposed the system at CERN.", type: "TECH_HISTORY", difficulty: "MEDIUM" },
{ id: "PZ-H-002", lv: 12, q: "Which law states that the number of transistors on a chip doubles every two years?", a: ["Moore"], h: "Gordon ?'s Law (Intel co-founder).", type: "TECH_HISTORY", difficulty: "MEDIUM" },
{ id: "PZ-H-003", lv: 13, q: "What was the name of the first programmable general-purpose electronic computer?", a: ["ENIAC"], h: "Electronic Numerical Integrator and Computer.", type: "TECH_HISTORY", difficulty: "HARD" },
{ id: "PZ-H-004", lv: 14, q: "In what year was the first iPhone released?", a: ["2007"], h: "Jobs introduced it in January, released in June.", type: "TECH_HISTORY", difficulty: "EASY" },
{ id: "PZ-H-005", lv: 15, q: "Who created the Linux kernel?", a: ["Torvalds"], h: "Linus ?.", type: "TECH_HISTORY", difficulty: "MEDIUM" }
];

const digitalSystems = [
{ id: "PZ-DS-001", lv: 21, q: "Which logic gate gives output 1 only when both inputs are 1?", a: ["AND"], h: "Multiplication-like logic.", type: "DIGITAL_SYSTEMS", difficulty: "EASY" },
{ id: "PZ-DS-002", lv: 22, q: "What is the binary equivalent of decimal 10?", a: ["1010"], h: "8 + 0 + 2 + 0.", type: "DIGITAL_SYSTEMS", difficulty: "MEDIUM" },
{ id: "PZ-DS-003", lv: 23, q: "A JK flip-flop in toggle mode has J and K equal to?", a: ["1"], h: "J=K=1 causes the state to flip on every clock pulse.", type: "DIGITAL_SYSTEMS", difficulty: "MEDIUM" }
];

const famousConcepts = [
{ id: "PZ-FC-001", lv: 31, q: "What law states: 'Anything that can go wrong will go wrong'?", a: ["Murphy"], h: "Edward A. ?'s Law.", type: "FAMOUS_CONCEPTS", difficulty: "EASY" },
{ id: "PZ-FC-002", lv: 32, q: "What is the cellular automaton developed by John Conway?", a: ["Life"], h: "Game of ?.", type: "FAMOUS_CONCEPTS", difficulty: "MEDIUM" },
{ id: "PZ-FC-003", lv: 33, q: "What law states that an organization's systems reflect its communication structure?", a: ["Conway"], h: "Melvin ?'s Law.", type: "FAMOUS_CONCEPTS", difficulty: "HARD" }
];

const hardAptitude = [
{ id: "PZ-ENG-001", lv: 1, q: "In a group of 60 people, 40 like Cricket, 30 like Football, and 20 like both. How many like neither?", a: ["10"], h: "Neither = Total - (A + B - Both).", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-002", lv: 2, q: "If 2^x = 8^(y+1) and 9^y = 3^(x-9), what is the value of x?", a: ["21"], h: "Solve for y in 2y = x-9 and x = 3y+3.", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-003", lv: 3, q: "A clock's hour and minute hands overlap how many times in a 24-hour period?", a: ["22"], h: "Hands overlap every 1h 5m 27s approx. 11 times per 12 hours.", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-004", lv: 4, q: "In a Bernoulli trial with p=0.4, what is the variance of 10 independent trials?", a: ["2.4"], h: "Variance = npq = 10 * 0.4 * 0.6.", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-005", lv: 5, q: "What is the reflex angle between the hour and minute hands at 3:40?", a: ["230"], h: "Angle = |30H - 5.5M|. Reflex = 360 - Angle.", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-006", lv: 6, q: "If f(x) = x^2 + 2x, find the value of f(f(1)).", a: ["15"], h: "f(1)=3, then find f(3).", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-007", lv: 7, q: "A sum of money triples in 15 years at simple interest. What is the annual rate (%)?", a: ["13.33"], h: "SI = 2P = P*R*15/100.", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-008", lv: 8, q: "How many ways to arrange the letters of the word 'SOCIETY'?", a: ["5040"], h: "7 unique letters. Factorial of 7.", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-009", lv: 9, q: "What is the sum of interior angles of a regular hexagon (degrees)?", a: ["720"], h: "Sum = (n-2) * 180.", type: "APTITUDE", difficulty: "HARD" },
{ id: "PZ-ENG-010", lv: 10, q: "If a 3x3 matrix is singular, what is the value of its determinant?", a: ["0"], h: "Singular matrices have no inverse.", type: "APTITUDE", difficulty: "HARD" }
];

const allNew = [...transformed, ...techHistory, ...digitalSystems, ...famousConcepts, ...hardAptitude];
fs.writeFileSync('new_puzzles.json', JSON.stringify(allNew, null, 2));
console.log('Generated new_puzzles.json');
