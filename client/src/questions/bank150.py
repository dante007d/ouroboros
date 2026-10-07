"""OUROBOROS 1st-year bank: intro + 60 maths + 59 aptitude + 30 tech = 150 MCQs.
Numbers are deliberately ugly (calculator expected); every correct answer is COMPUTED here
from the same numbers that appear in the question. Run: python3 bank150.py <out.js>"""
import json, math, random, sys, datetime
from math import comb, factorial, gcd, sqrt, pi, tan, radians
from fractions import Fraction as F

def lcm(*a):
    r = 1
    for x in a: r = r * x // gcd(r, x)
    return r
def isprime(n): return n > 1 and all(n % d for d in range(2, int(n ** .5) + 1))
def ndiv(n):
    c, d = 1, 2
    while d * d <= n:
        k = 0
        while n % d == 0: n //= d; k += 1
        c *= k + 1; d += 1
    return c * (2 if n > 1 else 1)
def tz(n): return sum(n // 5**k for k in range(1, 10))
def wd(y, m, d): return datetime.date(y, m, d).strftime('%A')
def letters(w): return sum(ord(c) - 64 for c in w)

def fmt(x):
    if isinstance(x, str): return x
    x = float(x)
    return str(int(round(x))) if abs(x - round(x)) < 1e-9 else f"{x:.2f}"

rng = random.Random(150)
def auto_wrong(x, k=3):
    """Near-miss distractors in the same format as the answer."""
    v = float(x); dec = 0 if fmt(v).find('.') < 0 else 2
    step = max(1, round(abs(v) * 0.04)) if dec == 0 else max(0.01, round(abs(v) * 0.04, 2))
    cands = [v + step, v - step, v * 1.1, v * 0.9, v + 2 * step, v * 1.25, v * 0.8, v - 2 * step]
    out = []
    for c in cands:
        s = f"{c:.2f}" if dec else str(int(round(c)))
        if s != fmt(v) and s not in out and (v <= 0 or c > 0): out.append(s)
    rng.shuffle(out)
    return out[:k]

M = []  # (topic, question, answer, wrongs or None)
def m(t, q, a, w=None): M.append((t, q, a, w))
A = []
def ap(t, q, a, w=None): A.append((t, q, a, w))

# ───────────────────────── MATHS (60) ─────────────────────────
m("HCF & LCM", "LCM of the fractions 12/35, 18/49 and 24/91:", lcm(12, 18, 24) / gcd(gcd(35, 49), 91), [fmt(gcd(gcd(12, 18), 24) / lcm(35, 49, 91) * 1000), fmt(lcm(12, 18, 24)), fmt(lcm(12, 18, 24) / 49)])
m("HCF & LCM", "Greatest number that divides 4561, 7381 and 9025 leaving the same remainder in each case:", gcd(gcd(7381 - 4561, 9025 - 7381), 9025 - 4561))
m("HCF & LCM", "Least number that leaves remainder 13 when divided by 36, 48 and 84:", lcm(36, 48, 84) + 13, [fmt(lcm(36, 48, 84)), fmt(lcm(36, 48, 84) - 13), fmt(2 * lcm(36, 48, 84) + 13)])
m("HCF & LCM", "Greatest 6-digit number exactly divisible by 84, 108 and 126:", 999999 // lcm(84, 108, 126) * lcm(84, 108, 126))
m("HCF & LCM", "HCF of (2^12 - 1) and (2^18 - 1):", gcd(2**12 - 1, 2**18 - 1), ["4095", "9", "21"])
m("Number System", "Remainder when 7^1234 is divided by 13:", pow(7, 1234, 13), ["1", "7", "12"])
m("Number System", "Number of trailing zeros in 1000!:", tz(1000), ["200", "248", "250"])
m("Number System", "Number of positive divisors of 37800:", ndiv(37800))
m("Number System", "Sum of the distinct prime factors of 39270:", sum(p for p in range(2, 40) if 39270 % p == 0 and isprime(p)))
m("Number System", "How many primes lie strictly between 150 and 250?", sum(isprime(n) for n in range(151, 250)), ["17", "19", "16"])
m("BODMAS", "784 / 28 x 36 - 1296 / 54 + 17 x 23 =", 784 / 28 * 36 - 1296 / 54 + 17 * 23, [fmt(784 / (28 * 36) * 1000), fmt(784 / 28 * 36 - 1296 / (54 + 17) * 23), "1407"])
m("BODMAS", "(3/7 of 2884) / (5/9 of 1458) =", (F(3, 7) * 2884) / (F(5, 9) * 1458))
m("Percentages", "Fresh fruit is 92% water; dried fruit is 18% water. Dried fruit (kg) from 615 kg of fresh:", 615 * 0.08 / 0.82, ["49.2", "75", "56.4"])
m("Percentages", "12% of votes are invalid. The winner of 2 candidates gets 57% of valid votes and wins by 3696. Total votes cast:", 3696 / (0.14 * 0.88), ["26400", "33600", "26400.50"])
m("Percentages", "A salary is raised 18%, cut 15%, then raised 12%. Net change (%):", (1.18 * 0.85 * 1.12 - 1) * 100, ["15", "12.33", "14.84"])
m("Percentages", "37.5% of 4824 + 62.5% of 3176 =", 0.375 * 4824 + 0.625 * 3176)
m("Percentages", "A's income is 23% more than B's. B's income is less than A's by (%):", (1 - 1 / 1.23) * 100, ["23", "17.70", "19.27"])
m("Percentages", "Price rises 35%. Cut in consumption (%) to keep expenditure unchanged:", (1 - 1 / 1.35) * 100, ["35", "26.10", "24.07"])
m("Partnership", "A, B, C invest Rs 45000, 63000, 72000 for 12, 8 and 10 months. Profit Rs 1,24,500. C's share (Rs):", 124500 * 72000 * 10 / (45000 * 12 + 63000 * 8 + 72000 * 10))
m("Mixtures", "840 L of milk:water = 13:7. Water to add (L) to make the ratio 3:2:", 840 * 13 / 20 * 2 / 3 - 840 * 7 / 20, ["56", "84", "98"])
m("Mixtures", "From 125 L of milk, 25 L is drawn and replaced by water, 4 times. Milk left (L):", 125 * 0.8**4, ["45", "64", "50"])
m("Mixtures", "Rice at Rs 126/kg and Rs 135/kg is mixed with a third kind in ratio 1:1:2 to cost Rs 153/kg. Price of the third (Rs/kg):", (153 * 4 - 126 - 135) / 2, ["171", "180", "162"])
m("Ratio & Proportion", "A:B = 5:7, B:C = 9:11, C:D = 13:17. If D = 13090, then A =", 13090 * 5 * 9 * 13 / (7 * 11 * 17))
m("Averages", "The average of 47 numbers is 63.4. After removing 81.7 and 92.3, the new average:", (47 * 63.4 - 81.7 - 92.3) / 45)
m("Averages", "A batsman scores 148 in his 38th innings and raises his average by 2.5. New average:", 148 - 37 * 2.5, ["53", "58", "50.5"])
m("Averages", "Average weight of 45 students is 52.4 kg. With the teacher it rises by 0.35 kg. Teacher's weight (kg):", 46 * 52.75 - 45 * 52.4, ["52.75", "68.15", "68.50"])
m("Averages", "Three equal distances are covered at 36, 48 and 72 km/h. Average speed (km/h):", 3 / (1 / 36 + 1 / 48 + 1 / 72), ["52", "50", "45"])
m("Profit & Loss", "Cost price of 47 articles equals selling price of 38. Profit (%):", (47 - 38) / 38 * 100, ["19.15", "23", "9"])
m("Profit & Loss", "A trader uses an 875 g weight for 1 kg and also charges 8% above cost. Total gain (%):", (1.08 / 0.875 - 1) * 100, ["20.50", "22.50", "14.29"])
m("Discount", "Successive discounts of 12%, 18% and 25% equal a single discount of (%):", (1 - 0.88 * 0.82 * 0.75) * 100, ["55", "44.12", "47.20"])
m("Discount", "Marked 45% above cost, then discounts of 15% and 8% are given. Profit (%):", (1.45 * 0.85 * 0.92 - 1) * 100, ["22", "15.67", "11.40"])
m("Profit & Loss", "Sold at 14% loss. Selling for Rs 2365 more would give 8% gain. Cost price (Rs):", 2365 / 0.22, ["16892.86", "29562.50", "11825"])
m("Profit & Loss", "Two items sold at Rs 13,455 each: 15% profit on one, 15% loss on the other. Net loss (Rs):", (13455 / 1.15 + 13455 / 0.85) - 2 * 13455, ["0", "403.65", "605.48"])
m("Compound Interest", "Compound interest on Rs 48,600 at 8.5% p.a. for 3 years, compounded annually (Rs):", 48600 * 1.085**3 - 48600, [fmt(48600 * 0.085 * 3), fmt(48600 * 1.085**2 - 48600), fmt(48600 * 1.085**3)])
m("Compound Interest", "A sum amounts to Rs 13,310 in 3 years and Rs 14,641 in 4 years at CI. The sum (Rs):", 13310 / (14641 / 13310) ** 3, ["11000", "9000", "10100"])
m("Compound Interest", "Difference between CI and SI on Rs 25,000 at 12% p.a. for 3 years (Rs):", 25000 * 1.12**3 - 25000 - 25000 * 0.12 * 3, ["360", "1080", "1152"])
m("Compound Interest", "Effective annual rate (%) for 9.6% p.a. compounded monthly:", ((1 + 0.096 / 12) ** 12 - 1) * 100, ["9.60", "9.82", "10.18"])
m("Simple Interest", "A sum doubles in 7.5 years at simple interest. In how many years will it become 4.6 times?", 3.6 * 7.5, ["34.50", "30", "22.50"])
m("Trains", "Trains of 284 m and 316 m run in opposite directions at 67 and 53 km/h. Time to cross (s):", 600 / ((67 + 53) * 5 / 18), ["180", "5", "20"])
m("Trains", "The same trains (284 m, 316 m) at 67 and 53 km/h run in the same direction. Time to cross (s):", 600 / ((67 - 53) * 5 / 18), ["42.86", "18", "142.86"])
m("Circular Track", "On a 1.8 km circular track, A (27 km/h) and B (45 km/h) start together in the same direction. First meeting after (s):", 1800 / ((45 - 27) * 5 / 18), ["100", "90", "240"])
m("Circular Track", "On a 1.2 km track, runners at 6, 8 and 10 km/h start together. They first meet again at the start after (s):", lcm(720, 540, 432), ["2160", "8640", "1440"])
m("Boats & Streams", "A boat goes 84 km downstream in 3.5 h and 52.5 km upstream in 3.5 h. Speed of the stream (km/h):", (84 / 3.5 - 52.5 / 3.5) / 2, ["9", "19.5", "3"])
m("Trains", "A train passes a 450 m platform in 34 s and a 270 m platform in 25 s. Train length (m):", (450 - 270) / 9 * 34 - 450, ["200", "250", "180"])
m("Time Speed Distance", "Walking at 4/5 of his usual speed, a man is 18 min late. His usual time (min):", 18 / (5 / 4 - 1), ["90", "14.40", "60"])
m("Time & Work", "A, B, C take 18, 27 and 36 days. A and B work 4 days, then C joins. Total days to finish:", 4 + (1 - 4 * (1 / 18 + 1 / 27)) / (1 / 18 + 1 / 27 + 1 / 36))
m("Time & Work", "24 men or 36 women finish a job in 18 days. 16 men and 30 women take (days):", 36 * 18 / (16 * 1.5 + 30), ["14", "10", "13.50"])
m("Pipes & Cisterns", "Pipes fill a tank in 16 h and 24 h; a drain empties it in 32 h. All open, time to fill (h):", 1 / (1 / 16 + 1 / 24 - 1 / 32), ["9.60", "24", "11.25"])
m("Time & Work", "15 men, 8 h/day, build 360 m in 24 days. Days for 20 men at 9 h/day to build 540 m:", 15 * 8 * 24 / 360 * 540 / (20 * 9), ["27", "20", "18"])
m("Algebraic Identities", "If a + b = 17.5 and ab = 63.24, then a^2 + b^2 =", 17.5**2 - 2 * 63.24, ["306.25", "243.01", "116.25"])
m("Algebraic Identities", "1987^2 - 1013^2 =", 1987**2 - 1013**2, ["974000", "2922", "3948169"])
m("Algebraic Identities", "If x + 1/x = 7.5, then x^3 + 1/x^3 =", 7.5**3 - 3 * 7.5, ["421.88", "410.63", "54.75"])
m("Quadratic Equations", "Larger root of 3x^2 - 47x + 154 = 0:", (47 + sqrt(47**2 - 12 * 154)) / 6)
m("Linear Equations", "If 47x + 53y = 1189 and 53x + 47y = 1211, then x =", (24 + 22 / 6) / 2)
m("Quadratic Equations [JEE Main 2015]", "a and b are roots of x^2 - 6x - 2 = 0 and a_n = a^n - b^n. Value of (a_10 - 2a_8) / (2a_9):", (lambda r, s: ((r**10 - s**10) - 2 * (r**8 - s**8)) / (2 * (r**9 - s**9)))(3 + sqrt(11), 3 - sqrt(11)), ["6", "-6", "-3"])
m("Mensuration 3D", "Total surface area of a cylinder, r = 10.5 cm, h = 24 cm (pi = 22/7), in sq cm:", 2 * F(22, 7) * 10.5 * (10.5 + 24), [fmt(2 * F(22, 7) * 10.5 * 24), fmt(F(22, 7) * 10.5 * 10.5 * 24), fmt(2 * F(22, 7) * 10.5 * (10.5 + 24) / 2)])
m("Mensuration 3D", "A sphere's radius increases by 12%. Its volume increases by (%):", (1.12**3 - 1) * 100, ["36", "25.44", "12"])
m("Pythagoras", "A 6.5 m ladder's foot is 2.5 m from a wall. The top slides down 0.8 m. The foot moves out by (m):", sqrt(6.5**2 - (sqrt(6.5**2 - 2.5**2) - 0.8)**2) - 2.5)
m("Pythagoras", "A rhombus has diagonals 48 cm and 55 cm. Its side (cm):", sqrt(24**2 + 27.5**2), ["51.50", "73", "36"])
m("Heights & Distances", "From 85 m away, the angle of elevation of a tower's top is 32 degrees. Tower height (m):", 85 * tan(radians(32)), [fmt(85 / tan(radians(32))), fmt(85 * math.sin(radians(32))), fmt(85 * math.cos(radians(32)))])

# ───────────────────────── APTITUDE (59) ─────────────────────────
ap("Clocks", "Angle between the clock hands at 7:38 (degrees):", abs(30 * 7 - 5.5 * 38), ["359", "11", "2"])
ap("Clocks", "Smaller angle between the clock hands at 11:47 (degrees):", min(abs(330 - 5.5 * 47), 360 - abs(330 - 5.5 * 47)), ["288.50", "78.50", "68.50"])
ap("Clocks", "Minutes past 4 o'clock when the hands first coincide:", 240 / 11, ["20", "22.50", "21.50"])
ap("Calendars", "26 January 1950 was a:", wd(1950, 1, 26), ["Wednesday", "Friday", "Sunday"])
ap("Calendars", "2 October 1869 was a:", wd(1869, 10, 2), ["Friday", "Sunday", "Monday"])
ap("Calendars", "Next year whose calendar is exactly the same as 2027:", next(y for y in range(2028, 2100) if wd(y, 1, 1) == wd(2027, 1, 1) and (y % 4 == 0) == (2027 % 4 == 0)), ["2033", "2034", "2039"])
ap("Number Series", "Next term: 7, 23, 55, 103, 167, ?", 247, ["231", "251", "263"])
ap("Number Series", "Next term: 3, 10, 29, 66, 127, ?", 6**3 + 2, ["196", "216", "220"])
ap("Number Series", "Next term: 1, 4, 27, 256, 3125, ?", 6**6, ["7776", "15625", "36864"])
ap("Number Series", "Next term: 2, 12, 36, 80, 150, ?", 36 * 7, ["216", "240", "294"])
ap("Number Series", "Next term: 6, 11, 21, 36, 56, ?", 81, ["76", "86", "91"])
ap("Odd One Out", "Odd one out: 1331, 2197, 3375, 4914, 6859", "4914", ["1331", "3375", "6859"])
ap("Permutations", "47 people each shake hands once with every other person. Total handshakes:", comb(47, 2), ["2162", "1128", "1034"])
ap("Permutations", "Number of diagonals of a 23-sided polygon:", 23 * 20 // 2, ["253", "460", "207"])
ap("Permutations", "Distinct arrangements of the letters of MISSISSIPPI:", factorial(11) // (factorial(4) * factorial(4) * factorial(2)), ["39916800", "69300", "17325"])
ap("Permutations", "Distinct arrangements of the letters of ENGINEERING:", factorial(11) // (factorial(3) * factorial(3) * factorial(2) * factorial(2)), ["554400", "138600", "39916800"])
ap("Combinations", "A 5-member committee from 8 men and 6 women must have at least 3 women. Number of ways:", sum(comb(6, w) * comb(8, 5 - w) for w in (3, 4, 5)), ["560", "1286", "566"])
ap("Permutations", "9 people sit around a round table; 2 particular people must never sit together. Number of ways:", factorial(8) - 2 * factorial(7), ["40320", "10080", "282240"])
ap("Probability", "Three dice are rolled. P(sum = 10), to 4 d.p.:", round(sum(1 for a in range(1, 7) for b in range(1, 7) for c in range(1, 7) if a + b + c == 10) / 216, 4), ["0.1157", "0.0833", "0.1389"])
ap("Probability", "P(at least one six in 4 throws of a die), to 4 d.p.:", round(1 - (5 / 6)**4, 4), ["0.6667", "0.4823", "0.5000"])
ap("Probability", "Two cards are drawn from a deck. P(both are face cards), to 4 d.p.:", round(comb(12, 2) / comb(52, 2), 4), ["0.0533", "0.0045", "0.0588"])
ap("Probability", "A bag has 7 red, 5 blue and 3 green balls. Three are drawn. P(one of each colour), to 4 d.p.:", round(7 * 5 * 3 / comb(15, 3), 4), ["0.0311", "0.1538", "0.3077"])
ap("Probability", "A coin is tossed 10 times. P(exactly 6 heads), to 4 d.p.:", round(comb(10, 6) / 2**10, 4), ["0.6000", "0.1172", "0.3770"])
ap("Probability", "A leap year is chosen at random. P(it has 53 Fridays), to 4 d.p.:", round(2 / 7, 4), ["0.1429", "0.1448", "0.4286"])
ap("Trains", "A 360 m train at 81 km/h overtakes a cyclist riding at 18 km/h in the same direction. Time (s):", 360 / ((81 - 18) * 5 / 18), ["13.24", "16", "72"])
ap("Trains", "A train at 72 km/h crosses a 1.2 km bridge in 75 s. Train length (m):", 20 * 75 - 1200, ["1500", "240", "5400"])
ap("Time Speed Distance", "A man goes at 4.5 km/h and returns at 7.5 km/h, taking 5 h 20 min in all. One-way distance (km):", (16 / 3) / (1 / 4.5 + 1 / 7.5), ["20", "16", "12"])
ap("Time Speed Distance", "Round trip at 72 km/h out and 48 km/h back. Average speed (km/h):", 2 * 72 * 48 / (72 + 48), ["60", "56", "62.40"])
ap("Boats & Streams", "A man rows 48 km downstream in 4 h and back upstream in 8 h. Speed in still water (km/h):", (12 + 6) / 2, ["6", "3", "12"])
ap("Races", "In a 1 km race A beats B by 120 m and B beats C by 150 m. A beats C by (m):", 1000 - 880 * 850 / 1000, ["270", "250", "232"])
ap("Ages", "Ages are in ratio 7:9. Eight years ago they were 5:7. Sum of present ages:", 16 * 4, ["48", "80", "72"])
ap("Ages", "A couple averaged 23 years at marriage. 5 years later, with a 1-year-old child, the family's average age is:", (46 + 10 + 1) / 3, ["28", "18.67", "23"])
ap("Growth", "A population grew 20% a year for 3 years to 2,48,832. Population 3 years ago:", 248832 / 1.2**3, ["149299", "207360", "99533"])
ap("Depreciation", "A machine worth Rs 8,75,000 depreciates 12% a year. Value after 3 years (Rs):", 875000 * 0.88**3, ["560000", "589520", "666400"])
ap("Directions", "Walk 30 m south, 40 m east, 50 m north, then 40 m west. Distance from start (m):", 20, ["0", "80", "160"])
ap("Coding", "If A = 1, B = 2, ..., Z = 26, the letter-sum of OUROBOROS is:", letters("OUROBOROS"), None)
ap("Cubes", "A 6 cm painted cube is cut into 1 cm cubes. Cubes with exactly one painted face:", 6 * 4**2, ["64", "48", "216"])
ap("Cubes", "An 8 cm painted cube is cut into 1 cm cubes. Cubes with exactly two painted faces:", 12 * 6, ["96", "48", "56"])
ap("Partnership", "A invests 3 times as much as B; B's money stays twice as long. Total profit Rs 1,56,000. B's share (Rs):", 156000 * 2 / 5, ["39000", "52000", "93600"])
ap("Sets", "65% passed English, 72% passed Maths, 18% failed both. Passed both (%):", 65 + 72 - (100 - 18), ["37", "47", "18"])
ap("Time & Work", "28 men can finish in 45 days. After 15 days, 7 men leave. Days to finish the rest:", 28 * 30 / 21, ["30", "35", "45"])
ap("Time & Work", "A is 40% more efficient than B, who alone takes 42 days. Together they take (days):", 42 / 2.4, ["21", "30", "25.20"])
ap("Averages", "Average of 12 consecutive odd numbers is 74. The largest of them:", 74 + 11, ["86", "96", "80"])
ap("Number System", "Sum of all 3-digit numbers divisible by 7:", sum(n for n in range(100, 1000) if n % 7 == 0))
ap("Number System", "How many 4-digit numbers have all distinct digits?", 9 * 9 * 8 * 7, ["5040", "4464", "3024"])
ap("Number System", "5-digit numbers formed from 1, 2, 3, 4, 5 (no repetition) that are divisible by 4:", sum(1 for p in __import__('itertools').permutations('12345') if int(''.join(p)) % 4 == 0), ["30", "36", "18"])
ap("Number System", "How many integers from 1 to 1000 are divisible by 3 or 5?", sum(1 for n in range(1, 1001) if n % 3 == 0 or n % 5 == 0), ["533", "400", "533.50"])
ap("Number System", "Two numbers in ratio 7:11 have LCM 2002. Their sum:", 18 * 26, ["234", "936", "312"])
ap("Coins", "A bag has 50p, 25p and 10p coins in ratio 5:9:4, worth Rs 206 in all. Number of 25p coins:", 9 * 206 / 5.15, ["280", "450", "160"])
ap("Discount", "Buy 12 get 3 free. Effective discount (%):", 3 / 15 * 100, ["25", "15", "12"])
ap("Profit & Loss", "By selling 33 m of cloth a trader gains the selling price of 11 m. Profit (%):", 11 / 22 * 100, ["33.33", "25", "66.67"])
ap("Simple Interest", "Simple interest on Rs 7,500 at 9% p.a. for 2 years 5 months (Rs):", 7500 * 0.09 * 29 / 12, ["1350", "1687.50", "1575"])
ap("Mensuration", "A wire bent into a square encloses 1764 sq cm. Bent into a circle, it encloses (sq cm, pi = 22/7):", float(F(22, 7) * (F(168, 2) / F(22, 7)) ** 2), ["1764", "1386", "2464"])
ap("Indices", "If 4^(2x + 1) = 1024^3, then x =", 7, ["7.50", "14", "6"])
ap("Mixtures", "75 kg of copper:zinc = 7:8. Copper to add (kg) to make it 3:2:", 75 * 8 / 15 * 3 / 2 - 75 * 7 / 15, ["15", "35", "40"])
ap("Percentages", "In 50 litres of a 16% sugar solution, 10 litres of water evaporates. New sugar concentration (%):", 8 / 40 * 100, ["16", "18", "26"])
ap("Ratio", "Rs 7,84,000 is split among A, B, C so that A:B = 3:4 and B:C = 6:5. C's share (Rs):", 784000 * F(10, 31), None)
ap("Blood Relations", "Pointing to a man, A (a man) says: \"His mother is the only daughter of my mother.\" A is the man's:", "Maternal uncle", ["Father", "Brother", "Grandfather"])
ap("Directions", "Facing north-east, you turn 135 degrees clockwise, then 270 degrees anticlockwise. You now face:", {0:"North",45:"North-east",90:"East",135:"South-east",180:"South",225:"South-west",270:"West",315:"North-west"}[(45 + 135 - 270) % 360], ["North-west", "South", "South-west"])

# ───────────────────────── TECH (30 giveaways) ─────────────────────────
T = [
 ("CPU stands for:", "Central Processing Unit", ["Central Program Unit", "Computer Processing Unit", "Central Processor Utility"]),
 ("RAM stands for:", "Random Access Memory", ["Read Access Memory", "Rapid Access Memory", "Random Allocation Memory"]),
 ("HTML stands for:", "HyperText Markup Language", ["HighText Machine Language", "HyperText Markdown Language", "HyperTool Markup Language"]),
 ("Which of these is NOT an operating system?", "Python", ["Linux", "Windows", "Android"]),
 ("Keyboard shortcut to undo:", "Ctrl + Z", ["Ctrl + Y", "Ctrl + U", "Ctrl + X"]),
 ("How many bytes are in 1 kibibyte (KiB)?", "1024", ["1000", "1048", "512"]),
 ("Which language styles web pages?", "CSS", ["HTML", "SQL", "XML"]),
 ("Which symbol starts a single-line comment in Python?", "#", ["//", "--", "/*"]),
 ("Which SQL command reads data from a table?", "SELECT", ["GET", "FETCH", "EXTRACT"]),
 ("Which SQL command deletes an entire table?", "DROP TABLE", ["DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"]),
 ("Which protocol is used for secure websites?", "HTTPS", ["HTTP", "FTP", "SMTP"]),
 ("Which protocol sends email?", "SMTP", ["FTP", "HTTP", "SSH"]),
 ("Which data structure is Last-In-First-Out?", "Stack", ["Queue", "Array", "Tree"]),
 ("Which data structure is First-In-First-Out?", "Queue", ["Stack", "Heap", "Graph"]),
 ("In C, Java and Python, indexing starts at:", "0", ["1", "-1", "Any number you choose"]),
 ("Who created Python?", "Guido van Rossum", ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"]),
 ("Who created the C language?", "Dennis Ritchie", ["Ken Thompson", "James Gosling", "Guido van Rossum"]),
 ("Who created the Linux kernel?", "Linus Torvalds", ["Richard Stallman", "Steve Wozniak", "Ken Thompson"]),
 ("Who invented the World Wide Web?", "Tim Berners-Lee", ["Vint Cerf", "Bill Gates", "Steve Jobs"]),
 ("Decimal 10 in binary:", "1010", ["1001", "1100", "0110"]),
 ("Binary 1111 in decimal:", "15", ["16", "14", "8"]),
 ("URL stands for:", "Uniform Resource Locator", ["Universal Resource Link", "Uniform Record Locator", "Universal Routing Locator"]),
 ("Which memory loses its data when power is off?", "RAM", ["ROM", "SSD", "Hard disk"]),
 ("Which loop always runs at least once?", "do-while", ["for", "while", "foreach"]),
 ("Output of print(10 // 3) in Python:", "3", ["3.33", "4", "3.0"]),
 ("Output of print(2 ** 3) in Python:", "8", ["6", "9", "5"]),
 ("Which Git command downloads a copy of a remote repository?", "git clone", ["git copy", "git fork", "git get"]),
 ("Which number system has base 16?", "Hexadecimal", ["Octal", "Decimal", "Binary"]),
 ("Malware that locks your files and demands payment:", "Ransomware", ["Spyware", "Adware", "Firmware"]),
 ("Which HTML tag creates a hyperlink?", "<a>", ["<link>", "<href>", "<url>"]),
]

assert len(M) == 60, len(M)
assert len(A) == 59, len(A)
assert len(T) == 30, len(T)

def finish(topic, q, ans, wrong):
    if "4 d.p." in q and not isinstance(ans, str):
        a = f"{float(ans):.4f}"
        w = [f"{float(x):.4f}" for x in wrong]
        assert len({a, *w}) == 4 and a not in w, (q, a, w)
        return q, a, [a] + w
    a = fmt(ans)
    if a.find('.') >= 0 and 'd.p.' not in q and isinstance(ans, (float, F)): q = q.rstrip(':=') .rstrip() + " (2 d.p.):" if not q.endswith('=') else q + " (2 d.p.)"
    w = list(wrong) if wrong else auto_wrong(float(ans))
    if not isinstance(ans, str):  # drop hand-written distractors that collide with the answer
        keep = [x for x in w if abs(float(x) - float(ans)) > 0.004]
        if len(keep) < len(w): print("  replaced colliding distractor in:", q[:70])
        w = keep
    for x in auto_wrong(float(ans)) if not isinstance(ans, str) else []:
        if len(set(w)) >= 3: break
        if x not in w: w.append(x)
    w = list(dict.fromkeys(w))[:3]
    opts = [a] + [str(x) for x in w]
    assert len(set(opts)) == 4, (q, opts)
    if not isinstance(ans, str):
        assert all(abs(float(x) - float(ans)) > 0.004 for x in w), ("distractor equals answer", q, opts)
    q = __import__('re').sub(r"\(([^()]+)\) \(2 d\.p\.\)", r"(\1, 2 d.p.)", q)
    return q, a, opts

out = [{"id": "PZ-INTRO-001", "lv": 0, "q": "What is the name of the serpent which tries to devour itself?",
        "options": None, "correct": "OUROBOROS", "wrong": ["BASILISK", "JORMUNGANDR", "LEVIATHAN"], "type": "LORE", "topic": "Lore"}]
bodies = []
for t, q, a, w in M: bodies.append(("MATHS", t, *finish(t, q, a, w)))
for t, q, a, w in A: bodies.append(("APTITUDE", t, *finish(t, q, a, w)))
for q, a, w in T: bodies.append(("BASIC_TECH", "Basic Tech", q, a, [a] + w))

# Spread over levels 1-60: tech giveaways sprinkled evenly, the rest in a fixed shuffle.
hard = [b for b in bodies if b[0] != "BASIC_TECH"]; easy = [b for b in bodies if b[0] == "BASIC_TECH"]
rng.shuffle(hard)
seq, ei = [], 0
for i, h in enumerate(hard):
    seq.append(h)
    if i % 4 == 3 and ei < len(easy): seq.append(easy[ei]); ei += 1
seq += easy[ei:]
assert len(seq) == 149
for i, (dom, t, q, a, opts) in enumerate(seq):
    out.append({"id": f"J-{i + 1:03d}", "lv": 1 + i * 60 // 149, "q": q, "correct": a, "wrong": [o for o in opts if o != a],
                "type": dom, "topic": t})

final = []
for o in out:
    opts = [o["correct"]] + o["wrong"]; rng.shuffle(opts)
    final.append({"id": o["id"], "lv": o["lv"], "q": o["q"], "options": opts, "a": opts.index(o["correct"]),
                  "type": o["type"], "topic": o["topic"]})
assert len(final) == 150 and len({f["q"] for f in final}) == 150
assert max(f["lv"] for f in final) == 60 and {f["lv"] for f in final} == set(range(0, 61))

js = ("// 1st-year question bank (generated by bank150.py; answers computed, not typed).\n"
      "// Each entry: options = 4 choices, a = index of the correct option.\n"
      "export const JUNIOR = " + json.dumps(final, indent=1, ensure_ascii=False) + ";\n")
open(sys.argv[1] if len(sys.argv) > 1 else "junior.js", "w").write(js)
from collections import Counter
print("OK", len(final), Counter(f["type"] for f in final), "answer slots", Counter(f["a"] for f in final))
