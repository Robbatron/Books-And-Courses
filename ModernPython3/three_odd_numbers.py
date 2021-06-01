# Write a function called three_odd_numbers, which accepts a list of numbers
# and returns True if any three consecutive numbers sum to an odd number.

def three_odd_numbers(lst):
    for i in range(0, len(lst) - 2):
        total = lst[i] + lst[i + 1] + lst[i + 2]
        if total % 2 == 1:
            return True
    return False


three_odd_numbers([1, 2, 3, 4, 5])  # True
three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0])  # True
three_odd_numbers([5, 2, 1])  # False
three_odd_numbers([1, 2, 3, 3, 2])  # False
