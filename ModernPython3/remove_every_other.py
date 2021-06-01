# Write a function called remove_every_other that accepts a list
# and returns a new list with every second value removed.

def remove_every_other(my_list):
    return my_list[0::2]


print(remove_every_other([1, 2, 3, 4, 5]))  # [1,3,5]
print(remove_every_other([5, 1, 2, 4, 1]))  # [5,2,1]
print(remove_every_other([1]))  # [1]
