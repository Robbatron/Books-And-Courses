# Write a function called includes which accepts a collection, a value, and an optional starting index. The function
# should return True if the value exists in the collection when we search starting from the starting index. Otherwise,
# it should return False.

# The collection can be a string, a list, or a dictionary. If the collection is a string or array, the third parameter
# is a starting index for where to search from. If the collection is a dictionary, the function searches for the value
# among values in the dictionary; since objects have no sort order, the third parameter is ignored.

def includes(collection, value, starting_index=0):
    c_type = type(collection)
    if c_type == list or c_type == str:
        return value in collection[starting_index:]
    return value in collection.values()


# includes([1, 2, 3], 3)  # True
# includes([1, 2, 3], 1, 2)  # False
# includes({'a': 1, 'b': 2}, 1)  # True
# includes({'a': 1, 'b': 2}, 'a')  # False
# includes('abcd', 'b')  # True
# includes('abcd', 'e')  # False
