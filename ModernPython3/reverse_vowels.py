# Write a function called reverse_vowels. This function should reverse the
# vowels in a string. Any characters which are not vowels should remain in their
# original position. You should not consider "y" to be a vowel.

def reverse_vowels(string):
    vowels = {}
    new_string = list(string)
    for key, char in enumerate(string):
        if char in 'aeiou':
            vowels[key] = char
    d = dict(zip(vowels.keys(), reversed(vowels.values())))
    for s in d:
        new_string[s] = d[s]
    return ''.join(new_string)


print(reverse_vowels("Hello!")) # "Holle!"
print(reverse_vowels("Tomatoes"))  # "Temotaos"
print(reverse_vowels("Reverse Vowels In A String"))  # "RivArsI Vewols en e Streng"
print(reverse_vowels("aeiou"))  # "uoiea"
print(reverse_vowels("why try, shy fly?"))  # "why try, shy fly?"
