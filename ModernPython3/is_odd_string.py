# Write a function called is_odd_string which returns true if sum of each
# character's position in the alphabet is odd. For example, "a" is in the first
# position, "b" is in the second position, and so on. If the sum is even,
# return false. NOTE: INDEXING STARTS AT 1. A is position 1, NOT POSITION 0.

def is_odd_string(string):
    lower_alphabet_dict = {chr(i + 96): i for i in range(1, 27)}
    total = 0
    for char in string:
        total += lower_alphabet_dict[char]
    return total % 2 == 1


is_odd_string('a')  # True
is_odd_string('aaaa')  # False
is_odd_string('amazing')  # True
is_odd_string('veryfun')  # True
is_odd_string('veryfunny')  # False
