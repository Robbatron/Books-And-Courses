# Write a function called reverse_string which accepts a string
# and returns a new string with all the characters reversed

# version 1
def reverse_string(string):
    return ''.join(reversed(string))


# version 2 - probably faster
def reverse_string(string):
    s = ''
    for i, char in enumerate(string[::-1]):
        s += char
    return s


print(reverse_string('awesome'))  # 'emosewa'
print(reverse_string('Colt'))  # 'tloC'
print(reverse_string('Elie'))  # 'eilE'
