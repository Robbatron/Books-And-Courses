# Write a function called min_max_key_in_dictionary which returns a list
# with the lowest and highest keys in the dictionary. You can assume that
# the dictionary will have keys that are numbers.

def min_max_key_in_dictionary(dictionary):
    keys = sorted(dictionary.keys())
    return [keys[0], keys[-1]]


print(min_max_key_in_dictionary({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'}))  # [1,10]
print(min_max_key_in_dictionary({1: "Elie", 4: "Matt", 2: "Tim"}))  # [1,4]
