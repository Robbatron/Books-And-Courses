# Write a function called range_in_list which accepts a list and start/end indices,
# and returns the sum of the values between (and including) the start and end index.

# If a start parameter is not passed in, it should default to zero. If an end parameter
# is not passed in, it should default to the last value in the list. Also, if the end
# argument is too large, the sum should still go through the end of the list.

def range_in_list(lst, start=0, end=None):
    end = end or lst[-1]
    return sum(lst[start:end+1])


print(range_in_list([1, 2, 3, 4], 0, 2))  # 6
print(range_in_list([1, 2, 3, 4], 0, 3))  # 10
print(range_in_list([1, 2, 3, 4], 1))  # 9
print(range_in_list([1, 2, 3, 4]))  # 10
print(range_in_list([1, 2, 3, 4], 0, 100))  # 10
print(range_in_list([], 0, 1))  # 0
