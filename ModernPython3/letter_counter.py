# Write a function called letter_count which accepts a string and returns a
# function. When the inner function is invoked it should accept a parameter
# which is a letter, and the inner function should return the number of times
# that letter appears. This inner function should be case insensitive.


def letter_counter(string):
    def inner(letter):
        return string.lower().count(letter)
    return inner


counter = letter_counter('Amazing')
print(counter('a'))  # 2
print(counter('m'))  # 1

# counter2 = letter_counter('This Is Really Fun!')
# counter2('i')  # 2
# counter2('t')  # 1
