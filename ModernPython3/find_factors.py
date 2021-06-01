# Write a function called find_factors which accepts a number and returns a list of all of the numbers which are
# divisible by starting from 1 and going up to the number.

def find_factors(num):
    i = 1
    numbers = []
    while i <= num:
        if num % i == 0:
            numbers.append(i)
        i += 1
    return numbers


find_factors(10)  # [1,2,5,10 ]
find_factors(11)  # [1,11]
find_factors(111)  # [1,3,37,111 ]
find_factors(321421)  # [1,293,1097,321421 ]
find_factors(412146)
# [1,2,3,6,7,9,14,18,21,42,63,126,3271,6542,9813,19626,22897,29439,45794,58878,68691,137382,206073,412146]
