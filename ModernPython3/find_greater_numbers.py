# Write a function called find_greater_numbers which accepts a list and
# returns the number of times a number is followed by a larger number
# across the entire list.

# Take the example find_greater_numbers([6, 1, 2, 7])  # 4, there are 4 times
# where a number is followed by a greater number:
#   1) 2 > 1
#   2) 7 > 6
#   3) 7 > 1
#   4) 7 > 2

def find_greater_numbers(lst):
    counter = 0
    for key, value in enumerate(lst):
        for item in range(key, len(lst)):
            # there are probably wasted iterations towards the end of the list
            if value < lst[item]:
                counter += 1
    return counter


print(find_greater_numbers([1, 2, 3]))  # 3
print(find_greater_numbers([6, 1, 2, 7]))  # 4
print(find_greater_numbers([5, 4, 3, 2, 1]))  # 0
print(find_greater_numbers([]))  # 0
