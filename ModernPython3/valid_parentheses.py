# Write a function called valid_parentheses that takes a string of parentheses,
# and determines if the order of the parentheses is valid. valid_parentheses
# should return True if the string is valid, and False if it's invalid.

def valid_parentheses(string):
    count = 0
    for char in string:
        if count < 0:  # paren close found before open
            return False
        if char == "(":
            count += 1
        elif char == ")":
            count -= 1
    return count == 0


print(valid_parentheses("()"))  # True
print(valid_parentheses(")(()))"))  # False
print(valid_parentheses("("))  # False
print(valid_parentheses("(())((()())())"))  # True
print(valid_parentheses('))(('))  # False
print(valid_parentheses('())('))  # False
print(valid_parentheses('()()()()())()('))  # False
