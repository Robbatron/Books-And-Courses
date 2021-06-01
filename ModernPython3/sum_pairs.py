# Write a function called sum_pairs which accepts a list and a number and returns
# the first pair of numbers that sum to the number passed to the function

def sum_pairs(my_list, number):
    for i in my_list:
        remainder = number - i
        if remainder in my_list:
            return [i, remainder]
    return []


print(sum_pairs([4, 2, 10, 5, 1], 6))  # [4,2]
print(sum_pairs([11, 20, 4, 2, 1, 5], 100))  # []
