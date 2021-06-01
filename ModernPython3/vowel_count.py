# Write a function called vowel_count that accepts a string and returns a dictionary with the keys as the vowels and
# values as the count of times that vowel appears in the string

# Version 1
from collections import Counter
def vowel_count(string):
    return dict(Counter(filter(lambda s: s in 'aeiou', string.lower())))

# Version 2: we don't need no stinking imports
def vowel_count(string):
    d = {}
    iterator = string.lower()
    for i in iterator:
        print(i)
        if i in 'aeiou':
            d[i] = iterator.count(i)
    return d


print(vowel_count('awesome'))  # {'a': 1, 'e': 2, 'o': 1}
print(vowel_count('Elie'))  # {'e': 2, 'i': 1}
print(vowel_count('Colt'))  # {'o': 1}
