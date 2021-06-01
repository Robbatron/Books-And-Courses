# Write a function called same_frequency which accepts two numbers and returns True
# if they contain the same frequency of digits. Otherwise, it returns False.

def same_frequency(first, second):
    return len(str(first)) == len(str(second))


print(same_frequency(551122, 221515))  # True
print(same_frequency(321142, 3212215))  # False
print(same_frequency(1212, 2211))  # True
