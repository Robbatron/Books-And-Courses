# This is another trickier exercise. Don't feel bad if you get stuck or need to
# move on and come back later on!

# Write a function called mode. This function accepts a list of numbers and returns
# the most frequent number in the list of numbers. You can assume that the mode
# will be unique

def mode(collection):
    count = {val: collection.count(val) for val in collection}
    max_value = max(count.values())
    correct_index = list(count.values()).index(max_value)
    return list(count.keys())[correct_index]

# def mode(lst):
#     d = {}.fromkeys(lst, 0)
#     for l in lst:
#         if l in d:
#             d[l] += 1
#     m = 0
#     for i in d:
#         if d[i] > m:
#             m = i
#     return m


mode([2, 4, 1, 2, 3, 3, 4, 4, 5, 4, 4, 6, 4, 6, 7, 4])  # 4
