# Write a function called find_the_duplicate which accepts an array of numbers containing
# a single duplicate. The function returns the number which is a duplicate or None if there
# are no duplicates.

def find_the_duplicate(lst):
    for item in lst:
        if lst.count(item) > 1:
            return item
    return None


find_the_duplicate([1, 2, 1, 4, 3, 12])  # 1
find_the_duplicate([6, 1, 9, 5, 3, 4, 9])  # 9
find_the_duplicate([2, 1, 3, 4])  # None
