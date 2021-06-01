# Write a function called two_list_dictionary which accepts two lists of varying lengths.The first list consists of
# keys and the second one consists of values. Your function should return a dictionary created from the keys and values.
# If there are not enough values, the remaining keys should have a value of null. If there not enough keys, just ignore
# the remaining values.


def two_list_dictionary(keys, values):
    dictionary = {}
    for key, value in enumerate(keys):
        try:
            dictionary[value] = values[key]
        except IndexError:
            dictionary[value] = None
    return dictionary


print(two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3]))  # {'a': 1, 'b': 2, 'c': 3, 'd': None}
print(two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4]))  # {'a': 1, 'b': 2, 'c': 3}
print(two_list_dictionary(['x', 'y', 'z'], [1,2]))  # {'x': 1, 'y': 2, 'z': None}
